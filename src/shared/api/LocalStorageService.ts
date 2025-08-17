import type { IStorageService } from "../types";

export class LocalStorageService implements IStorageService {
    private LOCALE_STORAGE_KEY_PREFIX = "image-finder-";

    constructor() {}

    public set<T>(key: string, value: T): void {
        try {
        const serialized = JSON.stringify(value);
        localStorage.setItem(this.LOCALE_STORAGE_KEY_PREFIX + key, serialized);
        } catch (error) {
        console.error("Error saving to localStorage:", error);
        }
    }

    public get<T>(key: string): T | null {
        try {
        const item = localStorage.getItem(this.LOCALE_STORAGE_KEY_PREFIX + key);
        return item ? (JSON.parse(item) as T) : null;
        } catch (error) {
        console.error("Error reading from localStorage:", error);
        return null;
        }
    }

    public remove(key: string): void {
        localStorage.removeItem(this.LOCALE_STORAGE_KEY_PREFIX + key);
    }

    public clear(): void {
        localStorage.clear();
    }

    public has(key: string): boolean {
        return localStorage.getItem(this.LOCALE_STORAGE_KEY_PREFIX + key) !== null;
    }

}