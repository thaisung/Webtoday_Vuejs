<template>
    <!-- Button Menu < lg -->
    <div class="flex justify-start items-center w-full gap-3 bg-white dark:bg-neutral-900">
        <font-awesome-icon icon="fa-solid fa-bars-staggered " class="flex lg:hidden text-[18px] cursor-pointer text-neutral-800 dark:text-neutral-200" v-on:click="counter.Table_Sidebar=2;counter.Table_Nav=1; add(); scrollBehavior();" v-show="counter.Table_Sidebar==1"/>
        <font-awesome-icon icon="fa-solid fa-xmark" class="flex lg:hidden text-[22px] cursor-pointer text-neutral-800 dark:text-neutral-200" v-on:click="counter.Table_Sidebar=1; remove();" v-show="counter.Table_Sidebar==2"/>
        <h1 class="text-neutral-400 dark:text-neutral-500">{{ $t('HeaDer.Tab.Menu') }}</h1>
    </div>
    <!-- Table Tab product < lg -->
    <div class=" flex flex-col lg:hidden justify-evenly items-center rounded px-3 py-3  fixed z-40 left-0 right-0 bottom-0 top-[110px] bg-white dark:bg-neutral-900  font-semibold gap-4 text-neutral-500 dark:text-neutral-400 " v-if="counter.Table_Sidebar==2">
        <router-link to="/Product/SellAccounts" class=" hover:text-neutral-900 dark:hover:text-neutral-200" v-bind:class="{'text-cyan-600':counter.Path_Route.path==counter.Link_Path_Route.Web_Template.Sell_Accounts}" v-on:click="counter.Table_Sidebar=1; remove();">{{ $t('Body.Tab.Sell_Accounts') }}</router-link>
        <router-link to="/Product/ConstructionIndustry" class=" hover:text-neutral-900 dark:hover:text-neutral-200" v-bind:class="{'text-cyan-600':counter.Path_Route.path==counter.Link_Path_Route.Web_Template.Construction_Industry}" v-on:click="counter.Table_Sidebar=1; remove();">{{ $t('Body.Tab.Construction_Industry') }}</router-link>
        <router-link to="/Product/CosmeticsIndustry" class="  hover:text-neutral-900 dark:hover:text-neutral-200" v-bind:class="{'text-cyan-600':counter.Path_Route.path==counter.Link_Path_Route.Web_Template.Cosmetics_Industry}" v-on:click="counter.Table_Sidebar=1; remove();">{{ $t('Body.Tab.Cosmetics_Industry') }}</router-link>
        <router-link to="/Product/FashionIndustry" class=" hover:text-neutral-900 dark:hover:text-neutral-200" v-bind:class="{'text-cyan-600':counter.Path_Route.path==counter.Link_Path_Route.Web_Template.Fashion_Industry}" v-on:click="counter.Table_Sidebar=1; remove();">{{ $t('Body.Tab.Fashion_Industry') }}</router-link>
        <router-link to="/Product/ElectronicIndustry" class=" hover:text-neutral-900 dark:hover:text-neutral-200" v-bind:class="{'text-cyan-600':counter.Path_Route.path==counter.Link_Path_Route.Web_Template.Electronic_Industry}" v-on:click="counter.Table_Sidebar=1; remove();">{{ $t('Body.Tab.Electronic_Industry') }}</router-link>
        <router-link to="/Product/FoodIndustry" class=" hover:text-neutral-900 dark:hover:text-neutral-200" v-bind:class="{'text-cyan-600':counter.Path_Route.path==counter.Link_Path_Route.Web_Template.Food_Industry}" v-on:click="counter.Table_Sidebar=1; remove();">{{ $t('Body.Tab.Food_Industry') }}</router-link>
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
    methods:{
        add() {document.body.classList.add('overflow-hidden')},
        remove() {document.body.classList.remove('overflow-hidden')},
        scrollBehavior(){window.scrollTo(0,0);},
    },
    }
</script>