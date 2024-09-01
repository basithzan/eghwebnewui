import { useEffect, useState } from "react";

export const useWindowResize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window?.innerWidth : 1440,
    height: typeof window !== "undefined" ? window?.innerHeight : 1024,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return { width: windowSize?.width, height: windowSize?.height };
};
