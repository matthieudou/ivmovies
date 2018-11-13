import { config as sanity } from './utilities/sanity'

const routesQuery = `*[_type == "projects"] {
  "slug": slug.current
}`

const paths = sanity.fetch(routesQuery)
  .then(res => {
    const projects = res.map(project => `/projects/${project.slug}`)
    return [
      '/',
      '/projects',
      ...projects
    ]
  })

export default {
  head: {
    title: 'IVMOVIES',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'IV Movies portfolio' },
      { hid: 'keywords', name: 'keywords', content: 'video movie film imbaud verhaegen' },
      { hid: 'theme-color', name: 'theme-color', content: '#111' },
      { hid: 'apple-mobile-web-app-capable', name: 'apple-mobile-web-app-capable', content: 'yes' },
      { hid: 'apple-mobile-web-app-status-bar-style', name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      // OPEN GRAPH
      { hid: 'og:title', property: 'og:title', content: 'IVMOVIES' },
      { hid: 'og:description', property: 'og:description', content: 'Worldwide visual content creator based in belgium' },
      { hid: 'og:type', property: 'og:type', content: 'video.movie' },
      { hid: 'og:url', property: 'og:url', content: 'https://www.ivmovies.be' },
      { hid: 'og:image', property: 'og:image', content: 'https://www.ivmovies.be/sharing.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ],
    bodyAttrs: {
      class: 'bg-black'
    }
  },

  css: [
    '~/assets/styles/main.scss'
  ],

  loading: { color: '#3B8070' },

  plugins: [
    { src: '~/plugins/ga.js', ssr: false },
    { src: '~/plugins/vue-scrollto.js', ssr: false },
    { src: '~/plugins/sentry.js' },
    { src: '~/plugins/sanity.js' }
  ],

  modules: [
    '@nuxtjs/sitemap'
  ],

  generate: {
    routes () {
      return paths
    }
  },

  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://ivmovies.be',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: true, // Enable me when using nuxt generate
    exclude: [],
    routes () {
      return paths
    }
  }
}
