<template>
  <div class="px-5 font-pupylinux pt-10 pb-20">
    <form @submit.prevent="getJadwalSholat">
    <div class="mb-4 flex items-center text-white dark:text-black">
      <input type="search" v-model="kota" class="py-2 px-3 rounded-lg bg-[#152451] dark:bg-slate-200 w-[60vw] mr-3" placeholder="Masukkan kota kamu">
      <button type="submit" class="bg-[#152451] dark:bg-slate-200 p-2 rounded-full"><img src="/img/search.svg" alt=""></button>
    </div>
    </form>
        <svg v-if="loadingjadwal" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="50px" height="50px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g>
  <path d="M50 15A35 35 0 1 0 74.74873734152916 25.251262658470843" fill="none" stroke="#a44aff" stroke-width="12"></path><path d="M49 3L49 27L61 15L49 3" fill="#a44aff"></path>
  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform></g></svg>
  <p class="font-pupylinux text-center text-white dark:text-black" v-if="tidakAda">Kota tidak ditemukan</p>
  <div v-else>
    <p class="mb-2 text-white dark:text-black text-2xl">{{ getKota.city }}</p>
    <p class="text-white dark:text-black mb-5">{{ getKota.country }}</p>
    <div v-for="(jadwal , index) in dataJadwalSholat" :key="index" class="bg-[#152451] dark:bg-slate-200 dark:text-black text-white p-4 rounded-xl mb-4 flex items-center justify-between">
      <p>{{ index }}</p>
      <p>{{ jadwal }}</p>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      dataJadwalSholat : [],
      kota: '',
      getKota: '',
      tidakAda: false,
      loadingjadwal: false
    }
  },
  methods: {
    async getJadwalSholat(){
      try {      
        this.loadingjadwal = true  
        await axios.get(`https://dailyprayer.abdulrcs.repl.co/api/${this.kota}`)
                  .then(response => {
                    this.dataJadwalSholat = response.data.today
                    this.getKota = response.data.city
                    if (response.status == 200) {
                      this.loadingjadwal = false
                    }
                  })
      } catch (error) {
        this.loadingjadwal = false
        this.tidakAda = true
      }
    }
  },
}
</script>