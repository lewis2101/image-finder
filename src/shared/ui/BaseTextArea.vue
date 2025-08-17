<script setup lang="ts">
import { ref, defineModel, defineEmits } from "vue";

defineProps<{
    maxLength?: number;
}>();

const emit = defineEmits<{
    (e: "focus"): void;
    (e: "blur"): void;
}>();

const showCounter = ref(false);

const model = defineModel<string>({
    required: true
});

const sizeStyle = ref("");

const onFocus = () => {
    showCounter.value = true;
    sizeStyle.value = "h-[130px]";
    emit("focus");
};

const onBlur = () => {
    if (model.value.length === 0) {
        sizeStyle.value = "";
        showCounter.value = false;
    }
    emit("blur");   
};

</script>

<template>
    <div class=w-full>
        <textarea 
            v-model="model"
            :class="[
                'w-full resize-none h-14 outline-primary py-4 px-4 border-[1px] border-solid',
                maxLength && model.length >= maxLength ? 'border-error' : 'border-gray-200',
                sizeStyle
            ]" 
            placeholder="Введите комментарий" 
            @focus="onFocus"
            @blur="onBlur"
        />
        <div v-if="showCounter && maxLength" class="text-b-12 leading-12 font-500 text-gray-600">
            {{ model.length }} / {{ maxLength }}
        </div>
    </div>
</template>

<style scoped lang="scss"></style>