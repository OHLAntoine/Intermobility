import '@/assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'
import VueScrollTo from 'vue-scrollto'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueScrollTo)

app.mount('#app')
