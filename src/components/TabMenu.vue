<template>
    <!-- Button Menu < lg -->
    <div class="flex justify-start items-center w-full gap-3 bg-white dark:bg-neutral-900">
        <font-awesome-icon icon="fa-solid fa-bars-staggered " class="flex lg:hidden text-[18px] cursor-pointer text-neutral-800 dark:text-neutral-200" v-on:click="counter.Table_Sidebar=2;counter.Table_Nav=1" v-show="counter.Table_Sidebar==1"/>
        <font-awesome-icon icon="fa-solid fa-xmark" class="flex lg:hidden text-[22px] cursor-pointer text-neutral-800 dark:text-neutral-200" v-on:click="counter.Table_Sidebar=1" v-show="counter.Table_Sidebar==2"/>
        <h1 class="text-neutral-400 dark:text-neutral-500">{{ $t('HeaDer.Tab.Menu') }}</h1>
    </div>
    <!-- Table Tab product < lg -->
    <div class=" flex flex-col lg:hidden justify-center items-center rounded px-3 py-3  fixed z-40 left-[15px] top-[110px] bg-white dark:bg-neutral-900  font-semibold gap-4 text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700" v-if="counter.Table_Sidebar==2">
        <router-link to="/Product/SellAccounts" class=" hover:text-neutral-900 dark:hover:text-neutral-200" v-bind:class="{'text-cyan-600':counter.Path_Route.path==counter.Link_Path_Route.Web_Template.Sell_Accounts}" v-on:click="counter.Table_Sidebar=1">{{ $t('Body.Tab.Sell_Accounts') }}</router-link>
        <router-link to="/Product/ConstructionIndustry" class=" hover:text-neutral-900 dark:hover:text-neutral-200" v-bind:class="{'text-cyan-600':counter.Path_Route.path==counter.Link_Path_Route.Web_Template.Construction_Industry}" v-on:click="counter.Table_Sidebar=1">{{ $t('Body.Tab.Construction_Industry') }}</router-link>
        <router-link to="/Product/CosmeticsIndustry" class="  hover:text-neutral-900 dark:hover:text-neutral-200" v-bind:class="{'text-cyan-600':counter.Path_Route.path==counter.Link_Path_Route.Web_Template.Cosmetics_Industry}" v-on:click="counter.Table_Sidebar=1">{{ $t('Body.Tab.Cosmetics_Industry') }}</router-link>
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
    }
</script>