import { DependencyInjectionKeys } from '@/plugins';
import { defineStore } from 'pinia'
import { ref, inject, watch } from 'vue'
import { ISearchService } from '../types';
import { useRouter } from 'vue-router';

export const useSearchImageStore = defineStore('searchImage', () => {
    const searchService = inject(DependencyInjectionKeys.searchService) as ISearchService;
    const router = useRouter();

    const searchModel = ref(searchService.getSearchByQuery());
    const activePins = ref<string[]>(searchService.getActivePinsByQuery());

    const refreshSearchQuery = () => {
        router.replace({ 
            ...router.currentRoute.value, 
            query: searchService.getQueryWithSearch(searchModel.value)
        })
    };

    const refreshPinsQuery = () => {
        router.replace({ 
            ...router.currentRoute.value, 
            query: searchService.getQueryWithActivePins(activePins.value)
        })
    };

    watch(searchModel, () => refreshSearchQuery());
    watch(activePins, () => refreshPinsQuery(), {
        deep: true
    });

    return {
        searchModel,
        activePins,
    }
});