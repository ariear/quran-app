<template>
  <div class="absolute top-0 left-0 w-screen min-h-screen bg-[#091945] text-center font-pupylinux pb-14">
  <p class="text-white font-semibold text-3xl pt-14 mb-5">Quran App</p>
  <p class="text-[#7B80AD] text-lg w-[50vw] mx-auto mb-10">Learn Quran and Recite once everyday</p>

  <div class="relative">
    <img src="/img/started.png" class="mx-auto w-[70vw]" alt="">
    <button class="py-3 px-6 text-[#091945] bg-[#F9B091] rounded-full font-semibold text-lg absolute -bottom-5 left-0 right-0 mx-auto w-max" @click="started">Get Started</button>
  </div>
</div>
</template>

<script>
export default {
    methods: {
        started(){
            localStorage.setItem('started', true)
            location.href = '/'
        }
    },
    mounted() {
        if (this.$store.state.started) {
            this.$router.push('/')
        }
    },
}
</script>