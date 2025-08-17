<script setup lang="ts">
import { type IImageCard, CommentItem, type IImageCardComment } from "@/widgets";
import { BaseImageOption, BaseImage, BasePin, BaseTextArea, BaseButton, type IStorageService, getRandomUserAvatar } from "@/shared";
import { ref, inject, onMounted, shallowReactive, computed } from "vue";
import { DependencyInjectionKeys } from "@/plugins";

const COMMENT_MAX_LENGTH = 250;
const DEFAULT_USER_NAME = "Мустафаев Баука";
const COMMENT_LOCAL_STORAGE_KEY = "comments";

const localStorageService = inject(DependencyInjectionKeys.localStorageService) as IStorageService;

const props = defineProps<{
    card: IImageCard;
}>();

const commentModel = ref("");
const showButtons = ref(false);

const myComments = shallowReactive<IImageCardComment[]>([]);

const getLocalComments = () => {
    return localStorageService.get<Record<string, IImageCardComment[]>>(COMMENT_LOCAL_STORAGE_KEY) || {};
}

const addComment = () => {
    const data: IImageCardComment = {
        id: Date.now(),
        userName: DEFAULT_USER_NAME,
        comment: commentModel.value,
        createdAt: new Date(),
        avatarUrl: getRandomUserAvatar(DEFAULT_USER_NAME)
    };
    const comments = getLocalComments();
    const newStorageData = {
        ...comments,
        [props.card.id]: [...(comments[props.card.id] || []), data]
    }
    localStorageService.set(COMMENT_LOCAL_STORAGE_KEY, newStorageData);
    
    myComments.push(data);
    commentModel.value = "";
}

const deleteComment = (comment: IImageCardComment) => {
    const comments = getLocalComments();
    const newComments = myComments.filter((item) => item.id !== comment.id ) || [];
    const newStorageData = {
        ...comments,
        [props.card.id]: newComments
    }

    localStorageService.set(COMMENT_LOCAL_STORAGE_KEY, newStorageData);
    myComments.splice(0, myComments.length, ...newComments);
}

const assignedComments = computed(() => [...props.card.comments, ...myComments]);

onMounted(() => {
    const comments = getLocalComments();
    const cardComment = comments[props.card.id] || [];
    if (cardComment.length) {
        myComments.push(...cardComment);
    }
})

</script>

<template>
    <form @submit.prevent="addComment">
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
            <BaseButton variant="secondary" @click="commentModel = ''">Отмена</BaseButton>
            <BaseButton variant="primary" type="submit" @click="addComment">Опубликовать</BaseButton>
        </div>
        <CommentItem 
            v-for="comment in assignedComments" 
            :key="comment.id" 
            :image-url="comment.avatarUrl"
            :alt="comment.userName"
            :name="comment.userName"
            :comment="comment.comment"
            :created-at="comment.createdAt"
            :is-my-comment="comment.userName === DEFAULT_USER_NAME"
            @delete="deleteComment(comment)"
        />
    </form>
</template>

<style scoped lang="scss"></style>