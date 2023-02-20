<template>
    <div class="flex flex-col  mt-[100px] mb-[50px] text-neutral-800 dark:text-neutral-200">
        <h1 class="text-[40px] font-bold flex w-full justify-center">{{ $t('Body.Introduce.Title') }}</h1>
        <marquee class="bg-cyan-100 px-3 py-1 rounded font-medium my-5 text-cyan-900">{{ $t('Body.Introduce.Text_Animation') }}</marquee>
        <div class="flex flex-col ">
            <h1 class="text-[20px] font-semibold">{{ $t('Body.Introduce.Information.The_First.Title') }}</h1>
            <h1 class="font-medium">{{ $t('Body.Introduce.Information.The_First.Content') }}</h1>
            <ul class="list-disc list-inside">
                <li>{{ $t('Body.Introduce.Information.The_First.Body_1') }}</li>
                <li>{{ $t('Body.Introduce.Information.The_First.Body_2') }}</li>
                <li>{{ $t('Body.Introduce.Information.The_First.Body_3') }}</li>
            </ul>
        </div>
        <div class="flex flex-col mt-3">
            <h1 class="text-[20px] font-semibold">{{ $t('Body.Introduce.Information.The_Second.Title') }}</h1>
            <h1 class="font-medium">{{ $t('Body.Introduce.Information.The_Second.Content') }}</h1>
            <ul class="list-disc list-inside">
                <li>{{ $t('Body.Introduce.Information.The_Second.Body_1') }}</li>
                <li>{{ $t('Body.Introduce.Information.The_Second.Body_2') }}</li>
                <li>{{ $t('Body.Introduce.Information.The_Second.Body_3') }}</li>
            </ul>
        </div>
        <div class="flex flex-col mt-3">
            <h1 class="text-[20px] font-semibold">{{ $t('Body.Introduce.Information.The_Third.Title') }}</h1>
            <h1 class="font-medium">{{ $t('Body.Introduce.Information.The_Third.Content') }}</h1>
            <ul class="list-disc list-inside">
                <li>{{ $t('Body.Introduce.Information.The_Third.Body_1') }}</li>
                <li>{{ $t('Body.Introduce.Information.The_Third.Body_2') }}</li>
                <li>{{ $t('Body.Introduce.Information.The_Third.Body_3') }}</li>
            </ul>
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
    }
</script>