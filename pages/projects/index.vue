<template>
  <all-projects :projects="projects"></all-projects>
</template>

<script>
import AllProjects from '@/components/projects/AllProjects'

export default {
  asyncData ({ app }) {
    return app.$storyapi.get('cdn/stories', {version: 'draft', starts_with: 'projects/'})
      .then(res => {
        return {
          projects: res.data.stories
        }
      })
  },
  components: {
    AllProjects
  }
}
</script>
