<template>
  <footer class="pt-full p-8 flex justify-between">
    <div class="flex-1">
       <nuxt-link to="/">
          <img class="h-16 w-16" src="@/assets/images/shared/logo-white.png" alt="Logo ivmovies">
        </nuxt-link>
    </div>
    <div>
      <p>tel: +32 471 30 46 75</p>
      <p>email: matthieu@hello.com</p>
      <p>VAT: BE18383 72882 7373</p>
    </div>
    <div class="flex-1 text-right">
      <socials></socials>
    </div>
  </footer>
</template>

<script>
import Socials from '@/components/shared/Socials'

export default {
  components: {
    Socials
  }
}
</script>
