<!-- <template>
    <div v-if="counter.Loading==1"  class="grow flex z-30   py-10 lg:px-6  lg:py-10  max-w-[1100px] my-[40px] text-neutral-800 dark:text-neutral-200 gap-5 justify-center items-center"><hollow-dots-spinner :animation-duration="1000" :dot-size="15" :dots-num="3" :color="'#0891b2'"/></div>
    <div v-if="counter.Show_Search==2 &&counter.Search_ListProduct_Today1.length == 0" class=" grow flex flex-col  py-10 lg:px-6  lg:py-10  max-w-[1100px] my-[40px] text-neutral-800 dark:text-neutral-200 gap-5">
        <h1 v-show="$i18n.locale=='vi'" class="text-[25px] font-medium text-cyan-600">Không có kết quả nào được tìm kiếm với từ khóa '{{ counter.Search }}'</h1>
        <h1 v-show="$i18n.locale=='en'" class="text-[25px] font-medium text-cyan-600">No results were found with the keyword '{{ counter.Search }}'</h1>
    </div>
    <div  v-if="counter.Show_Search==2 && counter.Search_ListProduct_Today1.length > 0" class=" grow flex flex-col  py-10 lg:px-6  lg:py-10  max-w-[1100px] my-[40px] text-neutral-800 dark:text-neutral-200 gap-5">
        <h1 v-show="$i18n.locale=='vi'" class="text-[25px] font-medium text-cyan-600">Kết quả tìm kiếm với từ khóa '{{ counter.Search }}' :</h1>
        <h1 v-show="$i18n.locale=='en'" class="text-[25px] font-medium text-cyan-600">Search results with keyword '{{ counter.Search }}' :</h1>
        <div v-for="(item,index) in counter.Search_ListProduct_Today1" class="flex flex-col items-center justify-start">
            <div v-if="$i18n.locale=='vi'" class="flex overflow-x-auto text-[20px] font-bold mb-2 w-full text-neutral-700 dark:text-neutral-200 gap-2"><h1>{{ index+1 }}</h1><h1>.</h1><h1 class="shrink-0">{{ item.Title }}</h1><img src="./image/new.png" class="w-[50px]"/></div>
            <div v-if="$i18n.locale=='en'" class="flex overflow-x-auto text-[20px] font-bold mb-2 w-full text-neutral-700 dark:text-neutral-200 gap-2"><h1>{{ index+1 }}</h1><h1>.</h1><h1 class="shrink-0">{{ item.Title_English }}</h1><img src="./image/new.png" class="w-[50px]"/></div>
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
    <div  v-show="counter.Loading==2 && counter.Show_Search==1" class=" grow flex flex-col  py-10 lg:px-6  lg:py-10  max-w-[1100px] my-[40px] text-neutral-800 dark:text-neutral-200 gap-5">
        <div v-for="(item,index) in counter.Data_List_Product_Home" class="flex flex-col items-center justify-start">
            <div v-if="$i18n.locale=='vi'" class="flex overflow-x-auto  text-[20px] font-bold mb-2 w-full text-neutral-700 dark:text-neutral-200 gap-2"><h1>{{ index+1 }}</h1><h1>.</h1><h1 class="shrink-0">{{ item.Title }}</h1><img src="./image/new.png" class="w-[50px]"/></div>
            <div v-if="$i18n.locale=='en'" class="flex overflow-x-auto text-[20px] font-bold mb-2 w-full text-neutral-700 dark:text-neutral-200 gap-2"><h1>{{ index+1 }}</h1><h1>.</h1><h1 class="shrink-0">{{ item.Title_English }}</h1><img src="./image/new.png" class="w-[50px]"/></div>
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
</template> -->
<template>
    <div  v-show="counter.Loading==2 && counter.Show_Search==1" class=" grow flex flex-col  py-10 lg:px-6  lg:py-10  max-w-[1100px] my-[40px] text-neutral-800 dark:text-neutral-200 gap-5">
        thhth
        <h1>hshdhjdhf</h1>
        <div v-for="i in ['a','b','c']">{{i}}</div>
        <!-- <div v-for="(item,index) in counter.Data_List_Product_Home" class="flex flex-col items-center justify-start">
            <div v-if="$i18n.locale=='vi'" class="flex overflow-x-auto  text-[20px] font-bold mb-2 w-full text-neutral-700 dark:text-neutral-200 gap-2"><h1>{{ index+1 }}</h1><h1>.</h1><h1 class="shrink-0">{{ item.Title }}</h1><img src="./image/new.png" class="w-[50px]"/></div>
            <div v-if="$i18n.locale=='en'" class="flex overflow-x-auto text-[20px] font-bold mb-2 w-full text-neutral-700 dark:text-neutral-200 gap-2"><h1>{{ index+1 }}</h1><h1>.</h1><h1 class="shrink-0">{{ item.Title_English }}</h1><img src="./image/new.png" class="w-[50px]"/></div>
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
        </div> -->
    </div>
</template>

<script>
    import { useCounterStore } from '@/stores/counter';
    import axios from 'axios';
    import VueCookies from 'vue-cookies'
    import {AtomSpinner,FulfillingSquareSpinner,HalfCircleSpinner,TrinityRingsSpinner,HollowDotsSpinner} from 'epic-spinners'


    export default {

    setup() {
        const counter = useCounterStore();
        return {counter}
    },
    mounted:function(){
        this.counter.F_Data_List_Product_Home();
        setTimeout ( this.counter.F_Loading, 1000 );
    },
    components: {
    AtomSpinner,FulfillingSquareSpinner,HalfCircleSpinner,TrinityRingsSpinner,HollowDotsSpinner
    }
    }
</script>


