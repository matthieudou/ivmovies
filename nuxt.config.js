const axios = require('axios')

module.exports = {
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
  modules: [
    ['storyblok-nuxt', {accessToken: 'HGumYuCWCE1nTIHD63sGrQtt', cacheProvider: 'memory'}]
  ],
  generate: {
    routes: function () {
      return axios.get(
        'https://api.storyblok.com/v1/cdn/stories?version=published&token=kQi9mTLBwINGa7ND9JLa1Att&starts_with=projects&cv=' +
        Math.floor(Date.now() / 1e3)
      )
      .then(res => {
        const projects = res.data.stories.map(project => project.full_slug)
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
