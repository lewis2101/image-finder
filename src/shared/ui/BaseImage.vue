<script setup lang="ts">
import { ref } from "vue";
import { executeWithDelay }  from "../utils/executeWithDelay";
import logo from "@/app/assets/logo.png";

const props = defineProps<{
    src: string;
    height: string;
    alt: string;
    forceLoad?: boolean;
    logo?: boolean;
}>();

const showSkeleton = ref(!props.forceLoad);
const imageSrc = ref(props.forceLoad ? props.src : "");

const intersectImage = () => {
    imageSrc.value = props.src;
}

const onLoadedImage = () => {
    showSkeleton.value = false;
}

</script>

<template>
    <div class="relative w-full image-size">
            <img v-view="{
                callback: intersectImage,
                id: 'imageId',
                }" 
                :src="imageSrc" 
                :alt="props.alt" 
                class="w-full h-full rounded-12 object-cover" 
                @load="onLoadedImage"
            >
            <Transition name="image-fade">
                <div v-if="showSkeleton" class="inset-0 absolute flex items-center justify-center image-size bg-base-gray rounded-12">
                    <img v-if="logo" :src="logo" alt="" width="100" height="100" class="w-40">
                </div>
            </Transition>
        </div>
</template>

<style scoped lang="scss">
.image-fade-enter-active,
.image-fade-leave-active {
  transition: opacity 0.3s ease;
}
.image-fade-enter-from,
.image-fade-leave-to {
  opacity: 0;
}
.image-size {
    height: v-bind("props.height");
}
</style>

