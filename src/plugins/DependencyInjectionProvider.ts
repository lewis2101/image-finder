import type { App } from "vue";
import { SearchService, ImageService, type ISearchService, type IImageService } from "@/features";
import { HttpService, type QueryObject, UrlQueryService, type IHttpService, type IUrlQueryService } from "@/shared";
import { DependencyInjectionKeys } from "./DependencyInjectionKeys";
import router from "@/app/router";

function getRouteQuery(): QueryObject {
    return router.currentRoute.value.query as QueryObject;
};

export default {
    install(app: App) {
        const httpClient = new HttpService();
        const urlQueryService = new UrlQueryService(getRouteQuery);
        const searchService = new SearchService(httpClient, urlQueryService);
        const imageService = new ImageService(httpClient);

        app.provide<ISearchService>(DependencyInjectionKeys.searchService, searchService);
        app.provide<IUrlQueryService>(DependencyInjectionKeys.urlQueryService, urlQueryService);
        app.provide<IImageService>(DependencyInjectionKeys.imageService, imageService);
        app.provide<IHttpService>(DependencyInjectionKeys.httpClient, httpClient);
    }
}