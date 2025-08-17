<script setup lang="ts">
import { PinsBlock, SearchBlock } from "@/widgets"
import { useBlogNavbar } from "../model/useBlogNavbar";

const { 
    inputModel, 
    isExpandedFilter, 
    pins,
    activePins,
    handleClickPin, 
    clearActivePins,
    pinsLoading
} = useBlogNavbar();

</script>

<template>
<div class="flex flex-col justify-center items-center w-full h-full min-h-[80px] py-5
    bg-white px-[10px] md:px-[30px] lg:px-[95px]">
    <SearchBlock 
        v-model="inputModel"
        :active-pins="activePins" 
        :is-expanded="isExpandedFilter" 
        @clear-pins="clearActivePins" 
        @toggle-expand="isExpandedFilter = !isExpandedFilter" 
    />
    <PinsBlock 
        :pins="pins" 
        :active-pins="activePins" 
        :show="isExpandedFilter" 
        :is-loading="pinsLoading" 
        @handlePin="handleClickPin" 
    />
</div>
</template>
<style scoped lang="scss">

</style>