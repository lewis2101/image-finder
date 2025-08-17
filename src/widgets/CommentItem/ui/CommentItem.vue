<script setup lang="ts">
import { formatDate, BaseImage } from "@/shared";
import { defineProps, defineEmits } from "vue";

defineProps<{
    imageUrl: string;
    alt: string;
    name: string;
    comment: string;
    createdAt: Date | string;
    isMyComment?: boolean;
}>();

defineEmits<{
    (e: "delete");
}>();

</script>

<template>
    <div class="w-full py-3 px-3 flex gap-3 items-start">
        <div class="min-w-[38px] max-w-[38px] min-h-[38px] max-h-[38px]">
            <BaseImage :src="imageUrl" :alt="alt" height="38px" :logo="false" />
        </div>
        <div class="w-full flex flex-col gap-[6px]">
            <div class="text-b-16 leading-full font-600 text-gray-900">
                {{ name }}
            </div>
            <div class="w-full flex items-center justify-between text-b-14 leading-14 font-500 text-gray-800">
                <div>{{ comment }}</div>
                <div v-if="isMyComment" class="text-error text-b-12 leading-12 cursor-pointer px-2" @click="$emit('delete')">
                    Удалить
                </div>
            </div>
            <div class="text-b-12 leading-12 font-500 text-gray-500">
                {{ formatDate(new Date(createdAt)) }}
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>