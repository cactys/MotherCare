export type ComplexObject = {
  currentPage: string;
  setCurrentPage: (arg0: string) => void;
};

export type TComplexSliderContextObject = {
  goToSlide: (arg0: number) => void;
  changeSlide: (arg0: number) => void;
  slide: number;
};

export type TCard = {
  id?: string;
  img: string;
  title: string;
  subtitle: string;
  copy: string;
  isModal?: boolean;
};

export type TSliderProps = {
  sliderToScroll?: number | undefined;
  autoplay?: boolean;
  speed?: number | undefined;
  className?: string;
  nextArrow?: JSX.Element;
  prevArrow?: JSX.Element;
  children: JSX.Element;
};
