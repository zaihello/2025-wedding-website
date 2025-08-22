import { createApp } from 'vue'
import { createRouter,createWebHashHistory } from 'vue-router'
// import { createRouter,createWebHistory } from 'vue-router'

import './style.css'
import App from './App.vue'
// 匯入 Font Awesome 的核心套件
import { library } from '@fortawesome/fontawesome-svg-core'
//匯入 Vue 元件
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//匯入solid的圖示
import { faMapPin, faEnvelope, faPhoneAlt,faAlarmClock,faArrowDown,faMagnifyingGlass,faBars,faXmark} from '@fortawesome/free-solid-svg-icons'
//匯入brand的圖示
import { faFacebookF,faXTwitter,faInstagram,faPinterest,faYoutube } from '@fortawesome/free-brands-svg-icons'
import Home from './views/Home.vue'

const routes = [
    {path:'/',component:Home}
]

const router = createRouter({
    history:createWebHashHistory(),
    // history:createWebHistory(),
    routes,
})

//將圖示新增到函式庫中
library.add(
    faMapPin,
    faEnvelope,
    faPhoneAlt,
    faAlarmClock,
    faArrowDown,
    faMagnifyingGlass,
    faBars,
    faXmark,
    faFacebookF,
    faXTwitter,
    faInstagram,
    faPinterest,
    faYoutube
)

const app = createApp(App)

//註冊
app.component('font-awesome-icon',FontAwesomeIcon)
app.use(router)

app.mount('#app')
