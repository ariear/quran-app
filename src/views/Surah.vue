<template>
  <div class="font-pupylinux px-5">

      <!-- alert -->
      <transition name="alert">      
      <div v-if="tersimpan" class="fixed w-[50vw] text-center left-5 top-20 bg-[#A44AFF] text-white z-50 font-light text-sm py-3 rounded-lg">
          Berhasil disimpan di terakhir di baca
      </div>
      </transition>
      <!-- end alert -->

      <div class="text-white text-center bg-cover bg-center rounded-2xl py-7 mb-10" style="background-image: url('/img/thumb-surah.png');">
          <p class="font-medium text-2xl mb-3" v-if="loadingayat">------</p>
          <p class="font-medium text-2xl mb-3" v-else>{{ namaSurah }}</p>
          <p class="font-normal mb-4" v-if="loadingayat">--------</p>
          <p class="font-normal mb-4" v-else >{{ translation }}</p>
          <div class="border mx-10 border-[#ffffff80] mb-4"></div>
          <p class="text-sm mb-8">{{ jenisSurah }} - {{ getSurah.numberOfVerses }} Ayat</p>
          <p class="text-4xl font-serif">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</p>
      </div>

    <div>

        <div v-if="loadingayat">
        <div class="mb-7">
            <div class="bg-[#152451] dark:bg-slate-200 animate-pulse rounded-xl py-3 px-3 flex justify-between mb-4">
                <p class="bg-[#A44AFF] w-max py-4 px-4 text-sm rounded-full text-white"></p>
                <div class="flex items-center">
                    <div class="p-3 rounded-full bg-[#A44AFF]"></div>
                    <div class="p-3 rounded-full bg-[#A44AFF] ml-3"></div>
                </div>
            </div>
            <p class="text-white text-right text-3xl mb-4 animate-pulse">----------</p>
            <p class="text-[#ABAFD7] font-light text-sm animate-pulse">------</p>
        </div>
        <div class="mb-7">
            <div class="bg-[#152451] dark:bg-slate-200 animate-pulse rounded-xl py-3 px-3 flex justify-between mb-4">
                <p class="bg-[#A44AFF] w-max py-4 px-4 text-sm rounded-full text-white"></p>
                <div class="flex items-center">
                    <div class="p-3 rounded-full bg-[#A44AFF]"></div>
                    <div class="p-3 rounded-full bg-[#A44AFF] ml-3"></div>
                </div>
            </div>
            <p class="text-white text-right text-3xl mb-4 animate-pulse">----------</p>
            <p class="text-[#ABAFD7] font-light text-sm animate-pulse">------</p>
        </div>
        <div class="mb-7">
            <div class="bg-[#152451] dark:bg-slate-200 animate-pulse rounded-xl py-3 px-3 flex justify-between mb-4">
                <p class="bg-[#A44AFF] w-max py-4 px-4 text-sm rounded-full text-white"></p>
                <div class="flex items-center">
                    <div class="p-3 rounded-full bg-[#A44AFF]"></div>
                    <div class="p-3 rounded-full bg-[#A44AFF] ml-3"></div>
                </div>
            </div>
            <p class="text-white text-right text-3xl mb-4 animate-pulse">----------</p>
            <p class="text-[#ABAFD7] font-light text-sm animate-pulse">------</p>
        </div>
        </div>

        <div v-else v-for="(surah, index) in getSurah.verses" :key="index" class="mb-7">
            <div class="bg-[#152451] dark:bg-slate-200 rounded-xl py-3 px-3 flex justify-between mb-4 relative">
                <p class="bg-[#A44AFF] w-max py-2 px-4 text-sm rounded-full text-white">{{ surah.number.inSurah }}</p>
<audio controls class="suaraNgaji hidden">
  <source :src="surah.audio.primary" type="audio/mpeg">
</audio>
                <div class="flex items-center">
                    <img src="/img/play.svg" @click="playOrPause(index)" alt="">
                    <img src="/img/wishlist.svg" @click="lastread(surah.number.inSurah , getSurah.name.transliteration.id)" class="ml-4" alt="">
                </div>
            </div>
            <p class="text-white dark:text-black text-right text-3xl mb-4">{{ surah.text.arab }}</p>
            <p class="text-[#ABAFD7] dark:text-black font-light text-sm">{{ surah.translation.id }}</p>
        </div>

    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            getSurah: [],
            namaSurah: '',
            translation: '',
            jenisSurah: '',
            putarBacaan: false,
            loadingayat: false,
            tersimpan: false
        }
    },
    methods: {
        async metGetSurah(){
            try {        
                this.loadingayat = true        
                await axios.get(`https://api.quran.gading.dev/surah/${this.$route.params.id}`)
                    .then(response => {
                        this.getSurah = response.data.data
                        this.namaSurah = this.getSurah.name.transliteration.id
                        this.translation = this.getSurah.name.translation.id
                        this.jenisSurah = this.getSurah.revelation.id
                        if (response.status == 200) {
                            this.loadingayat = false
                        }
                    })
            } catch (error) {
                this.loadingayat = true
            }
        },
        lastread(surat, namaSurah){
            this.tersimpan = true
            localStorage.setItem('lastread', JSON.stringify({
                'surat' : surat,
                'namaSurat': namaSurah,
                'idsur' : this.$route.params.id 
            }))
            setTimeout(() => {
                this.tersimpan = false
            }, 2000);
        },
        playOrPause(index){
            let suaraNgaji = document.querySelectorAll('.suaraNgaji')
            let ngaji = suaraNgaji[index] 
            if (!ngaji.paused && !ngaji.ended) {
                ngaji.pause()
            }else{
                ngaji.play()
            }
        }
    },
    mounted() {
        this.metGetSurah()
    },
}
</script>

<style>
.alert-enter-from,
.alert-leave-to{
    transform: translateX(-30px);
    opacity: 0;
}
.alert-enter-active,
.alert-leave-active{
    transition: .3s all ease;
}
</style>