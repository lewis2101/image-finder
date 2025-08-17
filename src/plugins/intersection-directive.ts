import type { DirectiveBinding } from "vue";

type ObserverValue = {
    callback: () => void;
    id: string;
    once?: boolean;
}

const observerElementsMap: Map<Element, ObserverValue> = new Map();

const observer = new IntersectionObserver((entries: IntersectionObserverEntry[], obs: IntersectionObserver) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetValue = observerElementsMap.get(entry.target);
          if (targetValue) {
            targetValue.callback();
            targetValue.once && obs.unobserve(entry.target);
          }
        }
      }, {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      });
});

function registerObserver(el: Element, value: ObserverValue) {
    observerElementsMap.set(el, value);
    observer.observe(el);
}

export default {
    mounted(el: HTMLElement, binding: DirectiveBinding<ObserverValue>) {
        if (binding.value) {
            registerObserver(el, binding.value);
        }
    },
};
