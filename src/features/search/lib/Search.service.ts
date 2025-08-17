import type { ISearchService } from "../types";
import type { IHttpService, IUrlQueryService, QueryObject } from "@/shared";

export class SearchService implements ISearchService {
    private ACTIVE_PINS_QUERY = "active-pins";
    private SEARCH_QUERY = "search";
    private PIN_EXPANDED_QUERY = "pin-expanded";

    constructor(private httpClient: IHttpService, private urlQueryService: IUrlQueryService) {}

    public async getAllPins(): Promise<string[]> {
        try {
            return await this.httpClient.get<string[]>("/pins");
        } catch {
            console.error("Failed to fetch pins");
            return [];
        }
        
    }

    public getActivePinsByQuery(): string[] {
        const value = this.urlQueryService.getValueByQuery<string[]>(this.ACTIVE_PINS_QUERY);
        if (Array.isArray(value)) {
            return value;
        } 
        return value ? [value] : [];
    }

    public getSearchByQuery(): string {
        return this.urlQueryService.getValueByQuery<string>(this.SEARCH_QUERY) || "";
    }

    public getIsExpanded(): boolean {
        const query = this.urlQueryService.getQuery();
        return query[this.PIN_EXPANDED_QUERY] === "true" || false;
    }

    public getQueryWithIsExpanded(value: boolean): QueryObject<string> {
        return this.urlQueryService.getDesctructuredQueryValue(this.PIN_EXPANDED_QUERY, String(value));
    }

    public getQueryWithActivePins(pins: string[]): QueryObject<string> {
        return this.urlQueryService.getDesctructuredQueryValue(this.ACTIVE_PINS_QUERY, pins.join(",") || undefined);
    }

    public getQueryWithSearch(search: string): QueryObject<string> {
        return this.urlQueryService.getDesctructuredQueryValue(this.SEARCH_QUERY, search || undefined);
    }

}