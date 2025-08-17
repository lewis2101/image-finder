<script setup lang="ts">
import { ImageCard, ModalCard, ExternalCard } from "@/widgets";
import { BaseSpinner, BaseEmptyView } from "@/shared";
import { useImageCardGrid } from "../model/useImageCardGrid";

const { 
    imageCards, 
    imageLoading, 
    isShowExternalCardModal, 
    showCardModal, 
    currentExternalCard
 } = useImageCardGrid();

</script>

<template>
    <div v-if="imageCards.length" class="w-full grid gap-5 grid-cols-1 sm:grid-cols-2
        lg:grid-cols-3 xl:grid-cols-4 bg-white rounded-12  py-[30px] px-[30px]">
        <ImageCard 
            v-for="card in imageCards" 
            :key="card.url" 
            :card="card" 
            class="my-0 mx-auto" 
            @click="showCardModal(card)"
        />
        <ModalCard v-model="isShowExternalCardModal">
            <template v-if="currentExternalCard">
                <ExternalCard :card="currentExternalCard" />
            </template>
        </ModalCard>
    </div>
    <div v-else class="w-full flex items-center justify-center bg-white rounded-12 py-16 px-[30px]">
        <BaseSpinner v-if="imageLoading" />
        <BaseEmptyView v-else />
    </div>
</template>

<style scoped>
.image-card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
}
</style>