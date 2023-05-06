<script setup>
import Slider from "../components/Slider.vue";
</script>

<template>
  <main class="font-rale">
    <Slider />
    <div>
      <h2
        class="text-center w-11/12 lg:w-1/3 mx-auto mt-20 lg:mt-36 text-lg lg:text-3xl"
      >
        At the Thrive House,
        <i class="text-green-700 block -my-1">we strive to make you thrive</i>
        through:
      </h2>
      <div
        class="w-11/12 lg:w-4/6 mx-auto grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4 lg:gap-6 my-6"
      >
        <div class="">
          <img src="/leadership.svg" alt="" class="w-14 lg:w-20 mx-auto" />
          <div
            class="uppercase text-base lg:text-2xl text-green-700 text-center"
          >
            Leadership
          </div>
          <RouterLink
            to="/"
            class="mt-2 lg:mt-4 flex space-x-1 justify-center text-gray-600 hover:text-green-700"
          >
            <span class="text-base">Learn more</span
            ><img src="/arrow-r.svg" class="h-3 inline mt-1.5" />
          </RouterLink>
        </div>
        <div class="">
          <img src="/authorship.svg" alt="" class="w-14 lg:w-20 mx-auto" />
          <div
            class="uppercase text-base lg:text-2xl text-green-700 text-center"
          >
            Authorship
          </div>
          <RouterLink
            to="/"
            class="mt-2 lg:mt-4 flex space-x-1 justify-center text-gray-600 hover:text-green-700"
          >
            <span class="text-base">Learn more</span
            ><img src="/arrow-r.svg" class="h-3 inline mt-1.5" />
          </RouterLink>
        </div>
        <div class="">
          <img src="/relationship.svg" alt="" class="w-14 lg:w-20 mx-auto" />
          <div
            class="uppercase text-base lg:text-2xl text-green-700 text-center"
          >
            Relationship
          </div>
          <RouterLink
            to="/"
            class="mt-2 lg:mt-4 flex space-x-1 justify-center text-gray-600 hover:text-green-700"
          >
            <span class="text-base">Learn more</span
            ><img src="/arrow-r.svg" class="h-3 inline mt-1.5" />
          </RouterLink>
        </div>
        <div class="">
          <img src="/fitnessship.svg" alt="" class="w-14 lg:w-20 mx-auto" />
          <div
            class="uppercase text-base lg:text-2xl text-green-700 text-center"
          >
            Fitness-ship
          </div>
          <RouterLink
            to="/"
            class="mt-2 lg:mt-4 flex space-x-1 justify-center text-gray-600 hover:text-green-700"
          >
            <span class="text-base">Learn more</span
            ><img src="/arrow-r.svg" class="h-3 inline mt-1.5" />
          </RouterLink>
        </div>
      </div>
      <div class="w-11/12 lg:w-10/12 mx-auto my-20 lg:my-40 text-white">
        <img src="/shop.png" class="w-full" />
        <div class="-mt-10 lg:-mt-40 px-4 lg:px-20 flex justify-between">
          <div
            class="text-base leading-tight lg:text-3xl w-48 lg:w-60 font-extrabold"
          >
            Visit our shop to view many other products
          </div>
          <div class="pt-2 lg:pt-20">
            <RouterLink
              to=""
              class="flex space-x-1 p-0.5 lg:px-4 text-xs lg:text-lg"
              style="background: #33cc33"
            >
              <span class="">Visit our shop</span>
              <img src="/arrow-r-w.svg" class="h-3 lg:h-5 -mt-0.5 lg:mt-1" />
            </RouterLink>
          </div>
        </div>
      </div>
      <div class="bg-green-800 py-10 lg:py-20">
        <div class="w-11/12 lg:w-10/12 mx-auto text-white">
          <h2 class="text-center text-2xl lg:text-3xl font-bold">
            Our optimised training techniques
          </h2>
          <div
            class="mt-4 lg:mt-16 grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-4 text-center"
          >
            <div class="p-4 lg:border-r border-white lg:p-8">
              <img src="/repair.svg" class="w-14 lg:w-20 mx-auto" />
              <h3 class="text-xl font-bold">Repair</h3>
              <div class="mt-1 text-base">
                We strive to bring fitness to your spirit, soul and body so you
                will thrive.
              </div>
            </div>
            <div class="p-4 lg:border-r border-white lg:p-8">
              <img src="/relove.svg" class="w-14 lg:w-20 mx-auto" />
              <h3 class="text-xl font-bold">Relove</h3>
              <div class="mt-1 text-base">
                Damaged personal and mutual relationships can no longer be your
                ruin because we help you love appropriately.
              </div>
            </div>
            <div class="p-4 lg:border-r border-white lg:p-8">
              <img src="/relead.svg" class="w-14 lg:w-20 mx-auto" />
              <h3 class="text-xl font-bold">Relead</h3>
              <div class="mt-1 text-base">
                We have set a pace to train you to lead your personal and
                professional life better than where you were and are at.
              </div>
            </div>
            <div class="p-8">
              <img src="/reload.svg" class="w-14 lg:w-20 mx-auto" />
              <h3 class="text-xl font-bold">Reload</h3>
              <div class="mt-1 text-base">
                Staying fit (Spirit, soul and body) puts you at that vantage
                point to reload to love and lead better.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="my-20 lg:my-40 text-center w-11/12 lg:w-2/6 mx-auto">
        <h2 class="text-xl lg:text-3xl font-bold mb-6 lg:mb-10">
          Download our brochure to help you know how we can serve you
        </h2>
        <a
          href="/"
          class="text-xs lg:text-sm text-green-800 border border-green-800 py-3 px-4 hover:opacity-60"
          >Download our brochure</a
        >
      </div>
    </div>
  </main>
</template>
