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
        <RouterLink class="hover:opacity-30" to="/our-services/services"
          >Services</RouterLink
        >
      </div>
      <img src="/banner-about.png" class="w-full -mt-8" />
      <h2
        class="w-11/12 -mt-10 mb-10 lg:-mt-24 lg:mb-24 mx-auto text-white font-bold text-lg lg:text-5xl"
      >
        Services
      </h2>
    </div>
    <div class="w-11/12 mx-auto my-12 lg:my-20">
      <div class="lg:flex">
        <div class="hidden lg:block lg:w-3/12">
          <img src="/vision.png" class="w-full" />
        </div>
        <div class="lg:w-9/12 text-sm lg:text-base">
          <div class="p-4 pt-0 lg:p-8 lg:pt-2 space-y-4">
            <p>
              <b class="text-green-800 text-xl font-extrabold">O</b>ur various
              networks are available to strive in several ways to bring you to
              that wholeness to make sure you thrive.
            </p>
            <ul class="list-image-[url('/tick.svg')] mx-12 space-y-4">
              <li>Public Relations skills.</li>
              <li>Self management skills.</li>
              <li>Authoring and Documentation.</li>
              <li>Human Resource Management.</li>
              <li>Personal and cooperate Leadership.</li>
              <li>Public Speaking and presentation skill.</li>
              <li>Editing, publishing and printing services.</li>
              <li>Weight loss, Dieting and fitness skills.</li>
              <li>Sexuality Education and self love.</li>
              <li>Pre-marital education and seminars.</li>
              <li>Effective marriage education and seminars.</li>
              <li>Child care and parenting education and skills.</li>
              <li>Sexual healing training (Only for the married).</li>
              <li>Ministration, preaching and speaking services.</li>
              <li>Philanthropic and public aid services.</li>
              <li>Stress management skills.</li>
            </ul>

            <div class="pt-12 space-y-6">
              <p>What service do you need? Fill out the questionaire</p>
              <p>
                <RouterLink
                  to="/"
                  class="bg-green-800 p-2 text-white hover:opacity-60"
                >
                  Fill out the questionaire
                </RouterLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
