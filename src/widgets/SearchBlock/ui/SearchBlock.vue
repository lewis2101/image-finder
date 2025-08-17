<script setup lang="ts">
import arrowDown from "@/app/assets/arrow-down.svg?raw";
import { BaseSearchInput } from "@/shared";

defineProps<{
    activePins: string[];
    isExpanded: boolean;
}>()

defineEmits<{
    (e: "clearPins"): void;
    (e: "toggleExpand"): void;
}>()

const model = defineModel<string>({
    required: true
})

</script>

<template>
    <div class="flex flex-col justify-center items-center w-full h-full">
        <div class="w-full flex items-center justify-between">
            <div class="text-gray-900 text-b-24 leading-24 font-700 md:text-b-32 md:leading-32 mr-[40px]">
                Блог
            </div>
            <div class="w-full mr-[40px] relative hidden sm:block">
                <BaseSearchInput v-model="model" class="max-w-[400px]"/>
            </div>
            <div class="flex items-center justify-center">
                <div v-if="activePins.length" class="mr-[10px] text-primary-active text-b-14 leading-14 font-500 cursor-pointer select-none"
                    @click="$emit('clearPins')"
                    >
                        Очистить
                </div>
                <div class="flex items-center">
                    <div class="mr-[4px] text-gray-500 text-b-14 leading-14 font-500 cursor-pointer select-none" 
                        @click="$emit('toggleExpand')">
                        Фильтр
                    </div>
                    <span v-html="arrowDown" :class="isExpanded ? ' rotate-180' : ''"></span>
                </div>
            </div>
        </div>
        <div class="w-full my-3 relative block sm:hidden">
            <BaseSearchInput v-model="model"/>
        </div>
    </div>
</template>

<style scoped lang="ts"></style>   