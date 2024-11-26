import { useContext } from 'react';
import IconSvg from '../IconSvg/IconSvg';
import { SliderContext } from '@/contexts/SliderContext';

const Arrow = ({
  classNameBtn,
  classNameIcon,
  isNext,
}: {
  classNameBtn: string;
  classNameIcon: string;
  isNext?: boolean;
}) => {
  const sliderContext = useContext(SliderContext);

  const onChangSlide = () => {
    if (isNext) {
      sliderContext?.changeSlide(1);
    } else {
      sliderContext?.changeSlide(-1);
    }
  };

  return (
    <button className={classNameBtn} type="button" onClick={onChangSlide}>
      Arrow Right
      <IconSvg className={classNameIcon} id="arrow-svg" />
    </button>
  );
};

export default Arrow;
