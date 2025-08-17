import type { DirectiveBinding } from "vue";

type ClickAwayHandler = (event: MouseEvent) => void;

interface ClickAwayEl extends HTMLElement {
  clickAwayHandler?: (event: MouseEvent) => void;
}

export default {
  beforeMount(el: ClickAwayEl, binding: DirectiveBinding<ClickAwayHandler>) {
    const handler = (event: MouseEvent) => {
      if (!(el === event.target || el.contains(event.target as Node))) {
        binding.value(event);
      }
    };
    el.clickAwayHandler = handler;
    document.addEventListener("click", handler);
  },
  unmounted(el: ClickAwayEl) {
    if (el.clickAwayHandler) {
      document.removeEventListener("click", el.clickAwayHandler);
      delete el.clickAwayHandler;
    }
  },
};
