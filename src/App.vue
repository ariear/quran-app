<template>
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