import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// Import Custom CSS
import './assets/sass/style.scss'

const app = createApp(App)
app.use(createPinia())
app.mount('#app')

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'