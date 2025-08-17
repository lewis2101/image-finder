import type { IImageCard } from "@/widgets";
import type { IImageService } from "../types";
import type { IHttpService } from "@/shared";

export class ImageService implements IImageService {
    constructor(private httpClient: IHttpService) {}

    public async getAllImages(): Promise<IImageCard[]> {
        try {
            return await this.httpClient.get<IImageCard[]>("/all-images");
        } catch {
            console.error("Failed to fetch images");
            return [];
        }
    }

    public filterImagesByPins(images: IImageCard[], activePins: string[]): IImageCard[] {
        if (!activePins.length) {
            return images;
        }
        return images.filter((image) => image.pins.some((pin) => activePins.includes(pin)));
    }

    public filterImagesBySearch(images: IImageCard[], search: string): IImageCard[] {
        if (!search) {
            return images;
        }
        return images.filter((image) => image.title.toLowerCase().includes(search.toLowerCase()));
    }

}