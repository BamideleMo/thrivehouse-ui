<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
</script>
<template>
  <Carousel :autoplay="2000" :wrap-around="true">
    <Slide v-for="slide in 4" :key="slide">
      <div class="carousel__item flex bg-green-200">
        <img :src="`/slide${slide}.png`" alt="" class="w-full" />
        <div v-if="slide === 1" class="hook mt-0 lg:mt-40 text-left font-rale">
          <h2 class="text-lg lg:text-4xl font-extrabold">
            <div class="">Effective marriage</div>
            <div class="-mt-2">education and seminars</div>
          </h2>
          <div
            class="text-xs lg:text-lg leading-snug mt-1 lg:mt-3 w-64 lg:w-96"
            style="color: #fff212"
          >
            Effective marriage education and seminars to give you a head start
            on a beautiful journey.
          </div>
          <div class="mt-2 lg:mt-6">
            <RouterLink
              class="text-xs lg:text-lg p-2 lg:py-2 lg:px-5 hover:opacity-30"
              to="/"
              >Learn more</RouterLink
            >
          </div>
        </div>
        <div v-if="slide === 2" class="hook mt-0 lg:mt-40 text-left font-rale">
          <h2 class="text-lg lg:text-4xl font-extrabold">
            <div class="">Feeling and looking</div>
            <div class="-mt-2">healthy in just weeks</div>
          </h2>
          <div
            class="text-xs lg:text-lg leading-snug mt-1 lg:mt-3 w-64 lg:w-96"
            style="color: #fff212"
          >
            Effective fitness seminar to get you feeling good about yourself
            again.
          </div>
          <div class="mt-2 lg:mt-6">
            <RouterLink
              class="text-xs lg:text-lg p-2 lg:py-2 lg:px-5 hover:opacity-30"
              to="/"
              >Learn more</RouterLink
            >
          </div>
        </div>
        <div v-if="slide === 3" class="hook mt-0 lg:mt-40 text-left font-rale">
          <h2 class="text-lg lg:text-4xl font-extrabold">
            <div class="">Leadership and it’s cores</div>
          </h2>
          <div
            class="text-xs lg:text-lg leading-snug mt-1 lg:mt-3 w-64 lg:w-96"
            style="color: #fff212"
          >
            Get to know where leaderships starts and its roles in your life.
          </div>
          <div class="mt-2 lg:mt-6">
            <RouterLink
              class="text-xs lg:text-lg p-2 lg:py-2 lg:px-5 hover:opacity-30"
              to="/"
              >Learn more</RouterLink
            >
          </div>
        </div>
        <div v-if="slide === 4" class="hook mt-0 lg:mt-40 text-left font-rale">
          <h2 class="text-lg lg:text-4xl font-extrabold">
            <div class="">Seminars on Authorship</div>
          </h2>
          <div
            class="text-xs lg:text-lg leading-snug mt-1 lg:mt-3 w-64 lg:w-96"
            style="color: #fff212"
          >
            Making writing easier and more original.
          </div>
          <div class="mt-2 lg:mt-6">
            <RouterLink
              class="text-xs lg:text-lg p-2 lg:py-2 lg:px-5 hover:opacity-30"
              to="/"
              >Learn more</RouterLink
            >
          </div>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<style scoped>
.carousel__item {
  max-height: 525px;
  width: 100%;
  color: var(--vc-clr-white);
  align-items: center;
  overflow: hidden;
}

.carousel__item img {
  width: 100%;
}

.carousel__slide {
  padding: 0px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
  background-color: red !important;
}

.carousel__pagination {
  position: relative;
  z-index: 40;
  margin-top: -20px;
}

.hook {
  margin-left: -97%;
}
.hook a {
  background: #33cc33;
  border: 1px solid #33cc33;
}
</style>
