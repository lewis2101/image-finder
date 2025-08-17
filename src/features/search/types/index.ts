import type { QueryObject } from "@/shared";

export interface ISearchService {
    getAllPins(): Promise<string[]>;
    getActivePinsByQuery(): string[];
    getSearchByQuery(): string;
    getIsExpanded(): boolean;
    getQueryWithIsExpanded(value: boolean): QueryObject<string>;
    getQueryWithSearch(search: string): QueryObject<string>;
    getQueryWithActivePins(pins: string[]): QueryObject<string>;
}