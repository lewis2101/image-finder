import {computed} from "vue";

export type PinsBlockProps = {
    pins: string[],
    activePins: string[],
    show: boolean,
    isLoading?: boolean;
}

export function usePinsBlock(props: PinsBlockProps) {
    const pins = computed(() => props.pins);
    const activePins = computed(() => props.activePins);
    const isExpandedFilter = computed(() => props.show);
    const isLoading = computed(() => props.isLoading ?? false)

    return {
        isExpandedFilter,
        pins,
        activePins,
        isLoading
    }
}