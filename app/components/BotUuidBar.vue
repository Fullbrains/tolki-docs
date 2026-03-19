<script setup lang="ts">
const { botUuid, setBotUuid, barVisible, toggleBar, PLACEHOLDER } = useBotUuid()
const { locale } = useI18n()
const inputValue = ref(botUuid.value)

watch(inputValue, (val) => {
  setBotUuid(val)
})

const t = computed(() => locale.value === 'it' ? {
  label: 'Bot UUID (opzionale)',
  help: 'Copia/incolla il tuo Bot UUID dalle impostazioni di Tolki Studio.',
  hide: 'Nascondi'
} : {
  label: 'Bot UUID (optional)',
  help: 'Copy/paste your Bot UUID from Tolki Studio\'s settings.',
  hide: 'Hide'
})
</script>

<template>
  <div v-if="barVisible" class="w-full border-b border-muted bg-elevated/50">
    <div class="w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-3 py-4">
      <div class="flex-1">
        <UFormField :label="t.label" :help="t.help">
          <UInput
            id="bot-uuid-input"
            v-model="inputValue"
            :placeholder="PLACEHOLDER"
            size="sm"
            class="max-w-lg font-mono w-full"
            :ui="{ base: 'font-mono text-xs' }"
          />
        </UFormField>
      </div>

      <UButton
        color="neutral"
        variant="ghost"
        size="xs"
        :label="t.hide"
        trailing-icon="i-lucide-chevron-up"
        @click="toggleBar"
      />
    </div>
  </div>
</template>
