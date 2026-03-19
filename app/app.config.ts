export default defineAppConfig({
  seo: {
    siteName: 'Tolki Docs'
  },
  header: {
    title: '',
    to: '/',
    logo: {
      alt: 'Tolki',
      light: '/logo-light.svg',
      dark: '/logo-dark.svg'
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/user/tolki-embed',
      'target': '_blank',
      'aria-label': 'GitHub'
    }]
  },
  footer: {
    credits: `Tolki AI - ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/user/tolki-embed',
      'target': '_blank',
      'aria-label': 'Tolki on GitHub'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: '',
      edit: '',
      links: []
    }
  }
})
