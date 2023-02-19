<template>
    <div class="flex flex-col min-h-screen min-w-screen bg-white dark:bg-neutral-900 relative" >
        <div class="px-6 2xl:px-[70px] border-b border-neutral-200 dark:border-neutral-700 fixed top-0 left-0 right-0 z-40">
            <hea-der />
        </div>
        <div class=" flex lg:hidden px-6 py-4 2xl:px-[70px] border-b border-neutral-200 dark:border-neutral-700 fixed top-[65px] left-0 right-0 z-30 bg-white">
            <tab-menu />
        </div>
        <div class="flex flex-col lg:flex-row justify-between px-6 2xl:px-[70px] min-h-[500px] mt-[110px] lg:mt-[40px] " >
            <tab-product class=" border-r border-neutral-200 dark:border-neutral-700 w-[175px] h-screen" />
            <router-view class="grow flex-col justify-start items-center lg:mx-[175px] border-b border-neutral-200 dark:border-neutral-700"/>
            <pos-ter class=" border-l border-neutral-200 dark:border-neutral-700 w-[175px] h-screen"/>
        </div>
        <div class="">
            <foo-ter />
        </div>
    </div>
</template>
  

  <script>
  // Import thành phần (components) NavBar, SideBar, FooterBar để sử dụng
  import HeaDer from '@/components/HeaDer.vue'
  import TabProduct from '@/components/TabProduct.vue'
  import FooTer from '@/components/FooTer.vue'
  import PosTer from '@/components/PosTer.vue'
  import TabMenu from '@/components/TabMenu.vue'

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
      TabProduct,
      FooTer,
      PosTer,
      TabMenu,
    }
  }
  </script>
  
  
  