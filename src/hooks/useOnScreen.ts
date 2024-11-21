import type { MutableRefObject } from 'react';
import { useEffect, useState } from 'react';

export const useOnScreen = (
  ref: MutableRefObject<HTMLDivElement | null>,
  rootMargin = '0px'
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.unobserve(ref.current as Element);
    };
  }, [ref, rootMargin]);

  return isIntersecting;
};
