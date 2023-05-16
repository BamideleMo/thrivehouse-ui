<script setup>
import { ref } from "vue";

const win = ref("videos");

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
        <span>Media</span>
        <span>/</span>
        <RouterLink class="hover:opacity-30" to="/media/gallery-and-audio"
          >Gallery & Audio</RouterLink
        >
      </div>
      <img src="/banner-about.png" class="w-full -mt-8" />
      <h2
        class="w-11/12 -mt-10 mb-10 lg:-mt-24 lg:mb-24 mx-auto text-white font-bold text-lg lg:text-5xl"
      >
        Gallery & Audio
      </h2>
    </div>
    <div class="w-11/12 mx-auto my-12 lg:my-20">
      <div class="flex">
        <span
          @click="changeWin('videos')"
          class="border-b-4 cursor-pointer text-black px-3"
          :class="{
            'border-green-800': win === 'videos',
            'border-green-400': win !== 'videos',
          }"
          >Videos</span
        >
        <span
          @click="changeWin('photos')"
          class="border-b-4 cursor-pointer text-black px-3"
          :class="{
            'border-green-800': win === 'photos',
            'border-green-400': win !== 'photos',
          }"
          >Photos</span
        >
        <span
          @click="changeWin('audio')"
          class="border-b-4 cursor-pointer text-black px-3"
          :class="{
            'border-green-800': win === 'audio',
            'border-green-400': win !== 'audio',
          }"
          >Audio</span
        >
        <span class="grow border-b-4 border-green-400 px-3">&nbsp;</span>
      </div>
      <div v-if="win === 'videos'" class="py-10">No videos found.</div>
      <div v-if="win === 'photos'" class="py-10">No photos found.</div>
      <div v-if="win === 'audio'" class="py-10">No audio found.</div>
    </div>
  </div>
</template>

<style></style>
