<template>
  <div class="font-rale">
    <div class="">
      <div
        class="w-11/12 pt-4 mx-auto text-xs text-white space-x-2 z-20 relative"
      >
        <RouterLink class="hover:opacity-30" to="/">Home</RouterLink>
        <span>/</span>
        <span>Our Services</span>
        <span>/</span>
        <span>Networks</span>
        <span>/</span>
        <RouterLink class="hover:opacity-30" to="/our-services/fitness-ship"
          >Fitness-ship</RouterLink
        >
      </div>
      <img src="/banner-fitnessship.png" class="w-full -mt-8" />
      <h2
        class="w-11/12 -mt-10 mb-10 lg:-mt-24 lg:mb-24 mx-auto text-white font-bold text-lg lg:text-5xl"
      >
        Fitness-ship
      </h2>
    </div>
    <div class="w-11/12 mx-auto my-12 lg:my-20">
      <div class="lg:flex">
        <div class="hidden lg:block lg:w-3/12">
          <img src="/fitness-ship.png" class="w-full" />
        </div>
        <div class="lg:w-9/12 text-sm lg:text-base">
          <div class="p-4 pt-0 lg:p-8 lg:pt-2">
            <div class="space-y-6">
              <h2 class="font-bold text-lg lg:text-2xl uppercase">
                <span class="text-green-800 shadow-lg p-2 border"
                  >NUTRISCULPT WELLNESS</span
                >
              </h2>
              <p>
                We have an online Facebook community of over twenty-one thousand
                (21,000) married people called The Peak of Sexual Pleasure—POSP.
                This community has healed so many marriages. It occasionally has
                physical meetings. Through this network, the team leader helps
                other married couples who are having challenges with their
                marriage to fix it. While this community welcomes people of all
                religions and regions, it operates on Christian principles.
              </p>
              <p>
                The team leader specialises in weight loss programs that are
                tested and proven. He used himself as a trial and from there
                trained several others to stay healthier.
              </p>
            </div>
            <div class="pt-12 space-y-6">
              <RouterLink
                to="/"
                class="bg-green-800 p-2 text-white hover:opacity-60"
              >
                When do we start?
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
