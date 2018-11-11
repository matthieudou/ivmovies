import Vue from 'vue'
import { sanity, config } from '~/utilities/sanity'

Vue.use(sanity)

export default ({ app }) => {
  app.$sanity = config
}
