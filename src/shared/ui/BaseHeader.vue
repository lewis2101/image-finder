<script setup lang="ts">
import menu from "@/app/assets/menu.svg?raw";

type INavList = {
    title: string;
    to: string;
}

defineProps<{
    navList: INavList[];
}>()
</script>

<template>
<div class="flex items-center w-full bg-black h-[78px] lg:h-[62px] px-[22px] lg:px-[56px]">
    <div class="mr-[15px] cursor-pointer block lg:hidden">
        <span v-html="menu"></span>
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
</template>       

<style scoped>

</style>