<script setup lang="ts">
import natureMan from "@/app/assets/images/nature_man.png"
import time from "@/app/assets/time.svg?raw";
import { ref } from "vue";
import BasePin from "../../../shared/ui/BasePin.vue";
import BaseImage from "../../../shared/ui/BaseImage.vue";
import { executeWithDelay, formatDateLocale } from "@/shared";
import { useImageCard, type ImageCardProps } from "../model/useImageCard";

const props = defineProps<ImageCardProps>();

const { imageCard } = useImageCard(props);

</script>

<template>
    <div class="w-full max-w-[400px] flex flex-col gap-[10px] mb-10 cursor-pointer">
        <BaseImage :src="imageCard.url" :alt="imageCard.alt" height="250px" />
        <div class="flex items-center gap-1 text-b-14 leading-14 font-500 text-gray-600">
            {{ formatDateLocale(imageCard.createdAt) }} 
            <div>•</div> 
            <span v-html="time"></span> 
            {{ imageCard.reviewTime }}
            мин
            <div>•</div>
            {{ imageCard.amountComment }} 
            комментариев
        </div>
        <div class="text-b-22 leading-full font-600 text-base-black">
            {{ imageCard.title }}
        </div>
        <div class="text-b-16 leading-24 font-500 text-base-black">
            {{ imageCard.description }}
        </div>
        <div class="flex flex-wrap item-center gap-2">
            <BasePin 
                v-for="pin in imageCard.pins" 
                :key="pin" 
                :title="pin" 
                size="small" 
            />
        </div>
    </div>
</template> 
      
<style scoped lang="scss">
</style>