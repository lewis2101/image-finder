import type { IHttpService, HttpEndpoints } from "../types";
import { allPins } from "../mock/allPins";
import { allImages } from "../mock/allImages";
import { executeWithDelay } from "../utils/executeWithDelay";

const responseMockMapper: Record<HttpEndpoints, any> = {
    "/pins": allPins,
    "/all-images": allImages,
};

export class HttpService implements IHttpService  {
    constructor() {}

    get<T>(path: HttpEndpoints): Promise<T> {
        return executeWithDelay<T>(() => this.getResponseByPath(path));
    }

    private getResponseByPath<T>(path: HttpEndpoints) {
        return responseMockMapper[path] as T;
    }
}