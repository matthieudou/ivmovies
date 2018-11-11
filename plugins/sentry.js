import Vue from 'vue'
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'

if (process.env.NODE_ENV === 'production') {
  Raven
    .config('https://c03d517eceb94f2799983fc43322b51a@sentry.io/1264712')
    .addPlugin(RavenVue, Vue)
    .install()
}
