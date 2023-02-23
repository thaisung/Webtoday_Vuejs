<template>
    <div class=" flex  bg-white dark:bg-neutral-900 items-center  justify-between h-[65px] relative ">
        <router-link to="/" class="flex items-center gap-2 " v-on:click="counter.Show_Search=1;">
            <!-- <img alt="Image Logo" src="https://images.assetsdelivery.com/compings_v2/marsono/marsono1806/marsono180600093.jpg" class="w-[100px]"/> -->
            <img src="./flag/logow.png" class="text-[30px] text-cyan-600 w-[50px]"/>
            <h1 class="font-bold text-neutral-800 dark:text-neutral-200 text-[25px]">WEBTODAY</h1>
        </router-link>
        <div class="flex">
            <!-- screen > md-->
            <div class="hidden lg:flex gap-2 items-center ">
                <div class="flex font-semibold h-[65px] dark:text-neutral-200 cursor-pointer">
                    <router-link to="/" v-on:click="counter.Show_Search=1; remove();" class="px-3 h-[65px] flex items-center justify-center hover:text-cyan-600  hover:border-cyan-600 hover:border-b" v-bind:class="{'text-cyan-600 border-b border-cyan-600':counter.Path_Route.path==counter.Link_Path_Route.Home}">{{ $t('HeaDer.Tab.Home') }}</router-link>
                    <router-link to="/Product" v-on:click="remove();" class="px-3 h-[65px] flex items-center justify-center  hover:text-cyan-600  hover:border-cyan-600 hover:border-b" v-bind:class="{'text-cyan-600 border-b border-cyan-600':counter.Path_Route.path==counter.Link_Path_Route.Web_Template.Sell_Accounts || counter.Path_Route.path==counter.Link_Path_Route.Web_Template.Construction_Industry || counter.Path_Route.path==counter.Link_Path_Route.Web_Template.Cosmetics_Industry}">{{ $t('HeaDer.Tab.Product') }}</router-link>
                    <router-link to="/Introduce" v-on:click="remove();" class="px-3 h-[65px] flex items-center justify-center hover:text-cyan-600  hover:border-cyan-600 hover:border-b" v-bind:class="{'text-cyan-600 border-b border-cyan-600':counter.Path_Route.path==counter.Link_Path_Route.Introduce}">{{ $t('HeaDer.Tab.Introduce') }}</router-link>
                    <router-link to="/Contact" v-on:click="remove();" class="px-3 h-[65px] flex items-center justify-center hover:text-cyan-600  hover:border-cyan-600 hover:border-b" v-bind:class="{'text-cyan-600 border-b border-cyan-600':counter.Path_Route.path==counter.Link_Path_Route.Contact}">{{ $t('HeaDer.Tab.Contact') }}</router-link>
                </div>
                <div class="flex items-center  rounded-full  bg-white gap-1 h-[40px] px-3 border border-gray-300 dark:bg-neutral-900 dark:border-neutral-700">
                    <input type="text" :placeholder="$t('HeaDer.Input')" v-model="counter.Search" class="outline-none font-medium dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200"/>
                    <font-awesome-icon icon="fa-solid fa-xmark" v-show="counter.Search.length > 0" v-on:click="counter.Search=''" class="text-neutral-500 dark:text-neutral-200 text-[18px] cursor-pointer"/>
                    <router-link to="/" v-on:click="counter.F_Search(); counter.Show_Search=2; " class="px-2 border-l border-neutral-200 dark:border-neutral-700"><font-awesome-icon icon="fa-solid fa-magnifying-glass" class="text-neutral-400 dark:text-neutral-500 text-[18px]  "/></router-link>
                </div>
                <div class="flex justify-center items-center rounded-lg w-[60px] bg-white dark:bg-neutral-900 h-[40px]  cursor-pointer  " v-on:click="counter.Table_Language=!counter.Table_Language">
                    <img :src="counter.Image_Language" class="w-[35px] rounded" />
                </div>
                <div class="flex  rounded-full bg-white dark:bg-neutral-900  h-[40px] w-[40px] px-2 justify-center items-center cursor-pointer border border-gray-300 dark:border-neutral-700" v-on:click="counter.Dark=!counter.Dark; counter.F_Open_Dark();">
                    <font-awesome-icon icon="fa-regular fa-moon"  class="text-[20px] text-neutral-600 dark:text-neutral-300" v-if="counter.Dark==false" />
                    <font-awesome-icon icon="fa-regular fa-sun"   class="text-[20px] text-neutral-600 dark:text-neutral-300" v-if="counter.Dark==true" />
                </div>
            </div>
            <!-- screen < md -->
            <div v-if="counter.Table_Nav==2" class="flex flex-col lg:hidden drop-shadow-md gap-2 items-center fixed z-10  py-4  right-0 bottom-0 left-0 top-[66px]  bg-white dark:bg-neutral-900">
                <div class="flex flex-col md:flex-row items-center justify-center gap-3 border-b border-neutral-200 dark:border-neutral-700 pt-3 pb-5 w-full">
                    <div class="flex items-center justify-center  rounded-full  bg-white gap-1 h-[40px] px-3 border border-gray-300 dark:bg-neutral-900 dark:border-neutral-700">
                        <input type="text" :placeholder="$t('HeaDer.Input')" v-model="counter.Search" class="outline-none font-medium dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200"/>
                        <font-awesome-icon icon="fa-solid fa-xmark" v-show="counter.Search.length > 0" v-on:click="counter.Search=''" class="text-neutral-500 dark:text-neutral-200 text-[18px] cursor-pointer"/>
                        <router-link to="/" v-on:click="counter.F_Search(); counter.Show_Search=2; counter.Table_Nav=1; counter.Table_Language_sm=false" class="px-2 border-l border-neutral-200 dark:border-neutral-700"><font-awesome-icon icon="fa-solid fa-magnifying-glass" class="text-neutral-400 dark:text-neutral-500 text-[18px]  "/></router-link>
                    </div>
                    <div class="flex gap-2 justify-center items-center">
                        <div class="flex justify-center items-center rounded-full w-[60px] bg-white dark:bg-neutral-900 h-[40px]  cursor-pointer " v-on:click="counter.Table_Language_sm=!counter.Table_Language_sm">
                            <img :src="counter.Image_Language" class="w-[35px] rounded" v-on:click="if($i18n.locale=='vi'){$i18n.locale='en'; counter.Image_Language='/assets/gb-51a8613a.svg';  counter.Text_Array=['Facebook','Zalo','Call'];}else{$i18n.locale='vi'; counter.Image_Language='/assets/vn-2ac15179.svg';  counter.Text_Array=['Facebook','Zalo','Gọi điện'];};" />
                        </div>
                        <div class="flex  rounded-full bg-white dark:bg-neutral-900  h-[40px] w-[40px] px-2 justify-center items-center cursor-pointer border border-gray-300 dark:border-neutral-700" v-on:click="counter.Dark=!counter.Dark; counter.F_Open_Dark();">
                            <font-awesome-icon icon="fa-regular fa-moon"  class="text-[20px] text-neutral-600 dark:text-neutral-300" v-if="counter.Dark==false" />
                            <font-awesome-icon icon="fa-regular fa-sun"   class="text-[20px] text-neutral-600 dark:text-neutral-300" v-if="counter.Dark==true" />
                        </div>
                    </div>
                </div>
                <div class="flex flex-col font-semibold dark:text-neutral-200 cursor-pointer grow justify-evenly">
                    <router-link to="/" class="px-3 h-[65px] flex items-center justify-center hover:text-cyan-600  hover:border-cyan-600 hover:border-b" v-bind:class="{'text-cyan-600 border-b border-cyan-600':counter.Path_Route.path==counter.Link_Path_Route.Home}" v-on:click="counter.Table_Nav=1; counter.Show_Search=1; remove(); ">{{ $t('HeaDer.Tab.Home') }}</router-link>
                    <router-link to="/Product" class="px-3 h-[65px] flex items-center justify-center  hover:text-cyan-600  hover:border-cyan-600 hover:border-b" v-bind:class="{'text-cyan-600 border-b border-cyan-600':counter.Path_Route.path==counter.Link_Path_Route.Web_Template.Sell_Accounts || counter.Path_Route.path==counter.Link_Path_Route.Web_Template.Construction_Industry || counter.Path_Route.path==counter.Link_Path_Route.Web_Template.Cosmetics_Industry}" v-on:click="counter.Table_Nav=1;remove();">{{ $t('HeaDer.Tab.Product') }}</router-link>
                    <router-link to="/Introduce" class="px-3 h-[65px] flex items-center justify-center hover:text-cyan-600  hover:border-cyan-600 hover:border-b" v-bind:class="{'text-cyan-600 border-b border-cyan-600':counter.Path_Route.path==counter.Link_Path_Route.Introduce}" v-on:click="counter.Table_Nav=1; remove();">{{ $t('HeaDer.Tab.Introduce') }}</router-link>
                    <router-link to="/Contact" class="px-3 h-[65px] flex items-center justify-center hover:text-cyan-600  hover:border-cyan-600 hover:border-b" v-bind:class="{'text-cyan-600 border-b border-cyan-600':counter.Path_Route.path==counter.Link_Path_Route.Contact}" v-on:click="counter.Table_Nav=1; remove();">{{ $t('HeaDer.Tab.Contact') }}</router-link>
                </div>
            </div>
            <!-- button menu when screen < md -->
            <font-awesome-icon icon="fa-solid fa-bars-staggered" class="flex cursor-pointer lg:hidden text-[22px] text-neutral-800 dark:text-neutral-200" v-on:click="counter.Table_Nav=2; counter.Table_Sidebar=1; add(); scrollBehavior();" v-show="counter.Table_Nav==1"/>
            <font-awesome-icon icon="fa-solid fa-xmark" class="flex lg:hidden cursor-pointer text-[26px] text-neutral-800 dark:text-neutral-200" v-on:click="counter.Table_Nav=1; counter.Table_Language_sm=false; counter.Open_Scroll=2; remove();" v-show="counter.Table_Nav==2"/>
        </div>
    </div>

    <!-- Types of bosrds -->
    <!-- > lg -->
    <div class="hidden lg:flex lg:flex-col items-center justify-center gap-4 px-3 py-4  bg-white dark:bg-neutral-900 border border-gray-300 dark:border-neutral-700 drop-shadow-md absolute z-50  lg:right-[72px] lg:top-[53px] 2xl:right-[118px] 2xl:top-[53px] rounded  cursor-pointer " v-show="counter.Table_Language==true">
        <img src="./flag/vn.svg" class="w-[36px] rounded" v-on:click="$i18n.locale='vi'; counter.Image_Language='/assets/vn-2ac15179.svg'; counter.Table_Language=!counter.Table_Language; counter.Text_Array=['Facebook','Zalo','Gọi điện'];"/>
        <img src="./flag/gb.svg" class="w-[35px] rounded"  v-on:click="$i18n.locale='en'; counter.Image_Language='/assets/gb-51a8613a.svg'; counter.Table_Language=!counter.Table_Language; counter.Text_Array=['Facebook','Zalo','Call'];"/>
    </div>
</template>

<script>
    import { useCounterStore } from '@/stores/counter';
    import axios from 'axios';
    import VueCookies from 'vue-cookies'
    

    export default {

    setup() {
        const counter = useCounterStore();
        return {counter}
    },
    // destroyed () {
    // document.body.classList.remove('overflow-hidden')
    // },
    methods:{
        add() {document.body.classList.add('overflow-hidden')},
        remove() {document.body.classList.remove('overflow-hidden')},
        scrollBehavior(){window.scrollTo(0,0);},
    }
    }
</script>

<!-- <style v-if="counter.Open_Scroll==2">
  body {
   overflow: default;
  }
</style> -->

<!-- <style v-if="true">
  body {
   overflow: hidden;
  }
</style> -->