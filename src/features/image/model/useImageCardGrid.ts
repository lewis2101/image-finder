import { useSearchImageStore } from "@/features/search/stores/useSearchImageStore";
import { DependencyInjectionKeys } from "@/plugins";
import type { IImageCard } from "@/widgets"
import { storeToRefs } from "pinia";
import { reactive, inject, onMounted, ref, computed } from "vue";
import type { IImageService } from "../types";

export function useImageCardGrid() {
    const imageService = inject(DependencyInjectionKeys.imageService) as IImageService;
    const searchImageStore = useSearchImageStore();

    const { searchModel, activePins } = storeToRefs(searchImageStore);
    const cards = reactive<IImageCard[]>([]);
    
    const isShowExternalCardModal = ref(false);
    const currentExternalCard = ref<IImageCard>();
    const imageLoading = ref(false);

    const fetchImages = async () => {
        cards.splice(0, cards.length);
        imageLoading.value = true;

        const images = await imageService.getAllImages();
        cards.push(...images);

        imageLoading.value = false;
    };

    const showCardModal = (card: IImageCard) => {
        currentExternalCard.value = card;
        isShowExternalCardModal.value = true;
    };

    const getFilteredImages = () => {
        const filteredByPins = imageService.filterImagesByPins(cards, activePins.value);
        const filteredBySearch = imageService.filterImagesBySearch(filteredByPins, searchModel.value);
        return filteredBySearch;
    }

    const imageCards = computed(() => getFilteredImages());

    onMounted(async () => {
        await fetchImages();
    });

    
    return {
        imageCards,
        imageLoading,
        isShowExternalCardModal,
        showCardModal,
        currentExternalCard,
    }
}