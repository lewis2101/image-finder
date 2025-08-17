<script setup lang="ts">
import { BaseSvgIcon} from "@/shared";
import { ref } from "vue";

type INavList = {
    title: string;
    to: string;
}

defineProps<{
    navList: INavList[];
}>()

const showmenu = ref(false);

</script>

<template>
<div>
    <div class="flex items-center w-full bg-black h-[78px] lg:h-[62px] px-[22px] lg:px-[56px] relative z-10">
    <div class="mr-[15px] cursor-pointer block lg:hidden">
        <BaseSvgIcon name="menu" />
    </div>
    <div>
        <RouterLink to="/">
            <slot name="logo"  />
        </RouterLink>
    </div>
    <div class="ml-[80px] flex items-center gap-[20px]">
        <RouterLink 
        v-for="list in navList" 
        :key="list.to" 
        :to="list.to"
        exact-active-class="bg-white bg-opacity-10 text-primary"
        class="text-gray-100 text-b-16 leading-16 font-600 px-[14px] py-[8px] cursor-pointer rounded-6 hidden lg:block">
            {{ list.title }}
        </RouterLink>
    </div>
    </div>
    <div :class="[
        'fixed left-0 w-full flex flex-col gap-3 bg-base-black py-6 px-4 lg:hidden transition-all duration-300 ease-in-out z-[5]',
        showmenu ? 'top-[70px]' : 'top-[-100px]'
        ]">
            <RouterLink 
            v-for="list in navList" 
            :key="list.to" 
            :to="list.to"
            exact-active-class="bg-white bg-opacity-10 text-primary"
            class="text-gray-100 text-b-16 leading-16 font-600 px-[14px] py-[8px] cursor-pointer rounded-6">
                {{ list.title }}
        </RouterLink>
    </div>
</div>
</template>       

<style scoped>

</style>