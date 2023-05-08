<script setup>
import { ref } from "vue";
import MenuItems from "./MenuItems.vue";

const showMenu = ref(false);

const toggleShowMenu = () => {
  showMenu.value = !showMenu.value;
};
</script>
<template>
  <div
    v-if="showMenu"
    class="bg-black bg-opacity-95 top-0 fixed min-h-screen z-50 w-full flex"
  >
    <div class="grow">&nbsp;</div>
    <div class="w-60 bg-green-700 border-l border-black">
      <h2 class="bg-white py-1 text-right">
        <svg
          @click="toggleShowMenu"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-10 h-10 inline-block cursor-pointer hover:text-green-700 mr-3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </h2>
      <MenuItems @toggle-show-menu="toggleShowMenu" />
    </div>
  </div>
  <header class="font-rale text-white z-40 w-full h-16 lg:h-20">
    <div class="mx-1 lg:w-11/12 lg:mx-auto flex justify-between">
      <div class="mt-2 ml-2 lg:ml-0">
        <RouterLink to="/">
          <img src="/logo.png" alt="logo" class="h-10 lg:h-14" />
        </RouterLink>
      </div>
      <MenuItems class="hidden lg:flex" />
      <svg
        @click="toggleShowMenu"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="lg:hidden w-10 h-10 mt-2 mr-2 cursor-pointer"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
        />
      </svg>
    </div>
  </header>
</template>

<style scoped>
header {
  background: #006633;
}
</style>
