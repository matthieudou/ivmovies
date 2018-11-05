import { config as sanity } from './utilities/sanity'

export default {
  head: {
    title: 'IVMOVIES',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'IV Movies portfolio' },
      // OPEN GRAPH
      { hid: 'og:title', property: 'og:title', content: 'IVMOVIES' },
      { hid: 'og:description', property: 'og:description', content: 'Worldwide visual content creator based in belgium'},
      { hid: 'og:type', property: 'og:type', content: 'video.movie' },
      { hid: 'og:url', property: 'og:url', content: 'https://www.ivmovies.be' },
      { hid: 'og:image', property: 'og:image', content: 'https://www.ivmovies.be/sharing.jpg' },

    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
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
  generate: {
    routes: function () {
      const query = `*[_type == "projects"] {
        "slug": slug.current
      }`

      return sanity.fetch(query)
        .then(res => {
          const projects = res.map(project => `/projects/${project.slug}`)
          return [
            '/',
            '/projects',
            ...projects
          ]
        })
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
  }
}
