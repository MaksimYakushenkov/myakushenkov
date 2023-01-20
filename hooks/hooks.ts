import { useEffect, useState } from "react";


export const useInnerWidth = (): number => {
  const [windowSize, setWindowSize] = useState<number>(0);
  const detectSize = () => setWindowSize(window.innerWidth);

  const isBrowser = typeof window !== 'undefined';

  useEffect(() => {
    detectSize();
    if (isBrowser) {
      window.addEventListener('resize', detectSize);
    }
    return () => window.removeEventListener('resize', detectSize);
  }, [isBrowser]);
  

  return windowSize;
};