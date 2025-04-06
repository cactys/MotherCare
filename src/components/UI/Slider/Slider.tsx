import React, { useState, useEffect, useCallback } from 'react';
import styles from './Slider.module.css';
import classNames from 'classnames';

interface SliderProps {
  children: React.ReactNode[];
  autoplay?: boolean;
  speed?: number;
}

const Slider: React.FC<SliderProps> = ({
  children,
  autoplay = true,
  speed = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(autoplay);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const moveToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
  }, [children.length]);

  const moveToPrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + children.length) % children.length);
  }, [children.length]);

  const moveToIndex = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isAutoplay) {
      intervalId = setInterval(moveToNext, speed);
    }
    return () => clearInterval(intervalId);
  }, [isAutoplay, moveToNext, speed]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
    setIsAutoplay(false);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;

    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        moveToNext();
      } else {
        moveToPrev();
      }
    }
    setTouchStart(null);
    setIsAutoplay(autoplay);
  };

  const getItemClass = (index: number) => {
    if (index === currentIndex) return styles.active;
    if (index === (currentIndex - 1 + children.length) % children.length) return styles.prev;
    if (index === (currentIndex + 1) % children.length) return styles.next;
    return '';
  };

  return (
    <div className={styles.sliderContainer}>
      <div
        className={styles.sliderContent}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {children.map((child, index) => (
          <div
            key={index}
            className={classNames(styles.sliderItem, getItemClass(index))}
          >
            {child}
          </div>
        ))}
      </div>
      <div className={styles.indicators}>
        {children.map((_, index) => (
          <button
            key={index}
            className={classNames(
              styles.indicator,
              index === currentIndex && styles.active
            )}
            onClick={() => moveToIndex(index)}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
