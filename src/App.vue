<script setup>
import { RouterLink, RouterView } from "vue-router";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
</script>

<template>
  <header class="font-rale text-white z-50 w-full">
    <div class="w-11/12 lg:10/12 mx-auto flex justify-between">
      <div class="mt-2">
        <RouterLink to="/">
          <img src="/logo.png" alt="logo" />
        </RouterLink>
      </div>
      <ul class="lg:space-x-12 lg:flex text-lg lg:pt-7">
        <li><RouterLink class="hover:opacity-30" to="/">Home</RouterLink></li>
        <li>
          <RouterLink class="hover:opacity-30" to="/">About us</RouterLink>
        </li>
        <li>
          <RouterLink class="hover:opacity-30" to="/">Our Services</RouterLink>
        </li>
        <li><RouterLink class="hover:opacity-30" to="/">Media</RouterLink></li>
        <li><RouterLink class="hover:opacity-30" to="/">Shop</RouterLink></li>
        <li><RouterLink class="hover:opacity-30" to="/">Donate</RouterLink></li>
      </ul>
      <div class="lg:pt-7 lg:text-lg">
        <RouterLink class="contact hover:opacity-30" to="/">Contact</RouterLink>
      </div>
    </div>
  </header>
  <div class="">
    <Carousel :autoplay="2000" :wrap-around="true">
      <Slide v-for="slide in 4" :key="slide">
        <div class="carousel__item flex">
          <img :src="`/slide${slide}.png`" alt="" class="w-full" />
          <div
            v-if="slide === 1"
            class="hook mt-20 lg:mt-40 text-left font-rale"
          >
            <h2 class="">Effective marriage education and seminars</h2>
            <div class="">
              Effective marriage education and seminars to give you a head start
              on a beautiful journey.
            </div>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>

  <RouterView />
</template>

<style scoped>
header {
  background: #006633;
  height: 88.68px;
}
.contact {
  background: #33cc33;
  padding: 14px 30px;
}
.carousel__item {
  max-height: 525px;
  width: 100%;
  /* background-color: red; */
  color: var(--vc-clr-white);
  font-size: 20px;
  /* border-radius: 8px; */
  /* display: flex; */
  /* justify-content: center; */
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
}

.carousel__pagination {
  position: relative;
  z-index: 60;
  margin-top: -20px;
}

.hook {
  margin-left: -90%;
}
</style>
