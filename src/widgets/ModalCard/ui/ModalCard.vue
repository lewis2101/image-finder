<script setup lang="ts">
import cross from "@/app/assets/cross.svg?raw";

const showModel = defineModel<boolean>({
    required: true
});

</script>

<template>
    <Teleport to="#layout">
        <div v-if="showModel" class="fixed w-screen h-screen inset-0 bg-base-black z-50 bg-opacity-60
            flex items-center justify-center py-5 px-5" @click="showModel = false">
            <div class="w-full min-w-[150px] max-w-[500px] bg-base-white py-4 px-4 rounded-12 relative" @click.stop>
                <div class="absolute top-0 right-0 py-4 px-4 z-50 cursor-pointer" @click="showModel = false">
                    <span v-html="cross"></span>
                </div>
                <slot />
            </div>
        </div> 
    </Teleport>
</template>

<style scoped lang="scss"></style>