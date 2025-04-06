import { useContext } from 'react';
import { LazyShowY } from '../LazyShow/LazyShow';
import Card from '../Card/Card';
import styles from './ProductSlider.module.css';
import { CardDataContext } from '@/contexts/CardDataContext';
import Slider from '../Slider/Slider';
import { SliderContext } from '@/contexts/SliderContext';

const ProductSlider = () => {
  const cardData = useContext(CardDataContext);
  const sliderContext = useContext(SliderContext);

  const settings = {
    autoplay: true,
    speed: 5000,
    sliderToShow: 3,
    infiniteLoop: true,
    classNameBtn: `${styles.arrowButton}`,
    classNameIcon: `${styles.arrowImage}`,
    classNameIconPrev: `${styles.arrowImage} ${styles.arrowLeft}`,
    classNameList: `${styles.sliderList}`,
  };

  return (
    <LazyShowY>
      <Slider>
        {cardData
          ? cardData.map((item) => (
              <Card key={item.id} {...item} isModal={false} />
            ))
          : []}
      </Slider>
    </LazyShowY>
  );
};

export default ProductSlider;
