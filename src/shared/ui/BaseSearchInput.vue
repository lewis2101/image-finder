<script setup lang="ts">
import { BaseSvgIcon} from "@/shared";

const model = defineModel<string>({
    required: true,
})

</script>

<template>
    <div class="relative w-full h-[40px]">
        <BaseSvgIcon name="search" class="absolute left-[10px] top-[50%] translate-y-[-50%]" />
        <input 
            v-model="model" 
            type="text" 
            placeholder="Поиск" 
            class="w-full h-full bg-gray-100 placeholder:text-gray-400 placeholder:text-b32 
            placeholder:leading-14 placeholder:font-500 rounded-6 px-8 border-0 focus:outline-1 focus:outline-primary"
            >
        <BaseSvgIcon 
            v-if="model.length" 
            name="cross" 
            class="absolute py-[10px] px-[10px] right-0 top-[50%] translate-y-[-50%] cursor-pointer"
            @click.stop="model = ''"
        />
    </div>
</template>
<style scoped lang="scss"></style>