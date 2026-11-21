<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

const { header } = useAppConfig()
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const { barVisible, toggleBar } = useBotUuid()

/** Lingue configurate in i18n: servono solo codice e nome. */
type LocaleOption = { code: typeof locale.value, name?: string }
const localeOptions = computed(() => locales.value as LocaleOption[])

const localeItems = computed(() => {
  return localeOptions.value
    .filter(l => l.code !== locale.value)
    .map(l => ({
      label: l.name || l.code,
      icon: 'i-lucide-globe',
      onSelect: () => {
        navigateTo(switchLocalePath(l.code))
      }
    }))
})

const currentLocaleLabel = computed(() => {
  const current = localeOptions.value.find(l => l.code === locale.value)
  return current?.name || locale.value.toUpperCase()
})

const botBarTooltip = computed(() => locale.value === 'it' ? 'Bot UUID' : 'Bot UUID')
</script>

<template>
  <UHeader
    :ui="{ center: 'flex-1' }"
    :to="header?.to || '/'"
  >
    <UContentSearchButton
      v-if="header?.search"
      :collapsed="false"
      class="w-full"
    />

    <template
      v-if="header?.logo?.dark || header?.logo?.light || header?.title"
      #title
    >
      <div class="flex items-center gap-2">
        <UColorModeImage
          v-if="header?.logo?.dark || header?.logo?.light"
          :light="header?.logo?.light!"
          :dark="header?.logo?.dark!"
          :alt="header?.logo?.alt"
          class="h-7 w-auto shrink-0"
        />
        <span class="font-semibold text-highlighted hidden sm:inline">Docs</span>
      </div>
    </template>

    <template
      v-else
      #left
    >
      <NuxtLink :to="header?.to || '/'">
        <AppLogo class="w-auto h-6 shrink-0" />
      </NuxtLink>

      <TemplateMenu />
    </template>

    <template #right>
      <UContentSearchButton
        v-if="header?.search"
        class="lg:hidden"
      />

      <UTooltip :text="botBarTooltip">
        <UButton
          color="neutral"
          variant="ghost"
          icon="i-lucide-key-round"
          :class="{ 'bg-elevated': barVisible }"
          @click="toggleBar"
        />
      </UTooltip>

      <UDropdownMenu :items="localeItems">
        <UButton
          color="neutral"
          variant="ghost"
          icon="i-lucide-languages"
          :label="currentLocaleLabel"
          :ui="{ label: 'hidden sm:inline' }"
        />
      </UDropdownMenu>

      <UColorModeButton v-if="header?.colorMode" />

      <template v-if="header?.links">
        <UButton
          v-for="(link, index) of header.links"
          :key="index"
          v-bind="{ color: 'neutral', variant: 'ghost', ...link }"
        />
      </template>
    </template>

    <template #body>
      <UContentNavigation
        highlight
        :navigation="navigation"
      />
    </template>
  </UHeader>
</template>
