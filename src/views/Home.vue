<template>
<div class="px-5 font-pupylinux">
  <div class="sticky top-0 bg-[#091945] dark:bg-white transition-all pb-5">
  <p class="text-[#7B80AD] dark:text-black font-medium text-lg pt-7">Assalamualaikum</p>
  <p class="font-medium text-2xl text-white dark:text-black pt-2 mb-7">{{ $store.state.namaGuest }}</p>

<router-link :to="`/surah/${lastread.namaSurat}/${lastread.idsur}`">
  <div class="h-[130px] rounded-lg bg-cover bg-center px-4" style="background-image: url('img/terakhir.png');">
    <div class="flex items-center pt-5">
      <img src="/img/icon-buku.png" class="mr-2" alt="">
      <p class="text-white font-medium text-sm">Last Read</p>
    </div>
    <div class="text-white pt-5">
      <p class="text-lg font-semibold">{{ lastread.namaSurat }}</p>
      <p class="text-sm font-light">Ayat Ke : {{ lastread.surat }}</p>
    </div>
  </div>
</router-link>
  </div>

  <div class="pb-20">

    <svg v-if="loadingQuran" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="50px" height="50px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g>
  <path d="M50 15A35 35 0 1 0 74.74873734152916 25.251262658470843" fill="none" stroke="#a44aff" stroke-width="12"></path><path d="M49 3L49 27L61 15L49 3" fill="#a44aff"></path>
  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform></g></svg>
    
    <div v-else v-for="quran in getdataquran" :key="quran.number" class="mt-7 flex items-center justify-between">
      <div class="flex items-center">
      <div class="w-[36px] h-[36px] text-white dark:text-black bg-cover bg-center flex justify-center items-center text-sm mr-4" style="background-image: url('/img/iconayah.png');">
        {{ quran.number }}
      </div>
      <div>
        <p class="text-white dark:text-black font-medium text-base"><router-link :to="'/surah/' + quran.name.transliteration.id + '/' + quran.number">{{ quran.name.transliteration.id }}</router-link></p>
        <p class="text-[#7B80AD] text-sm">{{ quran.revelation.id }} - {{ quran.numberOfVerses }} Ayat</p>
      </div>
      </div>
      <p class="text-[#A44AFF] font-semibold text-xl font-sans">{{ quran.name.short }}</p>
    </div>

  </div>

</div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      getdataquran: [],
      lastread: [],
      loadingQuran: false,
      jeneng: ''
    }
  },
  created() {
    if (localStorage.lastread) {
      this.lastread = JSON.parse(localStorage.getItem('lastread'))
    }
  },
  methods: {
    async resquran(){
      try {       
        this.loadingQuran = true 
        await axios.get('https://api.quran.sutanlab.id/surah')
          .then(response => {
            this.getdataquran = response.data.data
            if (response.status == 200) {
              this.loadingQuran = false
            }
          })
      } catch (error) {
        this.loadingQuran = true
      }
    },
  },

  mounted() {
    if (!this.$store.state.started) {
      this.$router.push('/getstarted')
    }
    this.resquran()
  },
}
</script>