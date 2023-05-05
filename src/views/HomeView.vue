<script setup>
import Slider from "../components/Slider.vue";
</script>

<template>
  <main>
    <Slider />
    <div class="font-rale">
      <h2 class="text-center w-1/3 mx-auto mt-36 text-3xl">
        At the Thrive House,
        <i class="text-green-700 block -my-1">we strive to make you thrive</i>
        through:
      </h2>
      <div class="w-4/6 mx-auto grid grid-cols-4 gap-6 my-6">
        <div class="">
          <img src="/leadership.svg" alt="" class="w-20 mx-auto" />
          <div class="uppercase text-2xl text-green-700 text-center">
            Leadership
          </div>
          <RouterLink
            to="/"
            class="mt-4 flex space-x-1 justify-center text-gray-600 hover:text-green-700"
          >
            <span class="text-base">Learn more</span
            ><img src="/arrow-r.svg" class="h-3 inline mt-1.5" />
          </RouterLink>
        </div>
        <div class="">
          <img src="/authorship.svg" alt="" class="w-20 mx-auto" />
          <div class="uppercase text-2xl text-green-700 text-center">
            Authorship
          </div>
          <RouterLink
            to="/"
            class="mt-4 flex space-x-1 justify-center text-gray-600 hover:text-green-700"
          >
            <span class="text-base">Learn more</span
            ><img src="/arrow-r.svg" class="h-3 inline mt-1.5" />
          </RouterLink>
        </div>
        <div class="">
          <img src="/relationship.svg" alt="" class="w-20 mx-auto" />
          <div class="uppercase text-2xl text-green-700 text-center">
            Relationship
          </div>
          <RouterLink
            to="/"
            class="mt-4 flex space-x-1 justify-center text-gray-600 hover:text-green-700"
          >
            <span class="text-base">Learn more</span
            ><img src="/arrow-r.svg" class="h-3 inline mt-1.5" />
          </RouterLink>
        </div>
        <div class="">
          <img src="/fitnessship.svg" alt="" class="w-20 mx-auto" />
          <div class="uppercase text-2xl text-green-700 text-center">
            Fitness-ship
          </div>
          <RouterLink
            to="/"
            class="mt-4 flex space-x-1 justify-center text-gray-600 hover:text-green-700"
          >
            <span class="text-base">Learn more</span
            ><img src="/arrow-r.svg" class="h-3 inline mt-1.5" />
          </RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>
