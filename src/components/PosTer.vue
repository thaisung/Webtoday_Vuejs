<template>
    <div class=" fixed z-30 right-6 top-[65px] 2xl:right-[70px] border-l border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 pl-5 hidden lg:flex lg:flex-col font-semibold gap-2 text-neutral-500 dark:text-neutral-400">
      <div class="flex flex-col  items-center w-full h-screen mt-[150px] ">
        <img src="./flag/plane.gif" class="-rotate-90 scale-150 "/>
        <kinesis-container v-if="$i18n.locale=='en'" class="flex   items-center w-full  mb-[50px] justify-evenly mt-[150px] font-bold cursor-pointer text-cyan-600 text-[25px]">
          <kinesis-element :strength="60" class="-rotate-45">P</kinesis-element>
          <kinesis-element :strength="20" class="rotate-35">L</kinesis-element>
          <kinesis-element :strength="70" class="rotate-25">A</kinesis-element>
          <kinesis-element :strength="50" class="rotate-15">N</kinesis-element>
          <kinesis-element :strength="80" class="-rotate-45">E</kinesis-element>
        </kinesis-container>
        <kinesis-container v-if="$i18n.locale=='vi'" class="flex   items-center w-full  mb-[50px] justify-evenly mt-[150px] font-bold cursor-pointer text-cyan-600 text-[25px]">
          <kinesis-element :strength="60" class="">M</kinesis-element>
          <kinesis-element :strength="20" class="">A</kinesis-element>
          <kinesis-element :strength="70" class="">Y</kinesis-element>
          <kinesis-element :strength="50" class="">B</kinesis-element>
          <kinesis-element :strength="60" class="">A</kinesis-element>
          <kinesis-element :strength="80" class="">Y</kinesis-element>
        </kinesis-container>
      </div>
    </div>
</template>
  
  
<script>
  import { KinesisContainer, KinesisElement } from "vue-kinesis";
  export default {
    name: "App",
    components: {
      KinesisContainer,
      KinesisElement,
    },
  };
  </script>