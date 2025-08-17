<script setup lang="ts">
import { BasePin } from "@/shared";
import { usePinsBlock, type PinsBlockProps } from "../model/usePinsBlock"

const props = defineProps<PinsBlockProps>();

defineEmits<{
    (e: "handlePin", value: string): void
}>();

const { isExpandedFilter, pins, activePins, isLoading } = usePinsBlock(props);

</script>

<template>
    <div :class="[
        `accordion w-full`,
        isExpandedFilter ? 'accordion_open pb-2 pt-3 sm:pt-5' : ''
    ]">
        <div class="flex items-center flex-wrap gap-2 accordion__content">
            <template v-if="!isLoading">
                <BasePin
                    v-for="pin in pins" 
                    :key="pin" 
                    :title="pin" 
                    :is-checked="activePins.includes(pin)" 
                    icon
                    @click="$emit('handlePin', pin)"
                />
            </template>
            <template v-else>
                <div v-for="item in 5" :key="item" class=" w-28 h-8 bg-base-gray rounded-20"></div>
            </template>
        </div>
    </div>
</template>

<style scoped lang="scss">
.accordion {
    display: grid;
    grid-template-rows: 0fr;

    transition: grid-template-rows .2s ease-in-out;

    &_open {
        grid-template-rows: 1fr;
    }

    .accordion__content {
        overflow: hidden;
    }
}
</style>