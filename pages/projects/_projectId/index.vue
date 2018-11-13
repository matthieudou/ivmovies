<template>
  <div class="p-8">
    <div class="container max-w-lg mx-auto mt-8">
      <no-ssr placeholder="Loading...">
        <div class="embed-responsive">
          <iframe
            class="absolute pin w-full h-full"
            :src="iframeEmbedUrl(project.video_link)"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen/>
        </div>
      </no-ssr>
      <h1 class="font-hairline mt-4">{{ project.title }}</h1>
      <div
        class="mt-4 leading-normal"
        v-html="project.description"/>
    </div>
  </div>
</template>

<script>
  import toHtml from '@sanity/block-content-to-html'
  import imageUrlBuilder from '@sanity/image-url'
  import striptags from 'striptags'

  const query = `*[_type == "projects" && slug.current == $slug][0] {
    title,
    description,
    video_link,
    thumbnail
  }`

  export default {
    head () {
      return {
        title: this.project.title,
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: 'IV Movies portfolio' },
          // OPEN GRAPH
          { hid: 'og:title', property: 'og:title', content: this.project.title },
          { hid: 'og:description', property: 'og:description', content: this.project.strippedDescription },
          { hid: 'og:type', property: 'og:type', content: 'video.movie' },
          { hid: 'og:url', property: 'og:url', content: this.project.url },
          { hid: 'og:image', property: 'og:image', content: this.project.thumbnail }
        ]
      }
    },

    asyncData ({ app, params }) {
      return app.$sanity.fetch(query, { slug: params.projectId })
        .then(res => {
          return {
            project: {
              title: res.title,
              video_link: res.video_link,
              url: `https://www.ivmovies.be/projects/${params.projectId}`,
              thumbnail: imageUrlBuilder(app.$sanity).image(res.thumbnail).width(1200).height(1200).url(),
              description: res.description ? toHtml({ blocks: res.description }) : '',
              strippedDescription: res.description ? striptags(toHtml({ blocks: res.description })) : ''
            }
          }
        })
    },

    methods: {
      iframeEmbedUrl (video_link) {
        const link = new URL(video_link)
        if (link.hostname === 'youtube.com') {
          return 'https://www.youtube.com/embed/' + link.searchParams.get('v')
        }
        if (link.hostname === 'vimeo.com') {
          return 'https://player.vimeo.com/video/' + link.pathname.replace('/', '')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.embed-responsive {
  position: relative;
  padding-bottom: 56.25%;
  width: 100%;
}
</style>
