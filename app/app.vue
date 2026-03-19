<script setup lang="ts">
import type { Collections, ContentNavigationItem } from '@nuxt/content'

const { seo } = useAppConfig()
const { locale, defaultLocale } = useI18n()

const collection = computed(() => ('content_' + locale.value) as keyof Collections)

function prefixNavigationPaths(items: ContentNavigationItem[], prefix: string): ContentNavigationItem[] {
  return items.map(item => ({
    ...item,
    path: prefix + item.path,
    children: item.children ? prefixNavigationPaths(item.children, prefix) : undefined
  }))
}

const { data: rawNavigation } = await useAsyncData(
  'navigation-' + locale.value,
  () => queryCollectionNavigation(collection.value),
  { watch: [locale] }
)

const navigation = computed(() => {
  if (!rawNavigation.value) return rawNavigation.value
  const prefix = locale.value === defaultLocale ? '' : '/' + locale.value
  if (!prefix) return rawNavigation.value
  return prefixNavigationPaths(rawNavigation.value, prefix)
})

const { data: rawFiles } = useLazyAsyncData(
  'search-' + locale.value,
  () => queryCollectionSearchSections(collection.value),
  { server: false, watch: [locale] }
)

const files = computed(() => {
  if (!rawFiles.value) return rawFiles.value
  const prefix = locale.value === defaultLocale ? '' : '/' + locale.value
  if (!prefix) return rawFiles.value
  return rawFiles.value.map(file => ({
    ...file,
    id: prefix + file.id
  }))
})

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: locale.value
  }
})

useSeoMeta({
  titleTemplate: `%s - ${seo?.siteName}`,
  ogSiteName: seo?.siteName,
  twitterCard: 'summary_large_image'
})

provide('navigation', navigation)
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator />

    <AppHeader />

    <ClientOnly>
      <BotUuidBar />
    </ClientOnly>

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <AppFooter />

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
      />
    </ClientOnly>
  </UApp>
</template>
