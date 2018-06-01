<template>
  <section class="h-screen flex flex-col justify-between p-8">

    <!-- LOGO -->
    <div class="banner__logo">
      <nuxt-link to="/">
        <img class="h-16 w-16" src="@/assets/images/shared/logo-white.png" alt="Logo ivmovies">
      </nuxt-link>
    </div>

    <!-- MAIN CONTENT -->
    <div class="banner__content text-center mx-auto font-heading font-light">
      <h1 class="font-hairline tracking-extra leading-loose text-5xl uppercase">IVmovies</h1>
      <p class="leading-loose">worldwide visual content creator based in belgium</p>
      <p class="leading-loose">corporate • event • adventure • music</p>
      <div class="flex mt-8 justify-center text-xs">
        <button class="bg-white p-4 rounded-full text-red mx-4" @click="scrollTo('#projects')">My work</button>
        <button class="p-4 rounded-full border border-white text-white mx-4" @click="scrollTo('footer')">Contact</button>
      </div>
    </div>

    <!-- SHARING -->
    <div class="banner__share text-right">
      <socials></socials>
    </div>
  </section>
</template>

<script>
import Socials from '@/components/shared/Socials'

export default {
  methods: {
    scrollTo (element) {
      document.querySelector(element).scrollIntoView({
        behavior: 'smooth'
      })
    }
  },
  components: {
    Socials
  }
}
</script>


<style lang="scss" scoped>

button:focus {
  outline:0;
}

.banner__content {
  max-width: 50rem;
}
</style>
