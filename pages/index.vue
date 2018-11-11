<template>
  <div>
    <banner></banner>
    <all-projects :projects="projects"></all-projects>
  </div>
</template>

<script>
  import Banner from '@/components/home/Banner'
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
      Banner,
      AllProjects
    }
  }
</script>
