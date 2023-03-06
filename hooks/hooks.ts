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

export const useScrollY = (): number => {
  const isBrowser = typeof window !== 'undefined';
  
  const [scrollY, setScrollY] = useState<number>(0);
 
  const handleScroll = () => {
    const currentScrollY = isBrowser ? window.scrollY : 0;
    setScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
};