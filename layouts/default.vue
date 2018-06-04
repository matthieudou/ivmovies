<template>
  <div class="bg-black min-h-screen text-white font-sans font-light flex flex-col">
    <nuxt class="flex-1"/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from '@/components/shared/AppFooter'

export default {
  components:{
    AppFooter
  }
}
</script>
