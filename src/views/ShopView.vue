<script setup>
import { ref } from "vue";

const win = ref("all");

const changeWin = (val) => {
  win.value = val;
};
</script>
<template>
  <div class="font-rale">
    <div class="">
      <div
        class="w-11/12 pt-4 mx-auto text-xs text-white space-x-2 z-20 relative"
      >
        <RouterLink class="hover:opacity-30" to="/">Home</RouterLink>
        <span>/</span>
        <RouterLink class="hover:opacity-30" to="/shop">Shop</RouterLink>
      </div>
      <img src="/banner-about.png" class="w-full -mt-8" />
      <h2
        class="w-11/12 -mt-10 mb-10 lg:-mt-24 lg:mb-24 mx-auto text-white font-bold text-lg lg:text-5xl"
      >
        Shop
      </h2>
    </div>
    <div class="w-11/12 mx-auto my-12 lg:my-20">
      <div class="flex">
        <span
          @click="changeWin('all')"
          class="border-b-4 cursor-pointer text-black px-3"
          :class="{
            'border-green-800': win === 'all',
            'border-green-400': win !== 'all',
          }"
          >All</span
        >
        <span
          @click="changeWin('books')"
          class="border-b-4 cursor-pointer text-black px-3"
          :class="{
            'border-green-800': win === 'books',
            'border-green-400': win !== 'books',
          }"
          >Books</span
        >
        <span
          @click="changeWin('courses')"
          class="border-b-4 cursor-pointer text-black px-3"
          :class="{
            'border-green-800': win === 'courses',
            'border-green-400': win !== 'courses',
          }"
          >Courses</span
        >
        <span
          @click="changeWin('diet')"
          class="border-b-4 cursor-pointer text-black px-3"
          :class="{
            'border-green-800': win === 'diet',
            'border-green-400': win !== 'diet',
          }"
          >Diet store</span
        >
        <span class="grow border-b-4 border-green-400 px-3">&nbsp;</span>
      </div>
      <div v-if="win === 'all'" class="py-10">No records found.</div>
      <div v-if="win === 'books'" class="py-10">No books found.</div>
      <div v-if="win === 'courses'" class="py-10">No courses found.</div>
      <div v-if="win === 'diet'" class="py-10">No diet found.</div>
    </div>
  </div>
</template>

<style></style>
