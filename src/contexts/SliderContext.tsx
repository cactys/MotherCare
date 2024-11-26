import { TComplexSliderContextObject } from '@/services/types';
import {
  createContext,
  ReactElement,
  useContext,
  useMemo,
  useState,
} from 'react';
import { CardDataContext } from './CardDataContext';

export const SliderContext = createContext<TComplexSliderContextObject | null>(
  null
);

export const SliderContextProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const cardData = useContext(CardDataContext);

  const [slide, setSlide] = useState(0);
  // const [slidesCount, setSlidesCount] = useState(0);
  // const [slideNumber, setSlideNumber] = useState(0);

  const changeSlide = (direction: number = 1) => {
    let sliderNumber = 0;

    if (slide + direction < 0) {
      sliderNumber = (cardData ? cardData.length : 0) - 1;
    } else {
      sliderNumber = (slide + direction) % (cardData ? cardData.length : 0);
    }

    setSlide(sliderNumber);
  };

  const goToSlide = (number: number) => {
    setSlide(number % (cardData ? cardData.length : 0));
  };

  const valueSliderContext = useMemo(
    () => ({
      goToSlide,
      changeSlide,
      // slidesCount,
      // slideNumber,
      // setSlidesCount,
      // setSlideNumber,
      slide,
    }),
    [slide]
  );

  return (
    <SliderContext.Provider value={valueSliderContext}>
      {children}
    </SliderContext.Provider>
  );
};
