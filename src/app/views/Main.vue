<script setup lang="ts">
import { BaseButton } from "@/shared";

</script>

<template>
<div>
    <div class="w-full h-[150px] bg-white flex flex-col items-center justify-center">
        <div class="text-b-24 leading-24 font-700 mb-4">
            Главная
        </div>
        <RouterLink to="/blog?pin-expanded=true">
            <BaseButton variant="secondary" >
                Перейти в блог
            </BaseButton>        
        </RouterLink>
    </div>
</div>
</template> 
      
<style scoped>

</style>