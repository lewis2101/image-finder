<script setup lang=ts>
import { formatDateLocale, pluralize } from "@/shared"
import time from "@/app/assets/time.svg?raw";

defineProps<{
    date: Date;
    reviewTime: number;
    amountComment: number;
}>();

const commentaryTextVariants = ["комментарий", "комментария", "комментариев"];
</script>

<template>
    <div class="flex items-center gap-1 text-b-12 md:text-b-14 leading-12 md:leading-14 font-500 text-gray-600">
        {{ formatDateLocale(date) }} 
        <div>•</div> 
        <span v-html="time"></span> 
        {{ reviewTime }}
        мин
        <div>•</div>
        {{ amountComment }} 
        {{ pluralize(amountComment, commentaryTextVariants) }}
    </div>
</template>

<style scoped lang="scss"></style>