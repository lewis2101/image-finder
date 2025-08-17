<script setup lang="ts">
import { BaseSvgIcon} from "@/shared";
</script>

<template>
    <div class="text-center w-full max-w-[280px]">
        <div class="flex items-center justify-center mb-2">
            <BaseSvgIcon name="search-list" width="48" height="48" />
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