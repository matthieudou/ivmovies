<template>
  <footer class="pt-full p-8">
    <!-- LOGO -->
    <div class="text-center md:text-left">
       <nuxt-link to="/">
          <img class="h-16 w-16" src="@/assets/images/shared/logo-white.png" alt="Logo ivmovies">
        </nuxt-link>
    </div>
    <!-- INFORMATIONS -->
    <div class="flex flex-col md:flex-row items-center justify-center mt-8">
      <div class="mb-4 mx-2">
        <a href="tel:+32471637117" class="text-white no-underline">
          <!-- <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/></svg> -->
          <span class="ml-2">Tel: +32 471 63 71 17</span>
        </a>
      </div>
      <div class="mb-4 mx-2">
        <a href="mailto:contact@ivmovies.be" class="text-white no-underline">
          <!-- <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/></svg> -->
          <span class="ml-2">Email: contact@ivmovies.be</span>
        </a>
      </div>
      <div class="mb-4 mx-2">
        <!-- <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M112 224c61.9 0 112-50.1 112-112S173.9 0 112 0 0 50.1 0 112s50.1 112 112 112zm0-160c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm224 224c-61.9 0-112 50.1-112 112s50.1 112 112 112 112-50.1 112-112-50.1-112-112-112zm0 160c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zM392.3.2l31.6-.1c19.4-.1 30.9 21.8 19.7 37.8L77.4 501.6a23.95 23.95 0 0 1-19.6 10.2l-33.4.1c-19.5 0-30.9-21.9-19.7-37.8l368-463.7C377.2 4 384.5.2 392.3.2z"/></svg> -->
        <span class="ml-2">VAT: BE0688 882 122</span>
      </div>
    </div>
    <!-- SOCIAL SHARING -->
    <div class="text-center md:text-right mt-8">
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
