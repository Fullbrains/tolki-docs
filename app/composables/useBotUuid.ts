const PLACEHOLDER = 'YOUR-BOT-UUID'
const STORAGE_KEY = 'tolki-docs-bot-uuid'
const VISIBILITY_KEY = 'tolki-docs-bot-bar-visible'

const botUuid = ref('')
const barVisible = ref(false)
let barInitialized = false

export function useBotUuid() {
  const isClient = import.meta.client

  if (isClient && !botUuid.value) {
    botUuid.value = localStorage.getItem(STORAGE_KEY) || ''
  }

  if (isClient && !barInitialized) {
    barInitialized = true
    const stored = localStorage.getItem(VISIBILITY_KEY)
    barVisible.value = stored !== null ? stored === 'true' : true
  }

  function setBotUuid(value: string) {
    botUuid.value = value.trim()
    if (isClient) {
      if (botUuid.value) {
        localStorage.setItem(STORAGE_KEY, botUuid.value)
      } else {
        localStorage.removeItem(STORAGE_KEY)
      }
    }
  }

  function toggleBar() {
    barVisible.value = !barVisible.value
    if (isClient) {
      localStorage.setItem(VISIBILITY_KEY, String(barVisible.value))
    }
  }

  return {
    botUuid: readonly(botUuid),
    setBotUuid,
    barVisible: readonly(barVisible),
    toggleBar,
    PLACEHOLDER
  }
}
