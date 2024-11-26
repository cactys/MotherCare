import { CardDataContext } from '@/contexts/CardDataContext';
import { SliderContext } from '@/contexts/SliderContext';
import { TSliderProps } from '@/services/types';
import { TouchEvent, useContext, useEffect, useState } from 'react';

const Slider = ({
  children,
  nextArrow,
  prevArrow,
  autoplay,
  speed,
  className,
  sliderToScroll = 1,
}: TSliderProps) => {
  const sliderContext = useContext(SliderContext);
  const cardData = useContext(CardDataContext);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    const touchDown = e.touches[0].clientX;

    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (touchPosition === null) return;

    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction < 10) sliderContext?.changeSlide(sliderToScroll);
    if (direction > -10) sliderContext?.changeSlide(-sliderToScroll);

    setTouchPosition(null);
  };

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      sliderContext?.changeSlide(sliderToScroll);
    }, speed);

    console.log(sliderContext?.slide);

    return () => clearInterval(interval);
  }, [cardData?.length, sliderContext?.slide]);

  return (
    <div
      className={className}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {prevArrow}
      {children}
      {nextArrow}
    </div>
  );
};

export default Slider;
