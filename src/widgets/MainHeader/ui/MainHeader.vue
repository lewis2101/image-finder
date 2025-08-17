<script setup lang="ts">
import { BaseHeader } from "@/shared"
import logo from "@/app/assets/logo.png";
import { useMainHeader } from "../model/useMainHeader";

const { navList } = useMainHeader();
</script>

<template>
    <div class="sticky w-full left-0 top-0 z-10">
        <BaseHeader :nav-list="navList">
            <template #logo>
                <div class="w-[150px] h-[27px] object-cover">
                    <img :src="logo" class=" w-full h-full" alt="logo" width="100" height="100">
                </div>
            </template>
        </BaseHeader>
    </div>
</template> 
      
<style scoped>

</style>