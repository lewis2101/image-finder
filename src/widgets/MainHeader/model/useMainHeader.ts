import { reactive } from "vue";

export function useMainHeader() {
    const navList = reactive([
        {
            title: "Главная",
            to: "/"
        },
        {
            title: "Блог",
            to: "/blog?pin-expanded=true"
        }
    ]);

    return {
        navList
    }
}