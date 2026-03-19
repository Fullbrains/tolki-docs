export function useCodeReplace() {
  const { botUuid, PLACEHOLDER } = useBotUuid()
  const route = useRoute()

  function replaceInCodeBlocks() {
    if (!import.meta.client) return

    const codeElements = document.querySelectorAll('pre code')
    codeElements.forEach((codeEl) => {
      const walker = document.createTreeWalker(codeEl, NodeFilter.SHOW_TEXT)
      let node: Text | null
      while ((node = walker.nextNode() as Text | null)) {
        if (node.textContent?.includes(PLACEHOLDER) && botUuid.value) {
          node.textContent = node.textContent.replaceAll(PLACEHOLDER, botUuid.value)
        } else if (!botUuid.value) {
          // Restore originals by checking if any UUID-like string replaced the placeholder
          // We store the original text as a data attribute on the code element
        }
      }
    })
  }

  function saveOriginals() {
    if (!import.meta.client) return
    const codeElements = document.querySelectorAll('pre code')
    codeElements.forEach((codeEl) => {
      if (!(codeEl as HTMLElement).dataset.original) {
        (codeEl as HTMLElement).dataset.original = codeEl.innerHTML
      }
    })
  }

  function restoreOriginals() {
    if (!import.meta.client) return
    const codeElements = document.querySelectorAll('pre code')
    codeElements.forEach((codeEl) => {
      const original = (codeEl as HTMLElement).dataset.original
      if (original) {
        codeEl.innerHTML = original
      }
    })
  }

  function applyReplacements() {
    if (!import.meta.client) return
    restoreOriginals()
    saveOriginals()
    if (botUuid.value) {
      replaceInCodeBlocks()
    }
  }

  if (import.meta.client) {
    watch(botUuid, () => {
      applyReplacements()
    })

    watch(() => route.path, () => {
      nextTick(() => {
        applyReplacements()
      })
    })

    onMounted(() => {
      nextTick(() => {
        applyReplacements()
      })
    })
  }
}
