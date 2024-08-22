// Parallax effect hook for App.js and Parallax.jsx
import { useEffect } from "react";

const useParallaxEffect = () => {
  useEffect(() => {
    const wrapper = document.querySelector(".wrapper");
    const parallax = document.querySelector(".parallax");

    const handleScroll = () => {
      const scrollY = wrapper?.scrollTop || 0;
      const opacity = Math.max(0, 1 - scrollY / 500);
      if (parallax) {
        parallax.style.opacity = opacity;
      }
    };

    if (wrapper) {
      wrapper.addEventListener("scroll", handleScroll);
    }

    // Clean up event listener
    return () => {
      if (wrapper) {
        wrapper.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
};

export default useParallaxEffect;
