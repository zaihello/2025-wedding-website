import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
// 匯入 Font Awesome 的核心套件
import { library } from '@fortawesome/fontawesome-svg-core'
//匯入 Vue 元件
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//匯入你要使用的圖示
import { faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

import Home from './views/Home.vue'

const routes = [
    {path:'/',component:Home}
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

//將圖示新增到函式庫中
library.add(faMapMarkerAlt, faEnvelope, faPhoneAlt)

const app = createApp(App)

//註冊
app.component('font-awesome-icon',FontAwesomeIcon)
app.use(router)

app.mount('#app')
