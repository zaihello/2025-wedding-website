<script setup>
import { ref,onMounted,onBeforeUnmount} from 'vue'
// 匯入 Splide 函式庫
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css'

// 取得 DOM 元素
const splideRef = ref(null)

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
const handleScroll = () => {
  if(window.scrollY > 100) {
    isScrolled.value = true
  }else{
    isScrolled.value = false
  }
}


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
  // 滾動事件監聽
  window.addEventListener('scroll',handleScroll)

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

onBeforeUnmount(() => {
  // 元件銷毀前，移除監聽
  window.removeEventListener('scroll',handleScroll)
})

</script>

<template>
<header>
  <nav 
    class="fixed z-50 w-full bg-white "
    :class="{
      'md:bg-transparent md:text-white':!isScrolled,
      'md:bg-white md:text-gray-700 md:shadow-md':isScrolled
    }"
  >
    <!-- 大螢幕選單 -->
    <div class="md:max-w-6xl md:m-auto flex justify-between items-center">
      <!-- 漢堡選單 -->
      <button class="py-5 md:hidden" @click="toggleMenu">
        <font-awesome-icon :icon="['fas','bars']" class="text-gray-700 md:text-white"/>
      </button>
      <ul 
        class="hidden md:flex gap-8"
      >
        <li><a href="" class="inline-block py-5 font-bold hover:text-cyan-500 transition duration-300">Home</a></li>
        <li><a href="" class="inline-block py-5 font-bold hover:text-cyan-500 transition duration-300">Services</a></li>
        <li><a href="" class="inline-block py-5 font-bold hover:text-cyan-500 transition duration-300">About Us</a></li>
      </ul>

      <a href="" class="hidden md:block">
        <img src="https://demosoledad.pencidesign.net/soledad-wedding-planner-multipurpose/wp-content/uploads/sites/36/2019/11/logo-t.png" alt="Wedding logo" class="w-28 h-14 ">
      </a>

      <ul class="hidden md:flex gap-8"
      >
        <li><a href="" class="inline-block py-5 font-bold hover:text-cyan-500 transitionn duration-300">Contant Us</a></li>
        <li><a href="" class="inline-block py-5 font-bold hover:text-cyan-500 transitionn duration-300">Our Blog</a></li>
        <li><a href="" class="inline-block py-5">
          <font-awesome-icon 
            :icon="['fas','magnifying-glass']" 
            :class="{
              'text-gray-700 md:text-white':!isScrolled,
              'md:text-gray-700':isScrolled
            }"
            
          /></a>
        </li>
      </ul>

      <a href="" class="py-5 md:hidden">
        <font-awesome-icon :icon="['fas','magnifying-glass']" class="text-gray-700 md:text-white"/>
      </a>
    </div>
    <!-- 小螢幕選單 -->
    <!-- 遮罩 -->
    <transition name="fade">
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" 
      >
      </div> 
    </transition>
    <!-- 選單框-->
    <transition name="slide">
    <div
      v-if="isMenuOpen"
      class="fixed z-50 top-0 left-0 w-72 h-full bg-white overflow-auto md:hidden"   
    >
      <div class="relative p-5">
        <!-- 標題 -->
        <div class="flex flex-col items-center py-10">
          <div @click="toggleMenu" class="absolute top-0 right-0 p-2">
            <font-awesome-icon 
              :icon="['fas','xmark']" 
              class=" hover:scale-150 transition duration-300 cursor-pointer"
            />
          </div>
          <a href="" class="mb-5">
            <img src="https://demosoledad.pencidesign.net/soledad-wedding-planner-multipurpose/wp-content/uploads/sites/36/2019/11/logo.png" alt="Wedding logo" class="w-52 h-14 m-auto ">
          </a>  
          <div class="border border-cyan-200 w-1/5 m-auto"></div>
         
          <ul class="text-center mt-4 flex">
            <li><a href=""><font-awesome-icon :icon="['fab','facebook-f']" class="px-2 hover:text-cyan-500 transition duration-300"/></a></li>
            <li><a href=""><font-awesome-icon :icon="['fab','x-twitter']" class="px-2 hover:text-cyan-500 transition duration-300" /></a></li>
            <li><a href=""><font-awesome-icon :icon="['fab','instagram']" class="px-2 hover:text-cyan-500 transition duration-300" /></a></li>
            <li><a href=""><font-awesome-icon :icon="['fab','youtube']" class="px-2 hover:text-cyan-500 transition duration-300" /></a></li>
          </ul> 
        </div>
        <!-- 選單 -->
        <nav class="flex flex-col">
          <a href="" class="font-bold  border-b border-gray-200 py-2 hover:text-cyan-500 transition duration-300">HOME</a>
          <a href="" class="font-bold  border-b border-gray-200 py-2 hover:text-cyan-500 transition duration-300">SERVICES</a>
          <a href="" class="font-bold  border-b border-gray-200 py-2 hover:text-cyan-500 transition duration-300">ABOUT US</a>
          <a href="" class="font-bold  border-b border-gray-200 py-2 hover:text-cyan-500 transition duration-300">CONTACT US</a>
          <a href="" class="font-bold py-2 hover:text-cyan-500 transition duration-300">OUR BLOG</a>
        </nav>
      </div>
    </div>
    </transition>
  </nav>
  <!-- hero --> 
  <section>
    <div
      class="relative overlay-container"
      style="--overlay-opacity:0.4;"
    >
      <img 
        src="https://picsum.photos/id/30/1920/1080"
        alt=""
        class="min-h-[500px] md:h-[80vh] w-full object-cover"
      >
     <!-- 內容 -->
      <div 
        class="w-full h-full absolute inset-0 flex flex-col justify-center items-center text-white text-center border"
      >
        <h3 class="text-sm uppercase [letter-spacing:6px]">dedicated services</h3>
        <h1 class="font-cursive text-7xl pt-6 pb-12">For Happy Couples</h1>
        <button 
          class="inline-block bg-cyan-500 text-white hover:bg-gray-100 hover:text-cyan-500 font-bold py-4 px-10 rounded-full transition duration-300"
        > 
          Discover More
        </button>
      </div>
    
      <div 
        class="w-16 h-16 bg-cyan-500 group hover:bg-gray-100 transition duration-300 rounded-full absolute left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center"
      >
        <font-awesome-icon 
          :icon="['fas','arrow-down']" 
          class="text-white group-hover:text-cyan-500 font-bold text-lg"
        >
        </font-awesome-icon>
      </div>
    </div>
  </section>   
</header>  
<main>
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
        <h2 class="font-cursive text-4xl">Wedding & Events</h2>
        <p class="text-gray-700 leading-relaxed text-left">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor em que laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae, penci.
        </p>
        <button class="inline-block bg-cyan-500 text-white hover:bg-gray-100 hover:text-cyan-500 font-bold
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
        <h2 class="font-cursive text-5xl">Wedding Services</h2>
        <p class="text-gray-700 leading-relaxed w-full md:w-3/5 lg:w-1/3 mx-auto">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor em que, viva la vida penci wed.</p>
    </div>
    <!-- 卡片 -->
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        <!-- 第一張 -->
        <div class="pb-24">
          <div class="relative">
              <img src="https://demosoledad.pencidesign.net/soledad-wedding-planner-multipurpose/wp-content/uploads/sites/36/2019/11/11-1024x683.jpg" alt="Wedding Planning"
                 class="w-full h-[450px] md:h-[550px] object-cover"    
              >
              <!-- 原版 -->
              <div class="absolute w-4/5 shadow-lg bg-white p-6 text-center
                        bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"                             
              >
                  <h2 class="font-cursive text-4xl">Wedding Planning</h2>
                  <p class="text-gray-700 leading-relaxed">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxi.</p>
              </div>
            
          </div>
        </div>
        <!-- 第二張 -->
        <div class=" pb-24">
          <div class="relative">
            <img src="https://demosoledad.pencidesign.net/soledad-wedding-planner-multipurpose/wp-content/uploads/sites/36/2019/11/12-1024x683.jpg" alt=""
            class="w-full h-[450px] md:h-[550px] object-cover"
            >
            <div class="absolute w-4/5 shadow-lg bg-white p-6 text-center
                        bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 "
            >
                <h2 class="font-cursive text-4xl">Decoration Service</h2>
                <p class="text-gray-700 leading-relaxed">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxi.</p>
            </div>
          </div>
        </div>
    </div>
    <!-- </div> -->
  </section>
  <!-- 顧客感言 -->
  <section class="py-24 bg-white">
      <div class="text-center space-y-3">
          <h3 class="text-sm font-black text-cyan-500 uppercase [letter-spacing:6px]">wedding planner</h3>
          <h2 class="font-cursive text-5xl">What Customers Say</h2>
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
  <!-- Grid圖片組合 -->
  <section id="grid-img" class="relative">
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
            <h2 class="font-cursive text-5xl">Elegant Wedding</h2>
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
  <section id="blog" class="relative py-24">
    <div class="max-w-6xl mx-auto space-y-9">
      <!-- 標題 -->
      <div class="text-center space-y-3">
        <h3 class="text-sm font-black text-cyan-500 uppercase [letter-spacing:6px]">wedding planner</h3>
        <h2 class="font-cursive text-5xl">Our Wedding Blog</h2>
        <p class="text-gray-700 leading-relaxed md:w-1/2 w-4/5 mx-auto">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor em que, viva la vida penci wed.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <article v-for="blogPost in blogPosts" :key="blogPost.id" class="space-y-2">
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
        </article>
      </div>
    </div>
  </section>
  <!-- send us -->
  <section>
    <div class="flex flex-col md:flex-row h-full" >
      <!-- 左邊 -->
      <div class=" w-full md:flex-1">
        <div class="relative min-h-[500px] overlay-container">
          <img src="https://demosoledad.pencidesign.net/soledad-wedding-planner-multipurpose/wp-content/uploads/sites/36/2019/11/7-1170x780.jpg" alt="send us"class="absolute inset-0 w-full h-full object-cover">
          <!--  -->
          <div class="w-5/6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white space-y-4">
            <!-- 標題 -->
            <div class="space-y-4"> 
              <h3 class="text-sm font-black uppercase [letter-spacing:6px]">send us</h3>
              <h2 class="font-cursive text-5xl">Contact Info</h2>
              <p class="leading-relaxed text-left">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor em que, viva la vida penci wed.</p>
            </div>
            <!-- icon -->
            <address class="not-italic space-y-3">
              <!-- < class=""> -->
              <div class="text-white flex items-center space-x-4 flex-wrap">
                <div class="flex items-center space-x-2">
                  <!-- fas 是 solid 風格 -->
                  <font-awesome-icon :icon="['fas','map-pin']" class="text-white"/>
                  <h3 class="text-lg font-bold">Address</h3>
                </div>  
                <div class="flex-grow border-b border-white border-dashed"></div>
                <p class="">Central Park, NYC</p>
              </div>
              <div class="text-white flex items-center space-x-4 flex-wrap">
                <div class="flex items-center space-x-2">
                  <font-awesome-icon :icon="['fas','envelope']" class="text-white"/>
                  <h3 class="text-lg font-bold">Email Address</h3>
                </div>  
                <div class="flex-grow border-b border-white border-dashed"></div>
                <p class="">pencidesign@gmail.com</p>
              </div>
              <div class="text-white flex items-center space-x-4 flex-wrap">
                <div class="flex items-center space-x-2">
                  <font-awesome-icon :icon="['fas','phone-alt']" class="text-white"/>
                  <h3 class="text-lg font-bold">Phone Number</h3>
                </div>  
                <div class="flex-grow border-b border-white border-dashed"></div>
                <p class="">+(1800)9388</p>
              </div>
              <!-- </> -->
            </address> 
          </div>
        
        </div>
      </div>
      <!-- 中間 -->
      <div class="w-full min-h-[500px] md:flex-1 bg-gray-100 flex items-center justify-center">
        <div class="w-5/6 space-y-4">
          <!-- 標題 -->
          <div class="space-y-4">
            <h3 class="text-sm text-cyan-500 font-black uppercase [letter-spacing:6px]">wedding planner</h3>
            <h2 class="font-cursive text-5xl">Opening Hours</h2>
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
              <p class="text-gray-600">
                <time datetime="08:00">8:00 AM </time> - <time datetime="21:00">9:00 PM</time> 
              </p>
            </div>
             <div class="flex items-center space-x-4">
              <div class="flex items-center space-x-2">
                <font-awesome-icon :icon="['fas','alarm-clock']" class="text-cyan-500" />
                <h3 class="text-lg font-bold text-gray-600">Saturday</h3>
              </div>
              <div class="flex-1 border border-b border-gray-400 border-dashed"></div>
              <p class="text-gray-600">
                <time datetime="08:00">8:00 AM</time> - <time datetime="21:00">9:00 PM</time>
              </p>
            </div>
             <div class="flex items-center space-x-4">
              <div class="flex items-center space-x-2">
                <font-awesome-icon :icon="['fas','alarm-clock']" class="text-cyan-500" />
                <h3 class="text-lg font-bold text-gray-600">Sunday & Holiday</h3>
              </div>
              <div class="flex-1 border border-b border-gray-400 border-dashed"></div>
              <p class="text-gray-600"> 
                <time datetime="08:00">8:00 AM</time> - <time datetime="21:00">9:00 PM</time>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 右邊 -->
      <div class="w-full md:flex-1">
        <iframe 
          src="https://www.youtube.com/embed/XHOmBV4js_E?si=Jy3ZeWcUGyRm3NgX" 
          allowfullscreen
          class="w-full min-h-[500px]"
        >
        </iframe>
      </div>
    </div>
  </section>
</main>  
<footer>
  <div class="bg-black flex flex-col items-center">
    <ul class="text-center flex gap-4 py-6">
      <li class="group">
        <a href=""><font-awesome-icon :icon="['fab','facebook-f']" class="px-2 text-gray-500 group-hover:text-white transition duration-300"/><span class="text-gray-500 group-hover:text-cyan-500 transition duration-300 hidden md:inline"><b>FACEBOOK</b></span>
        </a>
      </li>
      <li class="group">
        <a href=""><font-awesome-icon :icon="['fab','x-twitter']" class="px-2 text-gray-500 group-hover:text-white transition duration-300" /><span class="text-gray-500 group-hover:text-cyan-500 transition duration-300 hidden md:inline"><b> TWITTER</b></span> 
        </a>
      </li>
      <li class="group">
        <a href=""><font-awesome-icon :icon="['fab','instagram']" class="px-2 text-gray-500 group-hover:text-white transition duration-300" /><span class="text-gray-500 group-hover:text-cyan-500 transition duration-300 hidden md:inline"><b>INSTAGRAM</b></span>
        </a>
      </li>
      <li class="group">
        <a href=""><font-awesome-icon :icon="['fab','youtube']" class="px-2 text-gray-500 group-hover:text-white transition duration-300" /><span class="text-gray-500 group-hover:text-cyan-500 transition duration-300 hidden md:inline"><b> YOUTUBE</b></span>
        </a>
      </li>
    </ul> 
    <hr class="border-solid border-t border-gray-500 opacity-35 w-2/5">
    <div class="py-4">
      <small class="text-gray-500">&copy;<time datetime="2025">2025</time> - All Right Reserved. Designed and Developed by <a href="" class="text-cyan-500 hover:border-b border-cyan-500">PenciDesign</a></small>
    </div>
  </div>
</footer>  
</template>

<style scoped>
/* 側邊選單的過渡 */
.slide-enter-active,
.slide-leave-active {
  transition:transform 0.5s ease-in-out 
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

/* 遮罩的過渡 */
.fade-enter-active,
.fade-leave-active {
  transition:opacity 0.3s ease-in-out 
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

#blog::before {
  content:"";
  position:absolute;
  top:0;
  left:0;
  width: 100%;
  height: 50%;
  background-color: #f3f4f6;
  z-index:-1;
}

#grid-img::before {
  content:"";
  position:absolute;
  bottom:0;
  left:0;
  width:100%;
  height:80%;
  background-color:#f3f4f6;
  z-index: -1;
} 

</style>

