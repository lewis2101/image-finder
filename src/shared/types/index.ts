export type HttpEndpoints = "/pins" | "/all-images";

export type QueryObject<T = any> = Record<string, T | undefined>;

export interface IHttpService {
    get<T>(path: HttpEndpoints): Promise<T>;
}

export interface IStorageService {
    set<T>(key: string, value: T): void;
    get<T>(key: string): T | null;
    remove(key: string): void;
    clear(): void;
    has(key: string): boolean;
}

export interface IUrlQueryService {
    getQuery: () => QueryObject;
    getValueByQuery<T>(key: string): T | null;
    getDesctructuredQueryValue<T>(key: string, value: unknown): QueryObject<T>;
}

export type IBasePin = {
    title: string;
    isChecked?: boolean;
    size?: "small" | "medium";
    icon?: boolean;
}