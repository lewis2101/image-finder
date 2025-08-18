<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
    variant: "primary" | "secondary";
    disabled?: boolean;
}>();

const buttonStyle = computed(() => {
    if (props.disabled) {
        return "bg-gray-100 text-gray-400";
    }

    return props.variant === "primary"
        ? "text-base-white bg-primary"
        : "text-primary bg-primary-light";
});

</script>

<template>
    <button v-bind="$attrs" :class="[
        'text-b-13 leading-14 font-600 rounded-6 py-3 px-[14px] min-w-[120px]',
        buttonStyle,
    ]">
        <slot />
    </button>
</template>

<style scoped lang="scss"></style>