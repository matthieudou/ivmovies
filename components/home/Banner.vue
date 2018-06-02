<template>
  <section class="h-screen relative overflow-hidden" :style="`background-image: url(${require('@/assets/images/bg.png')})`">
    <div class="video-container relative pin w-full h-full">
      <video class="absolute w-full h-full bg-video" src="../../assets/video/background.mp4" autoplay loop muted></video>
    </div>
    <div class="absolute pin h-screen flex flex-col justify-between z-10">
      <!-- LOGO -->
      <div class="p-8">
        <nuxt-link to="/">
          <img class="h-16 w-16" src="@/assets/images/shared/logo-white.png" alt="Logo ivmovies">
        </nuxt-link>
      </div>

      <!-- MAIN CONTENT -->
      <div class="max-w-lg text-center mx-auto font-heading font-light">
        <h1 class="font-hairline tracking-extra leading-loose text-5xl uppercase">IVmovies</h1>
        <p class="leading-loose">worldwide visual content creator based in belgium</p>
        <p class="leading-loose">corporate • event • adventure • music</p>
        <div class="flex mt-8 justify-center text-xs">
          <button class="bg-white p-4 rounded-full text-red mx-4" @click="scrollTo('#projects')">My work</button>
          <button class="p-4 rounded-full border border-white text-white mx-4" @click="scrollTo('footer')">Contact</button>
        </div>
      </div>

      <!-- SHARING -->
      <div class="bg-linear p-8 text-right">
        <socials></socials>
      </div>
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
.bg-video {
  object-fit: cover;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    background: rgba(0, 0, 0, 0.9);
    border-radius: 5px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}

.bg-linear {
  background-image: linear-gradient(rgba(black, 0), rgba(black, 1));
}

button:focus {
  outline:0;
}
</style>
