<template>
    <div class="flex flex-col min-h-screen min-w-screen bg-white dark:bg-neutral-900 relative" >
        <div class="px-6 2xl:px-[70px] border-b border-neutral-200 dark:border-neutral-700 fixed top-0 left-0 right-0 z-40 ">
            <hea-der />
        </div>
        <div class="flex flex-col  px-6 2xl:px-[70px] min-h-[500px] items-center" >
            <router-view />
        </div>
        <div class="px-6 2xl:px-[70px] border-t border-neutral-200 dark:border-neutral-700 ">
            <foo-ter />
        </div>
    </div>
</template>
  

  <script>
  // Import thành phần (components) NavBar, SideBar, FooterBar để sử dụng
  import HeaDer from '@/components/HeaDer.vue'
  import FooTer from '@/components/FooTer.vue'

  import { useCounterStore } from '@/stores/counter';

  
  // Để sử dụng được các thẻ (tag) của các component tương ứng
  // <nav-bar />     -> component NavBar
  // <side-bar />    -> component SideBar
  // <footer-bar />  -> component FooterBar
  // Chúng ta phải khai báo trong thuộc tính `components` của phần export default {}
  export default {
    setup() {
    const counter = useCounterStore();
    return {counter}
  },
    components: {
      HeaDer,
      FooTer,
    }
  }
  </script>
  
  
  