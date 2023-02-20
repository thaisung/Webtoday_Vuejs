<template>
  <div>
    <div class="flex w-full text-[40px] font-bold mt-[100px]  sm:mb-[50px] justify-center text-neutral-800 dark:text-neutral-200">
      <h1 class="flex flex-col">
        {{ $t('Body.Contact.Title') }}
        <div class="flex w-full justify-center">
            <span class="typed-text text-[45px] text-cyan-600">{{ typeValue }}</span>
            <span class=" text-[45px] text-cyan-600">|</span>
            <span class="" :class="{ typing: typeStatus }">&nbsp;</span>
        </div>
      </h1>
    </div>
    <div class="flex flex-col my-[50px] sm:flex-row  items-center justify-center gap-7 text-neutral-800 dark:text-neutral-200">
      <div class="flex gap-5 font-semibold justify-center items-center text-[20px]"><img src="https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-Zalo-Arc.png" class="w-[50px]"/><h1>0866.558.626</h1></div>
      <div class="flex gap-5 font-semibold justify-center items-center text-[20px]"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Facebook_F_icon.svg/640px-Facebook_F_icon.svg.png" class="w-[50px]"/><h1>0866.558.626</h1></div>
      <div class="flex gap-5 font-semibold justify-center items-center text-[20px]"><img src="https://play-lh.googleusercontent.com/wwzWuDb8ivbarUCpB7sEaUkx-vq6HbbqNZ2Eg5a_HpXNNyQpp-cFcNCcG-O9T28N8RLv" class="w-[50px]"/><h1>0866.558.626</h1></div>
    </div>
  </div>
</template>
  
<script>

  import { useCounterStore } from '@/stores/counter';
  import axios from 'axios';
  import VueCookies from 'vue-cookies'

  export default {
    name: "typeWiriter",
    setup() {
        const counter = useCounterStore();
        return {counter}
    },
    data: () => {
      return {
        typeValue: "",
        typeStatus: false,
        displayTextArray: '',
        typingSpeed: 100,
        erasingSpeed: 100,
        newTextDelay: 2000,
        displayTextArrayIndex: 0,
        charIndex: 0,
      };
    },
    props: {},
    created() {
      setTimeout(this.typeText, this.newTextDelay + 200);
    },
    methods: {
      typeText() {
        this.displayTextArray=this.counter.Text_Array
        if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
          if (!this.typeStatus) this.typeStatus = true;
          this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(
            this.charIndex
          );
          this.charIndex += 1;
          setTimeout(this.typeText, this.typingSpeed);
        } else {
          this.typeStatus = false;
          setTimeout(this.eraseText, this.newTextDelay);
        }
      },
      eraseText() {
        this.displayTextArray=this.counter.Text_Array
        if (this.charIndex > 0) {
          if (!this.typeStatus) this.typeStatus = true;
          this.typeValue = this.displayTextArray[this.displayTextArrayIndex].substring(
            0,
            this.charIndex - 1
          );
          this.charIndex -= 1;
          setTimeout(this.eraseText, this.erasingSpeed);
        } else {
          this.typeStatus = false;
          this.displayTextArrayIndex += 1;
          if (this.displayTextArrayIndex >= this.displayTextArray.length)
            this.displayTextArrayIndex = 0;
          setTimeout(this.typeText, this.typingSpeed + 1000);
        }
      },
    },
  };
</script>
  