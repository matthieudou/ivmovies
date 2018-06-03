<template>
  <div class="p-8">
    <div class="container max-w-lg mx-auto mt-8">
      <no-ssr placeholder="Loading...">
        <div class="embed-responsive">
          <iframe class="absolute pin w-full h-full" :src="iframeEmbedUrl(project.video_link)" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
      </no-ssr>
      <h1 class="font-hairline font-heading mt-4">{{ project.title }}</h1>
      <div class="mt-4" v-html="displayContent(project.description)"></div>
    </div>
  </div>
</template>

<script>
import url from 'url'
import marked from 'marked'

export default {
  asyncData ({ app, params }) {
    return app.$storyapi.get('cdn/stories/projects/' + params.projectId, {version: 'published'})
      .then(res => {
        return {
          project: {
            title: res.data.story.content.title,
            description: res.data.story.content.description,
            video_link: res.data.story.content.video_link
          }
        }
      })
  },
  methods: {
    iframeEmbedUrl (video_link) {
      const link = url.parse(video_link)
      if (link.hostname === 'youtube.com') {
        return 'https://www.youtube.com/embed/' + link.searchParams.get('v')
      }
      if (link.hostname === 'vimeo.com') {
        return 'https://player.vimeo.com/video/' + link.pathname.replace('/', '')
      }
    },
    displayContent (content) {
      return marked(content)
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
