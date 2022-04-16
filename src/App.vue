<template>
<div class="fixed left-0 top-0 w-screen h-screen hidden bg-[#091945] z-50 font-pupylinux text-white lg:flex justify-center items-center text-3xl">
  <p>Sorry this site mobile only</p>
</div>
<Navbar />
  <Bar v-if="$route.name != 'surah'" />
  <router-view></router-view>
</template>

<script>
import Bar from "./components/Bar.vue";
import Navbar from "./components/Navbar.vue";
export default {
    components: { Bar, Navbar }
}
</script>

<style>

</style>