import type { IStorageService } from "../types";

export class StorageService implements IStorageService {
    constructor() {}

    public getValueByQuery<T>(query: Record<string, string>, key: string): T | null {
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

    public getDesctructuredQueryValue(query: Record<string, string>, key: string, value: unknown): Record<string, string | undefined> {
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