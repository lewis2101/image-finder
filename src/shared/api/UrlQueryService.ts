import type { IUrlQueryService, QueryObject } from "../types";

export class UrlQueryService implements IUrlQueryService {
    public getQuery: () => QueryObject;

    constructor(getQuery: () => QueryObject) {
        this.getQuery = getQuery;
    }

    public getValueByQuery<T>(key: string): T | null {
        const query = this.getQuery();
        const value = query[key] || null;

        if (!value) {
            return null;
        }

        const splittedValue = value.split(",");
        if (splittedValue.length > 1) {
            return splittedValue as T;
        }
        return value as T;
    }

    public getDesctructuredQueryValue<T>(key: string, value: unknown): QueryObject<T> {
        const query = this.getQuery();

        let formattedValue: any;
        if (Array.isArray(value)) {
            formattedValue = value.join(",");
        } else if (typeof value === "object") {
            formattedValue = JSON.stringify(value);
        } else {
            formattedValue = value;
        }

        return {
            ...query,
            [key]: formattedValue ?? undefined,
        }
    }

}