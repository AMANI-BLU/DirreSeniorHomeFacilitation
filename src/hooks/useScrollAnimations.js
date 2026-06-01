import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollAnimations() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((element) => element.classList.remove("is-visible"));

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    elements.forEach((element, index) => {
      element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);
}
