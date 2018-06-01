<template>
  <section id="projects" class="max-w-lg mx-auto">

    <!-- CONTAINER -->
    <div class="flex flex-wrap">

      <!-- PROJECTS -->
      <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4" v-for="project in 3" :key="project">
        <div class="square relative cursor-pointer" :style="`background-image: url(${require('@/assets/images/bg.png')})`">
          <div class="absolute pin flex items-center justify-center content">
            <h2 class="bg-black text-white py-2 px-4 rounded-full font-light text-base">ING Ardennes Roads</h2>
          </div>
        </div>
      </div>
      <!-- END PROJECTS -->

    </div>
    <!-- END CONTAINER -->

  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.square {
  padding-bottom: 100%;
  background-size: cover;
  background-position: center;
}

.content {
  background-image: linear-gradient(to right bottom, rgba(0, 0, 0, .6), rgba(0, 0, 0, .4));
  transition: all .2s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, .4);
  }

  & h2 {
    transform: translateY(20px);
    opacity: 0;
    transition: all .2s ease-in-out;
  }

  &:hover h2 {

    transform: translateY(0);
    opacity: 1;
  }
}
</style>
