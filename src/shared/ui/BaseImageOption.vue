<script setup lang=ts>
import { BaseSvgIcon } from "@/shared";
import { formatDateLocale, pluralize } from "@/shared"

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
        <BaseSvgIcon name="time" />
        {{ reviewTime }}
        мин
        <div>•</div>
        {{ amountComment }} 
        {{ pluralize(amountComment, commentaryTextVariants) }}
    </div>
</template>

<style scoped lang="scss"></style>