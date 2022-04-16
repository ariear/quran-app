import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './index.css'
import router from './router'
import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        started: localStorage.getItem('started'),
        nameSurah: '',
        namaGuest: localStorage.getItem('nama')
      }
    },
  })

createApp(App).use(store).use(router).mount('#app')
