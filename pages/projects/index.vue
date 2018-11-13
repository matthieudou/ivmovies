<template>
  <all-projects
    class="pt-2"
    :projects="projects"/>
</template>

<script>
  import AllProjects from '@/components/projects/AllProjects'

  const query = `*[_type == "projects"] {
    title,
    "slug": slug.current,
    "thumbnail": thumbnail
  } | order(release_date desc)`

  export default {
    asyncData ({ app }) {
      return app.$sanity.fetch(query)
        .then(res => {
          return {
            projects: res
          }
        })
    },

    components: {
      AllProjects
    }
  }
</script>
