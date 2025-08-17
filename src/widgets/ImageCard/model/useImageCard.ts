import { computed } from "vue";
import { IImageCard } from "../types"

export type ImageCardProps = {
    card: IImageCard;
}

export function useImageCard(props: ImageCardProps) {
    const imageCard = computed(() => props.card);

    return {
        imageCard
    }
}