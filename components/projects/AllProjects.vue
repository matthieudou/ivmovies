<template>
  <section id="projects" class="max-w-lg mx-auto pt-full">
    <!-- CONTAINER -->
    <div class="flex flex-wrap">
      <!-- PROJECTS -->
      <nuxt-link :to="`/projects/${project.slug}`" class="w-full md:w-1/2 lg:w-1/3 p-4" v-for="project in projects" :key="project.slug">
        <div class="square relative cursor-pointer" :style="`background-image: url(${project.content.thumbnail})`">
          <div class="absolute pin flex items-center justify-center content">
            <h2 class="bg-black text-white py-2 px-4 rounded-full font-light text-base">{{ project.content.title }}</h2>
          </div>
        </div>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  props: ['projects']
}
</script>

<style lang="scss" scoped>
.square {
  padding-bottom: 100%;
  background-size: cover;
  background-position: center;
}

.content {
  background-image: linear-gradient(to right bottom, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0));
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
