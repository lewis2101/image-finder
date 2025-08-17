<script setup lang="ts">
import natureMan from "@/app/assets/images/nature_man.png"
import { ref } from "vue";
import BasePin from "./BasePin.vue";
import { executeWithDelay } from "@/shared";

const imageSrc = ref("");

const loadImage = async () => {
    await executeWithDelay(() => {
        imageSrc.value = natureMan;
    })
}

</script>

<template>
    <div class="w-full max-w-[400px] flex flex-col gap-[10px] mb-10">
        <div class="relative w-full h-[250px]">
            <img v-view="{
                callback: loadImage,
                id: 'imageId',
                }" 
                :src="imageSrc" alt="nature_man" class="w-full h-full rounded-12 object-cover">
            <Transition name="image-fade">
                <div v-if="!imageSrc" class="inset-0 absolute h-[250px] bg-base-gray rounded-12"></div>
            </Transition>
        </div>
        <div class="text-b-14 leading-14 font-500 text-gray-600">
            9 Апр • 2 мин • 1 комментарий 
        </div>
        <div class="text-b-22 leading-full font-600 text-base-black">
            Вдохновение в каждом шаге
        </div>
        <div class="text-b-16 leading-24 font-500 text-base-black">
            Наши путешественники находят вдохновение в каждом шаге своего пути.
        </div>
        <BasePin title="sadfsadf" size="small" />
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
</style>