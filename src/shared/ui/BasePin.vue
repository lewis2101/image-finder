<script setup lang="ts">
import plus from "@/app/assets/plus.svg?raw"
import check from "@/app/assets/check.svg?raw"
import type { IBasePin } from "../types";
import { computed } from "vue";

const props = withDefaults(defineProps<IBasePin>(), {
    size: "medium"
})

const sizeStyles = computed(() => {
    if (props.size === "small") {
        return "text-b-14 leading-14 py-[6px]";
    }
    return "text-b-16 leading-16 py-[8px]";
})

</script>

<template>
    <div :class="[
        `w-fit flex flex-row items-center gap-[6px] font-500  px-[14px] rounded-20 cursor-pointer select-none`,
        isChecked ? 'text-white bg-primary' : 'text-primary-active bg-primary-light',
        sizeStyles
    ]">
        <div>{{ title }}</div>
        <div v-if="icon"><span v-html="isChecked ? check : plus"></span></div>
    </div>
</template>

<style scoped lang="scss">
</style>