---
seo:
  title: Tolki Docs
  description: Documentation for Tolki AI chat widget. Embed an intelligent chat assistant in any website with a single HTML tag.
---

::u-page-hero{class="dark:bg-gradient-to-b from-neutral-900 to-neutral-950"}
---
orientation: horizontal
---

#title
Tolki [Embed]{.text-primary} Documentation.

#description
Add an AI-powered chat assistant to any website with a single HTML tag. Fully customizable, multilingual, and easy to integrate.

#links
  :::u-button
  ---
  to: /getting-started
  size: xl
  trailing-icon: i-lucide-arrow-right
  ---
  Get started
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
  View on GitHub
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
      dark="auto"
      lang="en">
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
    dark="auto"
    lang="en">
  </tolki-chat>
  ```
  :::
::

::u-page-section{class="dark:bg-neutral-950"}
#title
Powerful features, zero complexity

#features
  :::u-page-feature
  ---
  icon: i-lucide-code
  ---
  #title
  One Tag Integration

  #description
  Add the chat widget to any website with a single `<tolki-chat>` HTML tag. No framework required.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-palette
  ---
  #title
  Fully Customizable

  #description
  Control colors, sizes, positioning, border radius, backdrop effects, and more through HTML attributes.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-globe
  ---
  #title
  Multilingual

  #description
  Built-in support for 6 languages (EN, IT, ES, FR, DE, PT) with i18n attributes for all text content.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-moon
  ---
  #title
  Dark Mode

  #description
  Automatic dark mode that follows system preferences, or force light/dark mode with a single attribute.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-smartphone
  ---
  #title
  Responsive Design

  #description
  Adapts seamlessly to any screen size with mobile keyboard detection and scroll management.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-shield
  ---
  #title
  Shadow DOM Encapsulation

  #description
  Styles are fully encapsulated. The widget never conflicts with your existing CSS.
  :::
::

::u-page-section{class="dark:bg-gradient-to-b from-neutral-950 to-neutral-900"}
  :::u-page-c-t-a
  ---
  links:
    - label: Get started
      to: '/getting-started'
      trailingIcon: i-lucide-arrow-right
    - label: Attributes reference
      to: '/attributes'
      variant: subtle
      icon: i-lucide-book-open
  title: Ready to add AI chat to your website?
  description: Get up and running in under a minute. Just add the script tag and the chat component.
  class: dark:bg-neutral-950
  ---
  :::
::
