<script setup lang="ts">
import search from "@/app/assets/search.svg?raw";

const model = defineModel<string>({
    required: true,
})

</script>

<template>
    <div>
        <span v-html="search" class="absolute left-[10px] top-[50%] translate-y-[-50%]"></span>
        <input 
            v-model="model" 
            type="text" 
            placeholder="Поиск" 
            class="w-full h-[40px] bg-gray-100 placeholder:text-gray-400 placeholder:text-b32 
            placeholder:leading-14 placeholder:font-500 rounded-6 px-8 border-0 focus:outline-1 focus:outline-primary"
            >
    </div>
</template>
<style scoped lang="scss"></style>