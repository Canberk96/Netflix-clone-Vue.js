

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import SlotComp from './components/SlotComp.vue'

const app = createApp(App)

app.use(createPinia())
app.component('slot-comp', SlotComp)

app.mount('#app')
