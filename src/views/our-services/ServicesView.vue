<script setup>
import { ref } from "vue";

const showQuestionaire = ref(false);

const doShowQuestionaire = () => {
  showQuestionaire.value = !showQuestionaire.value;
  console.log(showQuestionaire.value);
};
</script>
<template>
  <div
    v-if="showQuestionaire"
    class="min-h-screen w-full bg-black bg-opacity-60 z-50 py-5 sm:p-5 fixed top-0"
  >
    <div
      class="scrolly overflow-y-auto bg-white w-11/12 lg:w-8/12 mx-auto p-3 sm:p-8 space-y-6 text-sm"
    >
      <h2 class="text-xl sm:text-2xl flex justify-between">
        <span class="">How may we be of service?</span>
        <svg
          @click="doShowQuestionaire()"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-10 h-10 text-red-800 hover:opacity-60 cursor-pointer"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </h2>
      <p>
        Thank you for your interest in Thrive House’s services. To serve you
        better, please take a moment to complete this form and we will get in
        touch with you within 72 hours. You can also call +2340000000000.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="">
          <label class="text-sm">What is your name?*</label>
          <input
            type="text"
            class="w-full border border-gray-600 bg-red-50 h-10 outline-none mt-1 px-4"
          />
        </div>
        <div class="">
          <label class="text-sm">What is your email address?*</label>
          <input
            type="text"
            class="w-full border border-gray-600 bg-red-50 h-10 outline-none mt-1 px-4"
          />
        </div>
        <div class="">
          <label class="text-sm">What is your phone number?*</label>
          <input
            type="text"
            class="w-full border border-gray-600 bg-red-50 h-10 outline-none mt-1 px-4"
          />
        </div>
        <div class="">
          <label class="text-sm"
            >Who would we be rendering our services to?*</label
          >
          <select
            class="w-full border border-gray-600 bg-red-50 h-10 outline-none mt-1 px-4"
          >
            <option value=""></option>
            <option value="A program">A program</option>
            <option value="An individual">An individual</option>
          </select>
        </div>
        <div class="">
          <label class="text-sm"
            >If it is a program, what is the duration of the program? *</label
          >
          <input
            type="text"
            class="w-full border border-gray-600 bg-red-50 h-10 outline-none mt-1 px-4"
          />
        </div>
        <div class="">
          <label class="text-sm">What can Thrive House do for you?</label>
          <select
            class="w-full border border-gray-600 bg-red-50 h-10 outline-none mt-1 px-4"
          >
            <option value=""></option>
            <option value="Public Relations skills">
              Public Relations skills
            </option>
            <option value="Self management skills">
              Self management skills
            </option>
            <option value="Authoring and Documentation">
              Authoring and Documentation
            </option>
            <option value="Human Resource Management">
              Human Resource Management
            </option>
            <option value="Personal and cooperate Leadership">
              Personal and cooperate Leadership
            </option>
            <option value="Public Speaking and presentation skill">
              Public Speaking and presentation skill
            </option>
            <option value="Editing, publishing and printing services">
              Editing, publishing and printing services
            </option>
            <option value="Weight loss, Dieting and fitness skills">
              Weight loss, Dieting and fitness skills
            </option>
            <option value="Sexuality Education and self love">
              Sexuality Education and self love
            </option>
            <option value="Pre marital education and seminars">
              Pre marital education and seminars
            </option>
            <option value="Effective marriage education and seminars">
              Effective marriage education and seminars
            </option>
            <option value="Child care and parenting education and skills">
              Child care and parenting education and skills
            </option>
            <option value="Sexual healing training (Only for the married)">
              Sexual healing training (Only for the married)
            </option>
            <option value="Ministration, preaching and speaking services">
              Ministration, preaching and speaking services
            </option>
            <option value="Philanthropic and public aid services">
              Philanthropic and public aid services
            </option>
            <option value="Stress management skills">
              Stress management skills
            </option>
          </select>
        </div>
        <div class="">
          <label class="text-sm"
            >Can you tell us a little more about that?*</label
          >
          <textarea
            class="w-full border border-gray-600 bg-red-50 h-20 outline-none mt-1 px-4"
          ></textarea>
        </div>
        <div class="">
          <label class="text-sm"
            >What are the provisions for transportation and
            accommodation?</label
          >
          <textarea
            class="w-full border border-gray-600 bg-red-50 h-20 outline-none mt-1 px-4"
          ></textarea>
        </div>
        <div class="">
          <label class="text-sm">How did you hear about Thrive House?</label>
          <input
            type="text"
            class="w-full border border-gray-600 bg-red-50 h-10 outline-none mt-1 px-4"
          />
        </div>
        <div class="text-right pt-7">
          <button class="bg-green-800 text-white text-sm py-2 px-5 w-40">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
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
                <span
                  @click="doShowQuestionaire()"
                  class="bg-green-800 p-2 text-white hover:opacity-60 cursor-pointer"
                >
                  Fill out the questionaire
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scrolly {
  height: 650px !important;
}
.scrolly::-webkit-scrollbar {
  width: 5px;
}

/* Track */
.scrolly::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
.scrolly::-webkit-scrollbar-thumb {
  background: #006633;
  border-radius: 10px;
}

/* Handle on hover */
.scrolly::-webkit-scrollbar-thumb:hover {
  background: #006633;
}
</style>
