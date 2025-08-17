import type { IImageCard } from "@/widgets";

export interface IImageService {
    filterImagesByPins(images: IImageCard[], activePins: string[]): IImageCard[];
    filterImagesBySearch(images: IImageCard[], search: string): IImageCard[];
    getAllImages(): Promise<IImageCard[]>;
}