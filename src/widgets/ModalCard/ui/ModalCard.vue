<script setup lang="ts">
import { BaseSvgIcon } from "@/shared";
import { watch } from "vue";

const showModel = defineModel<boolean>({
    required: true
});

watch(showModel, (newValue) => {
    document.body.classList.toggle("overflow-hidden", newValue);
}, {
    immediate: true
});

</script>

<template>
    <Teleport to="#layout">
        <Transition name="fade">
            <div v-if="showModel" class="fixed w-screen h-screen inset-0 bg-base-black z-50 bg-opacity-60
                flex items-center justify-center py-5 px-5" @click="showModel = false">
                <div class="w-full min-w-[150px] max-w-[500px] h-fit modal-content 
                    bg-base-white py-4 px-4 rounded-12 relative" @click.stop>
                    <div class="absolute top-0 right-0 py-4 px-4 z-50 cursor-pointer" @click="showModel = false">
                        <BaseSvgIcon name="cross" />
                    </div>
                    <slot />
                </div>
            </div> 
        </Transition>
    </Teleport>
</template>

<style scoped lang="scss">
.modal-content {
    max-height: calc(100vh - 50px);
    overflow-y: auto;
}
</style>