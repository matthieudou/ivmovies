<template>
  <div>
    <banner></banner>
    <all-projects :projects="projects"></all-projects>
  </div>
</template>

<script>
import Banner from '@/components/home/Banner'
import AllProjects from '@/components/projects/AllProjects'

export default {
  asyncData ({ app }) {
    return app.$storyapi.get('cdn/stories', {version: 'published', starts_with: 'projects/'})
      .then(res => {
        return {
          projects: res.data.stories
        }
      })
  },
  components: {
    Banner,
    AllProjects
  }
}
</script>
