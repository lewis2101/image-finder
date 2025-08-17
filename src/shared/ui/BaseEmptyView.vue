<script setup lang="ts">
import searchList from "@/app/assets/search-list.svg?raw";
</script>

<template>
    <div class="text-center w-full max-w-[280px]">
        <div class="flex items-center justify-center mb-2">
            <span v-html="searchList"></span>
        </div>
        <div class="mb-2 text-gray-600 text-b-14 leading-14 font-500">
            Поиск не дал результатов
        </div>
        <div class="mb-2 text-gray-500 text-b-12 leading-20 font-500">
            Повторите поиск или используйте фильтр для структуризации контента
        </div>
    </div>
</template>

<style scoped lang="scss"></style>