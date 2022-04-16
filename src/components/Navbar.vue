<template>
  <div v-if="$route.name != 'surah' " class="flex items-center px-5 pt-7">
<div class="flex justify-center mr-3">
  <div>
    <div class="dropend relative">
      <button
        class="
          dropdown-toggle
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:shadow-lg
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
        type="button"
        id="dropdownMenuButton1e"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img src="/img/menu-2.svg" alt="">
      </button>
      <ul
        class="
          dropdown-menu
          min-w-max
          absolute
          hidden
          bg-white
          text-base
          z-50
          float-left
          py-2
          px-3
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        "
        aria-labelledby="dropdownMenuButton1e"
      >
        <li @click="formnama = true" class="mb-3">
            Namamu ?
        </li>
        <li>
          <div class="flex justify-center">
  <div class="form-check form-switch">
    <input @click="mode" class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckChecked">
  </div>
</div>
        </li>
      </ul>
    </div>
  </div>
</div>
      <p v-if="$route.name == 'Home'" class="font-pupylinux text-white dark:text-black font-semibold text-xl">Quran App</p>
      <p v-else class="font-pupylinux text-white dark:text-black font-semibold text-xl">Jadwal Sholat</p>
  </div>
  <div v-else class="flex items-center px-5 pt-7 pb-5 z-30 sticky top-0 bg-[#09194556] dark:bg-[#fff7] backdrop-blur">
      <router-link to="/"><img src="/img/arrow-left.svg" alt="" class="mr-5"></router-link>
      <p class="font-pupylinux text-white dark:text-black font-semibold text-xl">{{ $route.params.surah }}</p>
  </div>

<transition name="closenama">
  <div v-if="formnama" @click="formnama = false" class="fixed top-0 left-0 w-screen h-screen bg-[#00000070] z-30"></div>
</transition>
<transition name="formnama">
  <div v-if="formnama" class="fixed z-40 bg-[#2b3f77] left-0 right-0 mx-auto w-max font-pupylinux py-5 px-5 rounded-lg">
    <input type="text" v-model="nama" @keyup.enter="setNama" class="w-[60vw] rounded-lg py-2 px-3" placeholder="Nama kamu">
  </div>
</transition>
</template>

<script>
import 'tw-elements';
export default {
  data() {
    return {
      onDrop : false,
      formnama: false,
      nama: ''
    }
  },
  mounted() {
    const html = document.querySelector('html')
    const toglemode = document.querySelector('#flexSwitchCheckChecked')
    if (localStorage.mode) {
      toglemode.checked = true
      if (toglemode.checked) {
        html.classList.add('dark')
      }
    }
  },
  methods: {
    setNama(){
      localStorage.setItem('nama', this.nama)
      this.formnama = false
      this.$store.state.namaGuest = this.nama
    },
    mode(e){
      const html = document.querySelector('html')

      if (e.target.checked) {
        html.classList.add('dark')
        localStorage.setItem('mode', 'dark')
      }else{
        html.classList.remove('dark')
        localStorage.removeItem('mode')
      }
    }
  },
}
</script>

<style>
.closenama-enter-from,
.closenama-leave-to{
  opacity: 0;
}
.formnama-enter-from{
  opacity: 0;
  transform: scale(.4);
}
.formnama-leave-to{
  transform: translateY(30px);
  opacity: 0;
}
.closenama-enter-active,
.closenama-leave-active,
.formnama-enter-active,
.formnama-leave-active{
  transition: .2s all ease;
}
</style>