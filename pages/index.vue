<template>
  <div>
    <banner></banner>
    <all-projects></all-projects>
    <main-footer></main-footer>
  </div>
</template>

<script>
import Banner from '@/components/home/Banner'
import AllProjects from '@/components/project/AllProjects'
import MainFooter from '@/components/shared/MainFooter'

export default {
  components: {
    Banner,
    AllProjects,
    MainFooter
  }
}
</script>
