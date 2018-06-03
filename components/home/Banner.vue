<template>
  <section class="relative h-screen overflow-hidden">
    <video class="absolute w-full h-full bg-video hidden md:block" src="../../assets/video/background.mp4" autoplay loop muted></video>
    <div class="abslolute banner__background--image w-full h-full"></div>
    <div class="absolute pin h-screen flex flex-col justify-between">
      <!-- LOGO -->
      <div class="p-8">
        <nuxt-link to="/">
          <img class="h-16 w-16 lg:h-24 lg:w-24" src="@/assets/images/shared/logo-white.png" alt="Logo ivmovies">
        </nuxt-link>
      </div>

      <!-- MAIN CONTENT -->
      <div class="absolute w-full h-full h-full flex justify-center items-center">
        <div class="max-w-lg text-center font-heading font-light">
          <h1 class="font-hairline tracking-extra leading-loose text-5xl uppercase">IVmovies</h1>
          <p class="leading-loose">worldwide visual content creator based in belgium</p>
          <p class="leading-loose">corporate • event • adventure • music</p>
          <div class="flex mt-8 justify-center text-xs">
            <button class="bg-white p-4 rounded-full text-second mx-4 font-bold" v-scroll-to="'#projects'">My work</button>
            <button class="p-4 rounded-full border-2 border-white text-white mx-4 font-bold hover:bg-white hover:text-second" v-scroll-to="'footer'">Contact</button>
          </div>
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
  components: {
    Socials
  }
}
</script>


<style lang="scss" scoped>
.banner__background--image {
  background-position: center;
  background-size: cover;
  background-image: radial-gradient(rgba(black, .4), rgba(black, 0)), url('../../assets/images/shared/background.jpg');
}

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

button {
  transition: all .2s ease-in-out;
}
</style>
