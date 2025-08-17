export type HttpEndpoints = "/pins" | "/all-images" | "/images" | "/commentaries" | "comment";

export type QueryObject<T = any> = Record<string, T | undefined>;

export interface IHttpService {
    get<T>(path: HttpEndpoints): Promise<T>;
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