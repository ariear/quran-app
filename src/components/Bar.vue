<template>
  <div class="bg-[#152451] dark:bg-white dark:shadow-inner transition-all fixed bottom-0 left-0 w-screen flex py-4 justify-around items-center">
      <div>
          <router-link to="/">
          <img src="/img/005-quran1.svg" alt="">
          <div v-if="$route.name == 'Home'" class="border border-[#A44AFF] w-[20px] mx-auto mt-2"></div>
          </router-link>
      </div>
      <div>
          <router-link to="/jadwalsholat">
          <img src="/img/Group.svg" alt="">
          <div v-if="$route.name == 'jadwalSholat'" class="border border-[#A44AFF] w-[20px] mx-auto mt-1"></div>
          </router-link>
      </div>
      <div>
          <img src="/img/lampu.svg" alt="">
      </div>
  </div>
</template>

<script>
export default {

}
</script>