<script setup>
import { ref } from "vue";

const services = ref(false);
const media = ref(false);
</script>
<template>
  <nav class="space-x-7 lg:space-x-40">
    <ul
      class="text-white space-y-8 w-10/12 pt-8 mx-auto lg:w-full lg:space-y-0 lg:space-x-12 lg:flex text-base lg:pt-7"
    >
      <li>
        <RouterLink class="hover:bg-green-900 p-2" to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink class="hover:bg-green-900 p-2" to="/">About us</RouterLink>
      </li>
      <li>
        <span
          @mouseover="() => (services = true)"
          class="hover:bg-green-900 p-2 cursor-pointer"
          >Our Services</span
        >
        <ul
          v-if="services"
          @mouseleave="() => (services = false)"
          class="z-50 absolute bg-white text-green-600 py-2 px-3 text-sm mt-3"
        >
          <li class="">
            <span class="border-b border-green-600 block">Networks</span>
            <ul class="list-disc ml-8 my-2 space-y-2">
              <li>
                <RouterLink to="/" class="hover:underline"
                  >Leadership</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/" class="hover:underline"
                  >Authorship</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/" class="hover:underline"
                  >Relationship</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/" class="hover:underline"
                  >Fitness-ship</RouterLink
                >
              </li>
            </ul>
          </li>
          <li class="border-t pt-2 border-green-600">
            <RouterLink to="/" class="hover:underline">Services</RouterLink>
          </li>
        </ul>
      </li>
      <li>
        <span
          @mouseover="() => (media = true)"
          class="hover:bg-green-900 p-2 cursor-pointer"
          >Media</span
        >

        <ul
          v-if="media"
          @mouseleave="() => (media = false)"
          class="z-50 absolute bg-white text-green-600 py-2 px-3 text-sm mt-3 space-y-2"
        >
          <li class="border-b pb-2 border-green-600">
            <RouterLink to="/" class="hover:underline">Blog</RouterLink>
          </li>
          <li class="border-b pb-2 border-green-600">
            <RouterLink to="/" class="hover:underline"
              >Gallery & Audio</RouterLink
            >
          </li>
          <li class="">
            <RouterLink to="/" class="hover:underline">Events</RouterLink>
          </li>
        </ul>
      </li>
      <li>
        <RouterLink class="hover:bg-green-900 p-2" to="/">Shop</RouterLink>
      </li>
      <li>
        <RouterLink class="hover:bg-green-900 p-2" to="/">Donate</RouterLink>
      </li>
    </ul>
    <div class="pt-8 lg:pt-7 lg:text-base">
      <RouterLink class="contact hover:opacity-30" to="/">Contact</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.contact {
  background: #33cc33;
  padding: 12px 30px;
  color: white;
}
</style>
