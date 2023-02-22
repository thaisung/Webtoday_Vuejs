<template>
    <div class=" grow flex flex-col  py-4 lg:px-6  lg:py-10 ">
        thththt
        <div v-for="h in counter.mn">{{ h }}</div>
        <!-- List Product -->
        <div v-for="(item,index) in counter.fg[0]" class="flex flex-col items-center justify-start">
            <div v-if="$i18n.locale=='vi'" class="flex text-[20px] font-bold mb-2 w-full text-neutral-700 dark:text-neutral-200"><h1>{{ index+1 }}</h1><h1>.</h1><h1>{{ item.Title }}</h1></div>
            <div v-if="$i18n.locale=='en'" class="flex text-[20px] font-bold mb-2 w-full text-neutral-700 dark:text-neutral-200"><h1>{{ index+1 }}</h1><h1>.</h1><h1>{{ item.Title_English }}</h1></div>
            <div class="flex w-full h-full relative justify-center ">
                <div class="flex flex-col absolute top-0 left-0 right-0 bottom-5  mx-auto justify-end ">
                    <div class="flex gap-2 justify-center ">
                        <div v-for="j in item.Product_Industry" class=" bg-gray-100 w-[15px] h-[5px] rounded " v-bind:class="{'opacity-100':j==item.Product_Industry[item.Oder_Image],'opacity-50':j!=item.Product_Industry[item.Oder_Image]}"></div>
                    </div>
                </div>
                <font-awesome-icon icon="fa-solid fa-chevron-left" class="text-[25px] cursor-pointer absolute top-0 bottom-0 left-2 my-auto bg-white px-1 py-1 rounded opacity-50 hover:opacity-80 text-gray-900" v-on:click="if(item.Oder_Image>0){item.Oder_Image--};"/>
                <font-awesome-icon icon="fa-solid fa-chevron-right" class="text-[25px] cursor-pointer  absolute top-0 bottom-0 right-2 my-auto bg-white px-1 py-1 rounded opacity-50 hover:opacity-80 text-gray-900" v-on:click="if(item.Oder_Image<(item.Product_Industry.length-1)){item.Oder_Image++};"/>
                <img v-for="k in item.Product_Industry" v-bind:src="counter.domain_Backend+k.Image" v-show="k==item.Product_Industry[item.Oder_Image]" class="rounded"/> 
            </div>
            <textarea  :rows="item.Information.split('\r\n').length" v-if="counter.Table_Informations==true && $i18n.locale=='vi'" class="pointer-events-none shrink-0 grow w-full mt-3 outline-none border border-neutral-200 dark:border-neutral-700 bg-transparent px-2 py-2 rounded text-neutral-800 dark:text-neutral-300 font-normal">{{ item.Information }}</textarea>
            <textarea  :rows="item.Information.split('\r\n').length" v-if="counter.Table_Informations==true && $i18n.locale=='en'" class="pointer-events-none shrink-0 grow w-full mt-3 outline-none border border-neutral-200 dark:border-neutral-700 bg-transparent px-2 py-2 rounded text-neutral-800 dark:text-neutral-300 font-normal">{{ item.Information_English }}</textarea>
            <div class="flex gap-3 mt-5 text-neutral-900 dark:text-neutral-300"><a href="http://webtoday.store" target="_blank" ><button class="bg-cyan-600 px-3 py-1 rounded font-semibold">{{ $t('Body.Home.Button_Image.Demo') }}</button></a><button v-on:click="counter.Table_Informations=!counter.Table_Informations" class="bg-cyan-600 px-3 py-1 rounded font-semibold"><h1 v-if="counter.Table_Informations==false">{{ $t('Body.Home.Button_Image.Information') }}</h1><h1 v-if="counter.Table_Informations==true">{{ $t('Body.Home.Button_Image.Hide_Information') }}</h1></button><button class="bg-cyan-600 px-3 py-1 rounded font-semibold">{{ $t('Body.Home.Button_Image.Contact') }}</button></div>
        </div>
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
    mounted:function(){
        this.counter.F_Data_List_Product();
    }
    }
</script>


