<script setup lang="ts">
import { IImageCard, CommentItem } from "@/widgets";
import { BaseImageOption, BaseImage, BasePin, BaseTextArea, BaseButton } from "@/shared";
import { ref } from "vue";

const COMMENT_MAX_LENGTH = 250;

defineProps<{
    card: IImageCard;
}>();

const commentModel = ref("");
const showButtons = ref(false);

</script>

<template>
    <div>
        <div class="text-base-black text-b-20 md:text-b-24 leading-full font-600 mb-2 pr-8">
            {{ card.title }}
        </div>
        <BaseImageOption 
            :date="card.createdAt" 
            :review-time="card.reviewTime" 
            :amount-comment="card.comments.length"
            class="mb-4"
        />
        <BaseImage 
            :src="card.url" 
            :alt="card.alt" 
            height="370px" 
            class="rounded-12 mb-4"
        />
        <div class="text-b-14 md:text-b-16 leading-20 md:leading-24 font-500 text-base-black mb-4">
            {{ card.additonalDescription || card.description }}
        </div>
        <div class="flex flex-wrap items-center gap-2 mb-4">
            <BasePin 
                v-for="pin in card.pins" 
                :key="pin" 
                :title="pin" 
                size="small" 
                class="mr-2 mb-2"
            />
        </div>
        <div class="text-b-16 leading-full font-600 text-gray-900 mb-4">
            Комментариев <span class="text-gray-600">{{ card.comments.length }}</span>
        </div>
        <BaseTextArea 
            v-model="commentModel" 
            :max-length="COMMENT_MAX_LENGTH" 
            @focus="showButtons = true"
            @blur="showButtons = false"
        />
        <div v-if="showButtons || commentModel" class="flex items-center justify-end gap-2 mb-4">
            <BaseButton variant="secondary">Отмена</BaseButton>
            <BaseButton variant="primary">Опубликовать</BaseButton>
        </div>
        <CommentItem 
            v-for="comment in card.comments" 
            :key="comment.id" 
            :image-url="comment.avatarUrl"
            :alt="comment.userName"
            :name="comment.userName"
            :comment="comment.comment"
            :created-at="comment.createdAt"
        />
    </div>
</template>

<style scoped lang="scss"></style>