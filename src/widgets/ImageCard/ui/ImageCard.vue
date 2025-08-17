<script setup lang="ts">
import natureMan from "@/app/assets/images/nature_man.png"
import { ref } from "vue";
import { BasePin, BaseImage, BaseImageOption, executeWithDelay, formatDateLocale } from "@/shared";
import { useImageCard, type ImageCardProps } from "../model/useImageCard";

const props = defineProps<ImageCardProps>();

const { imageCard } = useImageCard(props);

</script>

<template>
    <div class="w-full max-w-[400px] flex flex-col gap-[10px] mb-10 cursor-pointer">
        <BaseImage :src="imageCard.url" :alt="imageCard.alt" height="250px" />
        <BaseImageOption 
            :date="imageCard.createdAt" 
            :review-time="imageCard.reviewTime" 
            :amount-comment="imageCard.comments.length"
        />
        <div class="text-b-22 leading-full font-600 text-base-black">
            {{ imageCard.title }}
        </div>
        <div class="text-b-16 leading-24 font-500 text-base-black limit-3-lines">
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
.limit-3-lines {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>