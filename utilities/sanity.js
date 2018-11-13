import sanityClient from '@sanity/client'

export const config = sanityClient({
  // Find your project ID and dataset in `sanity.json` in your studio project
  projectId: 'kk94o35r',
  dataset: 'projects',
  useCdn: true
})

export const sanity = {
  install (Vue) {
    Vue.prototype.$sanity = config
    Vue.$sanity = config
  }
}

export default sanity
