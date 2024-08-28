import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

const overscrollOptions = {
  enable: true,
  effect: "bounce",
  damping: 0.15,
  maxOverscroll: 150,
  glowColor: "#fff",
};

const options = {
  damping: 0.09,
  plugins: {
    overscroll: { ...overscrollOptions },
  },
};

const Scroll = () => {
  useEffect(() => {
    Scrollbar.use(OverscrollPlugin);
    const wrapperElement = document.querySelector(".wrapper");
    if (wrapperElement) {
      const scrollbar = Scrollbar.init(wrapperElement, options);

      return () => {
        if (scrollbar) scrollbar.destroy();
      };
    }
  }, []);

  return null;
};

export default Scroll;
