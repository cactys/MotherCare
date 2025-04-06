import { useContext } from 'react';
import IconSvg from '../IconSvg/IconSvg';
import { SliderContext } from '@/contexts/SliderContext';

const Arrow = ({
  classNameBtn,
  classNameIcon,
  classNameIconPrev,
  onClickPrev,
  onClickNext,
  isNext,
}: {
  classNameBtn?: string;
  classNameIcon?: string;
  classNameIconPrev?: string;
  onClickPrev?: () => void;
  onClickNext?: () => void;
  isNext?: boolean;
}) => {

  const onChangSlide = () => {
    if (isNext) {
      onClickNext ? onClickNext() : '';
    } else {
      onClickPrev ? onClickPrev() : '';
    }
  };

  return (
    <button className={classNameBtn} type="button" onClick={onChangSlide}>
      Arrow Right
      <IconSvg
        className={`${classNameIcon} ${
          classNameIconPrev ? classNameIconPrev : ''
        }`}
        id="arrow-svg"
      />
    </button>
  );
};

export default Arrow;
