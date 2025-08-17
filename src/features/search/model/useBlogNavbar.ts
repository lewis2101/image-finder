import { onMounted, ref, watch, inject, reactive, computed } from "vue";
import { useRouter } from "vue-router";
import { DependencyInjectionKeys } from "@/plugins";
import type { ISearchService } from "../types";
import { useSearchImageStore } from "../stores/useSearchImageStore";
import { storeToRefs } from "pinia";
import { debounce } from "@/shared";

const DEBOUNCE_DELAY = 300;

export function useBlogNavbar() {
    const searchImageStore = useSearchImageStore();
    const { searchModel, activePins } = storeToRefs(searchImageStore);

    const searchService = inject(DependencyInjectionKeys.searchService) as ISearchService;
    const router = useRouter();

    const isExpandedFilter = ref(searchService.getIsExpanded());
    const pins = reactive<string[]>([]);
    const pinsLoading = ref(false);

    const searchDebouncedUpdate = debounce((value: string) => {
        searchModel.value = value;
    }, DEBOUNCE_DELAY);
    
    const getAllPins = async () => {
        pinsLoading.value = true;
        const allPins = await searchService.getAllPins();
        pins.push(...allPins);
        pinsLoading.value = false;
    }

    const handleClickPin = (pin: string) => {
        if (activePins.value.includes(pin)) {
            activePins.value = activePins.value.filter((item) => item !== pin);
        } else {
            activePins.value.push(pin);
        }
    }

    const clearActivePins = () => {
        activePins.value = [];
    }

    const inputModel = computed({
        get: () => searchModel.value,
        set: (value: string) => searchDebouncedUpdate(value)
    })

    onMounted(async () => {
        pins.forEach((pin) => {
            if (pin) {
                activePins.value.push(pin);
            }
        });

        await getAllPins();
    })
    
    watch(isExpandedFilter, () => {
        router.replace({ 
            ...router.currentRoute.value, 
            query: searchService.getQueryWithIsExpanded(isExpandedFilter.value)
        });
    });

    return {
        inputModel,
        isExpandedFilter,
        pins,
        handleClickPin,
        activePins,
        clearActivePins,
        pinsLoading,
    }
};