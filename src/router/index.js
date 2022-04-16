import { createRouter , createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import GetStarted from '../views/GetStarted.vue';
import Surah from '../views/Surah.vue';
import JadwalSholat from '../views/JadwalSholat.vue';

const routes = [
    {
        path: '/',
        component: Home,
        name: 'Home'
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/getstarted',
        component: GetStarted
    },
    {
        path: '/surah/:surah/:id',
        component: Surah,
        name: 'surah'
    },
    {
        path: '/jadwalsholat',
        component: JadwalSholat,
        name: 'jadwalSholat'
    }
];

const router = createRouter({
    'history' : createWebHistory(),
    routes
})

export default router