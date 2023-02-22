import { defineStore } from 'pinia';

import axios from 'axios';
import VueCookies from 'vue-cookies'
import { fa0 } from '@fortawesome/free-solid-svg-icons';

import {useRoute} from 'vue-router';
const Route = useRoute();
    

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      domain_Backend:'https://todayserver.store/',domain_Frontend:'https://www.webtoday.store/',Language:'vi',Dark:true,Table_Language:false,Table_Language_sm:false,Open_Dark:'darkk',Table_Nav:1,Table_Sidebar:1,Path_Route:useRoute(),
      Link_Path_Route:{"Home":"/","Web_Template":{Sell_Accounts:"/Product/SellAccounts",Construction_Industry:"/Product/ConstructionIndustry",Cosmetics_Industry:"/Product/CosmeticsIndustry"},Introduce:"/Introduce",Contact:"/Contact"},
      Link_Image:["https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg","https://img.meta.com.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg","https://d1hjkbq40fs2x4.cloudfront.net/2020-01-09/files/canon-landscape-photography-preparation-tips_1968-1s.jpg"],
      Oder_Image:0,count:0,Table_Informations:false,Image_Language:'/assets/vn-2ac15179.svg',Text_Array:['Facebook','Zalo','Gọi điện'],class_1:'bg-gray-100 w-[15px] h-[5px] rounded opacity-50',mn:['a','b','c'],fg:[{"Name":"Mua bán tài khoản","Active":true,"Category_Industry":[{"Title":"Mua bán tài khoản","Title_English":"Buy and sell account","Information":"dfdf\r\ndfd\r\nfdff","Information_English":"ee\r\nee\r\neeee","Domain_Server":"https://www.webtoday.store/","Oder_Image":0,"Product_Industry":[{"Image":"/upload/ImageProduct/messi.png"},{"Image":"/upload/ImageProduct/Screenshot_1.png"},{"Image":"/upload/ImageProduct/Screenshot_21.png"}]}]},{"Name":"Ngành xây dựng","Active":true,"Category_Industry":[{"Title":"ttht","Title_English":"hthth","Information":"hthth","Information_English":"thth","Domain_Server":"https://www.webtoday.store/","Oder_Image":0,"Product_Industry":[{"Image":"/upload/ImageProduct/Screenshot_1_g39Bict.png"},{"Image":"/upload/ImageProduct/messi_tYfqlDe.png"}]}]},{"Name":"Ngành mỹ phẩm","Active":true,"Category_Industry":[{"Title":"thth","Title_English":"htht","Information":"hth","Information_English":"hth","Domain_Server":"ht","Oder_Image":0,"Product_Industry":[{"Image":"/upload/ImageProduct/messi_vldEFXK.png"}]}]},{"Name":"Thai","Active":true,"Category_Industry":[{"Title":"sd","Title_English":"asd","Information":"sad","Information_English":"asd","Domain_Server":"sad","Oder_Image":0,"Product_Industry":[{"Image":"/upload/ImageProduct/Screenshot_7.png"},{"Image":"/upload/ImageProduct/Screenshot_1_MwuUKDr.png"},{"Image":"/upload/ImageProduct/Screenshot_2.png"}]},{"Title":"sdssd","Title_English":"asdsadsd","Information":"sad","Information_English":"asd","Domain_Server":"sad","Oder_Image":0,"Product_Industry":[{"Image":"/upload/ImageProduct/messi_Buv03Hr.png"},{"Image":"/upload/ImageProduct/Screenshot_5.png"},{"Image":"/upload/ImageProduct/messi_KoRz7E9.png"}]}]}],
      class_2:'bg-gray-100 w-[15px] h-[5px] rounded opacity-100',Data_List_Product:[{'Category_Industry':''}],Data_List_Product_Home:[],Loading:1,Search:'',Show_Search:1,Search_ListProduct_Today1:null,
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
    async F_Search(){
      this.Search_ListProduct_Today1 = await axios({method:'get',params:{search:this.Search},url: this.domain_Backend+'/SearchListProduct'});
      this.Search_ListProduct_Today1 = await this.Search_ListProduct_Today1.data;
    },
  }
})

  
