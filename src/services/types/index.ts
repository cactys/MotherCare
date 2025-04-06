export type ComplexObject = {
  currentPage: string;
  setCurrentPage: (arg0: string) => void;
};

export type TPage = {
  home: React.ReactElement;
}

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
  sliderToShow: number;
  autoplay?: boolean;
  speed?: number;
  className?: string;
  infiniteLoop?: boolean;
  classNameBtn?: string;
  classNameIcon?: string;
  classNameIconPrev?: string;
  classNameList?: string;
  nextArrow?: JSX.Element;
  prevArrow?: JSX.Element;
  children: JSX.Element;
};
