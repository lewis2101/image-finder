import { computed } from "vue";
import type { IImageCard } from "../types"

export type ImageCardProps = {
    card: IImageCard;
}

export function useImageCard(props: ImageCardProps) {
    const imageCard = computed(() => props.card);

    return {
        imageCard
    }
}