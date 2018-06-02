module.exports = {
  head: {
    title: 'ivmovies',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'IV Movies portfolio' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~/assets/styles/main.scss'
  ],
  loading: { color: '#3B8070' },
  plugins: [
    {src: '~/plugins/ga.js', ssr: false}
  ],
  modules: [
    ['storyblok-nuxt', {accessToken: 'HfuYoJQa3f9vXrVraPr4wgtt', cacheProvider: 'memory'}]
  ],
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
