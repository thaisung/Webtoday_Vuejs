import { defineStore } from 'pinia';

import axios from 'axios';
import VueCookies from 'vue-cookies'
import { fa0 } from '@fortawesome/free-solid-svg-icons';

import {useRoute} from 'vue-router';
const Route = useRoute();
    

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      domain_Backend:'http://103.82.27.204',domain_Frontend:'https://www.webtoday.store/',Language:'vi',Dark:true,Table_Language:false,Table_Language_sm:false,Open_Dark:'darkk',Table_Nav:1,Table_Sidebar:1,Path_Route:useRoute(),
      Link_Path_Route:{"Home":"/","Web_Template":{Sell_Accounts:"/Product/SellAccounts",Construction_Industry:"/Product/ConstructionIndustry",Cosmetics_Industry:"/Product/CosmeticsIndustry"},Introduce:"/Introduce",Contact:"/Contact"},
      Link_Image:["https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg","https://img.meta.com.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg","https://d1hjkbq40fs2x4.cloudfront.net/2020-01-09/files/canon-landscape-photography-preparation-tips_1968-1s.jpg"],
      Oder_Image:0,count:0,Table_Informations:false,Image_Language:'/assets/vn-2ac15179.svg',Text_Array:['Facebook','Zalo','Gọi điện'],class_1:'bg-gray-100 w-[15px] h-[5px] rounded opacity-50',
      class_2:'bg-gray-100 w-[15px] h-[5px] rounded opacity-100',Data_List_Product:[{'Category_Industry':''}],Data_List_Product_Home:[],Loading:1,
    }
  },

  getters: {
    // cookievalue: (state) => state.openthongtincanhan.token + "(Theta)" + state.openthongtincanhan.id,
  },

  actions: {
    F_Open_Dark() {
      if(this.Dark==true){
        this.Open_Dark = 'darkk'
      }
      if(this.Dark==false){
        this.Open_Dark = 'dark'
      }
    },
    Count(){
      count ++;
    },
    async F_Data_List_Product(){
        this.Data_List_Product = await axios({method:'get',url: this.domain_Backend+'/ListProduct'});
        this.Data_List_Product = await this.Data_List_Product.data;
    },
    F_Loading(){
      this.Loading = 2;
    },
    async F_Data_List_Product_Home(){
      try{
        this.Data_List_Product_Home = await axios({method:'get',url: this.domain_Backend+'/ListProductHome'});
        this.Data_List_Product_Home = await this.Data_List_Product_Home.data;
      }
      catch(error){
        this.Data_List_Product_Home = [];
      }
    },
  }
})

  
