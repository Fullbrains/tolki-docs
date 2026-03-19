---
seo:
  title: Tolki Docs
  description: Documentazione per il chat widget Tolki AI. Integra un assistente intelligente in qualsiasi sito web con un singolo tag HTML.
---

::u-page-hero{class="dark:bg-gradient-to-b from-neutral-900 to-neutral-950"}
---
orientation: horizontal
---

#title
Documentazione Tolki [Embed]{.text-primary}.

#description
Aggiungi un assistente chat basato su AI a qualsiasi sito web con un singolo tag HTML. Completamente personalizzabile, multilingua e facile da integrare.

#links
  :::u-button
  ---
  to: /it/getting-started
  size: xl
  trailing-icon: i-lucide-arrow-right
  ---
  Inizia
  :::

  :::u-button
  ---
  icon: i-simple-icons-github
  color: neutral
  variant: outline
  size: xl
  to: https://github.com/user/tolki-embed
  target: _blank
  ---
  Vedi su GitHub
  :::

#default
  :::prose-pre
  ---
  code: |
    <script
      src="https://embed.tolki.ai/chat.js"
      defer>
    </script>

    <tolki-chat
      bot="YOUR-BOT-UUID"
      position="right"
      theme="auto"
      lang="it">
    </tolki-chat>
  filename: index.html
  ---

  ```html [index.html]
  <script
    src="https://embed.tolki.ai/chat.js"
    defer>
  </script>

  <tolki-chat
    bot="YOUR-BOT-UUID"
    position="right"
    theme="auto"
    lang="it">
  </tolki-chat>
  ```
  :::
::

::u-page-section{class="dark:bg-neutral-950"}
#title
Funzionalità potenti, zero complessità

#features
  :::u-page-feature
  ---
  icon: i-lucide-code
  ---
  #title
  Integrazione con un tag

  #description
  Aggiungi il chat widget a qualsiasi sito web con un singolo tag HTML `<tolki-chat>`. Nessun framework richiesto.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-palette
  ---
  #title
  Completamente personalizzabile

  #description
  Controlla colori, dimensioni, posizionamento, bordi arrotondati, effetti backdrop e altro tramite attributi HTML.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-globe
  ---
  #title
  Multilingua

  #description
  Supporto integrato per 6 lingue (EN, IT, ES, FR, DE, PT) con attributi i18n per tutti i contenuti testuali.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-moon
  ---
  #title
  Modalità scura

  #description
  Modalità scura automatica che segue le preferenze di sistema, oppure forza la modalità chiara/scura con un singolo attributo.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-smartphone
  ---
  #title
  Design responsivo

  #description
  Si adatta a qualsiasi dimensione dello schermo con rilevamento della tastiera virtuale e gestione dello scroll.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-shield
  ---
  #title
  Incapsulamento Shadow DOM

  #description
  Gli stili sono completamente incapsulati. Il widget non entra mai in conflitto con il tuo CSS esistente.
  :::
::

::u-page-section{class="dark:bg-gradient-to-b from-neutral-950 to-neutral-900"}
  :::u-page-c-t-a
  ---
  links:
    - label: Inizia
      to: '/it/getting-started'
      trailingIcon: i-lucide-arrow-right
    - label: Riferimento attributi
      to: '/it/attributes'
      variant: subtle
      icon: i-lucide-book-open
  title: Pronto ad aggiungere una chat AI al tuo sito?
  description: Inizia in meno di un minuto. Basta aggiungere il tag script e il componente chat.
  class: dark:bg-neutral-950
  ---
  :::
::
