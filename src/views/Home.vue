<script setup>
import { onMounted,ref} from 'vue'
// 匯入 Splide 函式庫
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css'

// 建立一個 ref 來取得 DOM 元素
const splideRef = ref(null)

//定義輪播資料
const testimonials = [
    {
        id:1,
        name:'KELLY CLARKSON',
        title:'',
        image:'https://demosoledad.pencidesign.net/soledad-wedding-planner-multipurpose/wp-content/uploads/sites/36/2019/11/ava.jpg',
        quote:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',

    },
    {
        id:2,
        name:'MONIA GELLER',
        title:'',
        image:'https://demosoledad.pencidesign.net/soledad-wedding-planner-multipurpose/wp-content/uploads/sites/36/2019/11/ava2.jpg',
        quote:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.',

    },

]
//blog資料
const blogPosts = ref([
  {
    id:1,
    title:'Head to Toe Blueprints for Styling a Classic Themed Wedding',
    date:'June 23,2019',
    auther:'Penci Design',
    image:'https://demosoledad.pencidesign.net/soledad-wedding-planner-multipurpose/wp-content/uploads/sites/36/2019/06/2-1170x779.jpg',
  },
  {
    id:2,
    title:'The Most Fabulous & Beautiful Floral Wedding Dresses To Flaunt in 2019',
    date:'June 23,2019',
    auther:'Penci Design',
    image:'https://demosoledad.pencidesign.net/soledad-wedding-planner-multipurpose/wp-content/uploads/sites/36/2019/06/3-1170x779.jpg',
  },
  {
    id:3,
    title:'How To Save Precious Wedding Happy Memories With Wedding Photos',
    date:'June 23,2019',
    auther:'Penci Design',
    image:'https://demosoledad.pencidesign.net/soledad-wedding-planner-multipurpose/wp-content/uploads/sites/36/2019/06/6-1170x780.jpg',
  },
])

onMounted(() => {
    // 在元件掛載後才初始化 Splide
    if(splideRef.value) {
        const splide = new Splide(splideRef.value,{
            type:'loop',
            perPage:1,
            autoplay:true,
            pauseOnHover:false,
            perMove:1,
            breakpoints:{
                768:{
                    perPage:1,
                }
            }

        })
        splide.mount()
    }
})
// export default {
//   name: "WeddingPlannerPage",
//   data() {
//     return {
//       isMenuOpen: false,
//     };
//   },
//   methods: {
//     toggleMenu() {
//       this.isMenuOpen = !this.isMenuOpen;
//     },
//   },
// };
</script>

<template>
  <div class="font-sans text-gray-800">
    <!-- Header -->
    <header class="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div class="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 class="text-2xl font-bold text-pink-600">Wedding Planner</h1>
        <!-- Desktop menu -->
        <nav class="hidden md:flex gap-6 font-medium">
          <a href="#" class="hover:text-pink-500">首頁</a>
          <a href="#" class="hover:text-pink-500">關於我們</a>
          <a href="#" class="hover:text-pink-500">服務</a>
          <a href="#" class="hover:text-pink-500">作品</a>
          <a href="#" class="hover:text-pink-500">聯絡我們</a>
        </nav>
        <!-- Mobile hamburger -->
        <button @click="toggleMenu" class="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <!-- Mobile menu -->
      <div v-if="isMenuOpen" class="md:hidden bg-white border-t">
        <nav class="flex flex-col p-4 space-y-2">
          <a href="#" class="hover:text-pink-500">首頁</a>
          <a href="#" class="hover:text-pink-500">關於我們</a>
          <a href="#" class="hover:text-pink-500">服務</a>
          <a href="#" class="hover:text-pink-500">作品</a>
          <a href="#" class="hover:text-pink-500">聯絡我們</a>
        </nav>
      </div>
    </header>

    <!-- Hero -->
    <section class="pt-24 bg-pink-50">
      <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div class="flex-1 text-center md:text-left">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            讓你的婚禮與眾不同
          </h2>
          <p class="text-gray-600 mb-6">
            我們為您打造專屬、夢幻且溫馨的婚禮體驗，細節至上，讓每一刻都完美呈現。
          </p>
          <button class="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg transition">
            開始規劃
          </button>
        </div>
        <div class="flex-1">
          <img src="https://source.unsplash.com/600x400/?wedding" alt="Wedding" class="rounded-xl shadow-lg" />
        </div>
      </div>
    </section>
  </div>
  <!-- 關於我們 -->
  <section class="py-28 bg-white">
    <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row  md:items-start gap-10">
      <!-- 圖片 -->
      <div class="w-full md:w-8/12 relative">
        <!-- 左圖 -->
        <img
          src="https://demosoledad.pencidesign.net/soledad-wedding-planner-multipurpose/wp-content/uploads/sites/36/2019/11/3-1024x683.jpg"
          alt="Wedding & Events"
          class="w-full md:w-3/5 h-auto shadow-lg object-cover"
        />
        <!-- 右圖 -->
        <img
          src="https://demosoledad.pencidesign.net/soledad-wedding-planner-multipurpose/wp-content/uploads/sites/36/2019/11/4-1024x683.jpg"
          alt="Wedding Detail"
          class="w-full md:w-3/5 h-auto shadow-lg object-cover
                 md:absolute md:bottom-0 md:right-0  md:translate-x-0 md:translate-y-14"
                 
        />
      </div>

      <!-- 文字內容 -->
      <div class="w-full md:w-4/12 space-y-2 lg:text-left">
        <h3 class="text-sm font-black text-cyan-500 uppercase [letter-spacing:6px]">about us</h3>
        <h2 class="text-2xl font-serif">Wedding & Events</h2>
        <p class="text-gray-700 leading-relaxed text-left">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor em que laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae, penci.
        </p>
        <button class="inline-block bg-cyan-500  text-white hover:bg-gray-100 hover:text-cyan-500 font-bold
                       py-4 px-10 rounded-full transition duration-300">
          Call Us Now
        </button>
      </div>
    </div>
  </section>
  <!-- wedding planner -->
  <section class="py-24 bg-gray-100">
    <!-- 標題區 -->
    <div class="text-center space-y-3 mb-10">
        <h3 class="text-sm font-black text-cyan-500 uppercase [letter-spacing:6px]">wedding planner</h3>
        <h2 class="text-2xl font-serif">Wedding Services</h2>
        <p class="text-gray-700 leading-relaxed w-full md:w-3/5 lg:w-1/3 mx-auto">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor em que, viva la vida penci wed.</p>
    </div>
    <!-- 卡片 -->
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row md:gap-8 gap-y-28">
        <!-- 第一張 -->
        <div class="relative">
            <img src="https://demosoledad.pencidesign.net/soledad-wedding-planner-multipurpose/wp-content/uploads/sites/36/2019/11/11-1024x683.jpg" alt="Wedding Planning"
                 class="w-full h-full object-cover"    
            >
            <!-- 原版 -->
            <div class="absolute w-4/5 shadow-lg bg-white p-6 text-center
                        bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"                             
            >
                <h2 class="text-2xl font-serif">Wedding Planning</h2>
                <p class="text-gray-700 leading-relaxed">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxi.</p>
            </div>
            
        </div>
        <!-- 第二張 -->
        <div class="relative">
            <img src="https://demosoledad.pencidesign.net/soledad-wedding-planner-multipurpose/wp-content/uploads/sites/36/2019/11/12-1024x683.jpg" alt=""
            class="w-full h-full object-cover"
            >
           
            <div class="absolute w-4/5 shadow-lg bg-white p-6 text-center
                        bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 "
            
            >
                <h2 class="text-2xl font-serif">Decoration Service</h2>
                <p class="text-gray-700 leading-relaxed">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxi.</p>
            </div>
        </div>
    </div>
  </section>
  <!-- 顧客感言 -->
  <section class="py-24 bg-white">
      <div class="text-center space-y-3">
          <h3 class="text-sm font-black text-cyan-500 uppercase [letter-spacing:6px]">wedding planner</h3>
          <h2 class="text-2xl font-serif">What Customers Say</h2>
      </div>
      <div class="max-w-6xl mx-auto px-4">
          <div ref="splideRef" class="splide" aria-label="Customer Testimonials">
              <div class="splide__track">
                  <ul class="splide__list">
                      <li v-for="testimonial in testimonials" :key="testimonial.id" class="splide__slide">
                          <div class="bg-white p-8 shadow-lg text-center">
                              <p class="text-gray-700 leading mb-4">{{ testimonial.quote}}</p>
                              <img 
                                  :src="testimonial.image" 
                                  :alt="testimonial.name"
                                  class="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                              >
                              <p class="font-bold text-lg txt-gray-800">{{ testimonial.name }}</p>
                          </div>
                      </li>
                  </ul>
              </div>

          </div>

      </div>
  </section>
  <!--  -->
  <section class="py-24">
    <div class="max-w-6xl mx-auto px-4">
      <!-- 圖片 -->
      <div class="flex flex-col md:flex-row gap-2 ">
        <!-- 左圖 -->
        <div class="w-full md:w-1/2 relative min-h-[530px] overlay-container">
          <img 
            src="https://demosoledad.pencidesign.net/soledad-wedding-planner-multipurpose/wp-content/uploads/sites/36/2019/11/17-1024x683.jpg" 
            alt="Elegant Wedding"
            class="absolute inset-0 w-full h-full object-cover">
          <div class="text-center text-white w-4/5  space-y-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h2 class="text-2xl font-serif">Elegant Wedding</h2>
            <p class="text-white leading-relaxed ">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor em que, viva la vida penci wed.</p>
            <button class="inline-block bg-cyan-500  text-white hover:bg-gray-100 hover:text-cyan-500 font-bold py-4 px-10 rounded-full transition duration-300">Call Us Now</button>
                       
          </div>
        </div>
        <!-- 右圖 -->
        <div class="w-full md:w-1/2 h-[530px] grid grid-cols-2 grid-rows-[minmax(0,1fr)_minmax(0,2fr)] gap-2">
          <img 
            src="https://demosoledad.pencidesign.net/soledad-wedding-planner-multipurpose/wp-content/uploads/sites/36/2019/11/7-1170x780.jpg" 
            alt="Elegant Wedding"
            class="w-full h-full object-cover"
          >
          <img 
            src="https://demosoledad.pencidesign.net/soledad-wedding-planner-multipurpose/wp-content/uploads/sites/36/2019/11/8-1170x780.jpg" 
            alt="Elegant Wedding"
            class="w-full h-full object-cover"
          >
          <img 
            src="https://demosoledad.pencidesign.net/soledad-wedding-planner-multipurpose/wp-content/uploads/sites/36/2019/11/10-1024x683.jpg" 
            alt="Elegant Wedding"
            class="col-span-2 w-full h-full object-cover"
          >

        </div>

      </div>
    </div>
  </section>
  <!-- Our Wedding Blog -->
  <section>
    <div class="max-w-6xl mx-auto space-y-9">
      <!-- 標題 -->
      <div class="text-center space-y-3">
        <h3 class="text-sm font-black text-cyan-500 uppercase [letter-spacing:6px]">wedding planner</h3>
        <h2 class="text-2xl font-serif">Our Wedding Blog</h2>
        <p class="text-gray-700 leading-relaxed md:w-1/2 w-4/5 mx-auto">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor em que, viva la vida penci wed.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="blogPost in blogPosts" :key="blogPost.id" class="space-y-2">
          <img 
            :src="blogPost.image" 
            alt="Our Wedding Blog"
            class="hover:opacity-75 transition duration-200 cursor-pointer"
            :title="blogPost.title"
          >
          <h3 class="font-bold hover:opacity-50 transition duration-300 cursor-pointer">{{ blogPost.title }}</h3>
          <div class="text-xs text-gray-700 ">
            <pre>by <a class="font-semibold">{{ blogPost.auther }}</a> | <span>{{ blogPost.date }}</span></pre>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- send us -->
  <section>
    <div class="flex flex-col md:flex-row h-full" >
      <!-- 左邊 -->
      <div class=" w-full md:flex-1 ">
        <div class="relative min-h-[500px] overlay-container">
          <img src="https://demosoledad.pencidesign.net/soledad-wedding-planner-multipurpose/wp-content/uploads/sites/36/2019/11/7-1170x780.jpg" alt="send us"class="absolute inset-0 w-full h-full object-cover">
          <!--  -->
          <div class="w-5/6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white space-y-4">
            <!-- 標題 -->
            <div class="space-y-4"> 
              <h3 class="text-sm font-black uppercase [letter-spacing:6px]">send us</h3>
              <h2 class="text-2xl font-serif">Contact Info</h2>
              <p class="leading-relaxed text-left">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor em que, viva la vida penci wed.</p>
            </div>
            <!-- icon -->
            <div class="space-y-3">
              <div class="text-white flex justify-between items-center space-x-4">
                <div class="flex items-center space-x-2">
                  <!-- fas 是 solid 風格 -->
                  <font-awesome-icon :icon="['fas','map-pin']" class="text-white"/>
                  <h3 class="text-lg font-bold">Address</h3>
                </div>  
                <div class="flex-grow border-b border-white border-dashed"></div>
                <p class="">Central Park, NYC</p>
              </div>
              <div class="text-white flex justify-between items-center space-x-4">
                <div class="flex items-center space-x-2">
                  <font-awesome-icon :icon="['fas','envelope']" class="text-white"/>
                  <h3 class="text-lg font-bold">Email Address</h3>
                </div>  
                <div class="flex-grow border-b border-white border-dashed"></div>
                <p class="">pencidesign@gmail.com</p>
              </div>
              <div class="text-white flex justify-between items-center space-x-4">
                <div class="flex items-center space-x-2">
                  <font-awesome-icon :icon="['fas','phone-alt']" class="text-white"/>
                  <h3 class="text-lg font-bold">Phone Number</h3>
                </div>  
                <div class="flex-grow border-b border-white border-dashed"></div>
                <p class="">+(1800)9388</p>
              </div>
            </div> 
          </div>
        
        </div>
      </div>
      <!-- 中間 -->
      <div class="w-full min-h-[500px] md:flex-1 bg-gray-100 flex items-center justify-center">
        <div class="w-5/6 space-y-4">
          <!-- 標題 -->
          <div class="space-y-4">
            <h3 class="text-sm text-cyan-500 font-black uppercase [letter-spacing:6px]">wedding planner</h3>
            <h2 class="text-2xl font-serif">Opening Hours</h2>
            <p class="leading-relaxed text-gray-600">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor em que, viva la vida penci wed.</p>
          </div>
          <!-- icon -->
          <div class="space-y-3">
            <div class="flex items-center space-x-4">
              <div class="flex items-center space-x-2">
                <font-awesome-icon :icon="['fas','alarm-clock']" class="text-cyan-500" />
                <h3 class="text-lg font-bold text-gray-600">Mon - Friday</h3>
              </div>
              <div class="flex-1 border border-b border-gray-400 border-dashed"></div>
              <p class="text-gray-600">8:00 AM - 9:00 PM</p>
            </div>
             <div class="flex items-center space-x-4">
              <div class="flex items-center space-x-2">
                <font-awesome-icon :icon="['fas','alarm-clock']" class="text-cyan-500" />
                <h3 class="text-lg font-bold text-gray-600">Saturday</h3>
              </div>
              <div class="flex-1 border border-b border-gray-400 border-dashed"></div>
              <p class="text-gray-600">8:00 AM - 9:00 PM</p>
            </div>
             <div class="flex items-center space-x-4">
              <div class="flex items-center space-x-2">
                <font-awesome-icon :icon="['fas','alarm-clock']" class="text-cyan-500" />
                <h3 class="text-lg font-bold text-gray-600">Sunday & Holiday</h3>
              </div>
              <div class="flex-1 border border-b border-gray-400 border-dashed"></div>
              <p class="text-gray-600">8:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 右邊 -->
      <div class="w-full md:flex-1 min-h[500px]">
        <iframe 
          src="https://www.youtube.com/embed/XHOmBV4js_E?si=Jy3ZeWcUGyRm3NgX" 
          allowfullscreen
          class="w-full h-full"
        >
        </iframe>
      </div>
    </div>
  </section>
</template>

<style>
.overlay-container {
  --overlay-opacity:0.6;
}
</style>

