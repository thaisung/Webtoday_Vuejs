<template>
  <div class=" border-r fixed inset-0 ml-6 mt-[65px] 2xl:ml-[70px]  bg-white dark:bg-neutral-900 pr-5 hidden lg:flex lg:flex-col font-semibold gap-4 text-neutral-500 dark:text-neutral-400">
    <router-link to="/Product/SellAccounts" class="mt-4 hover:text-neutral-900 dark:hover:text-neutral-200" v-bind:class="{'text-cyan-600':counter.Path_Route.path==counter.Link_Path_Route.Web_Template.Sell_Accounts}">{{ $t('Body.Tab.Sell_Accounts') }}</router-link>
    <router-link to="/Product/ConstructionIndustry" class=" hover:text-neutral-900 dark:hover:text-neutral-200" v-bind:class="{'text-cyan-600':counter.Path_Route.path==counter.Link_Path_Route.Web_Template.Construction_Industry}">{{ $t('Body.Tab.Construction_Industry') }}</router-link>
    <router-link to="/Product/CosmeticsIndustry" class=" hover:text-neutral-900 dark:hover:text-neutral-200" v-bind:class="{'text-cyan-600':counter.Path_Route.path==counter.Link_Path_Route.Web_Template.Cosmetics_Industry}">{{ $t('Body.Tab.Cosmetics_Industry') }}</router-link>
    <router-link to="/Product/FashionIndustry" class=" hover:text-neutral-900 dark:hover:text-neutral-200" v-bind:class="{'text-cyan-600':counter.Path_Route.path==counter.Link_Path_Route.Web_Template.Fashion_Industry}">{{ $t('Body.Tab.Fashion_Industry') }}</router-link>
    <router-link to="/Product/ElectronicIndustry" class=" hover:text-neutral-900 dark:hover:text-neutral-200" v-bind:class="{'text-cyan-600':counter.Path_Route.path==counter.Link_Path_Route.Web_Template.Electronic_Industry}">{{ $t('Body.Tab.Electronic_Industry') }}</router-link>
    <router-link to="/Product/FoodIndustry" class=" hover:text-neutral-900 dark:hover:text-neutral-200" v-bind:class="{'text-cyan-600':counter.Path_Route.path==counter.Link_Path_Route.Web_Template.Food_Industry}">{{ $t('Body.Tab.Food_Industry') }}</router-link>
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