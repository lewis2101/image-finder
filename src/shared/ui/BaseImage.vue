<script setup lang="ts">
import { ref } from "vue";
import { executeWithDelay }  from "../utils/executeWithDelay";
import logoImage from "@/app/assets/logo.png";

const props = withDefaults(defineProps<{
    src: string;
    height: string;
    alt: string;
    forceLoad?: boolean;
    logo?: boolean;
}>(), {
    height: "100%",
    logo: true,
    forceLoad: false,
});

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
                id: src + alt,
                }" 
                :src="imageSrc" 
                :alt="alt" 
                class="w-full h-full rounded-12 object-cover" 
                @load="onLoadedImage"
            >
            <Transition name="fade">
                <div v-if="showSkeleton" class="inset-0 absolute flex items-center justify-center image-size bg-base-gray rounded-12">
                    <img v-if="logo" :src="logoImage" alt="" width="100" height="100" class="w-40">
                </div>
            </Transition>
        </div>
</template>

<style scoped lang="scss">
.image-size {
    height: v-bind("props.height");
}
</style>

