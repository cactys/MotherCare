import { useContext } from 'react';
import { LazyShowY } from '../LazyShow/LazyShow';
import Card from '../Card/Card';
import styles from './ProductSlider.module.css';
import { CardDataContext } from '@/contexts/CardDataContext';
import Slider from '../Slider/Slider';
import Arrow from '../Arrow/Arrow';
import { SliderContext } from '@/contexts/SliderContext';

const ProductSlider = () => {
  const cardData = useContext(CardDataContext);
  const sliderContext = useContext(SliderContext);

  console.log(sliderContext);

  const settings = {
    autoplay: true,
    speed: 5000,
    nextArrow: (
      <Arrow
        classNameBtn={styles.arrowButton}
        classNameIcon={styles.arrowImage}
        isNext
      />
    ),
    prevArrow: (
      <Arrow
        classNameBtn={styles.arrowButton}
        classNameIcon={`${styles.arrowImage} ${styles.arrowLeft}`}
      />
    ),
  };

  return (
    <LazyShowY>
      <Slider {...settings} className={styles.slider}>
        <ul className={styles.sliderList}>
          {cardData?.map((item) => (
            <li
              key={item.id}
              className={styles.sliderItem}
              style={{
                transform: `translateX(-${
                  sliderContext ? sliderContext?.slide * 340 : ''
                }px)`,
              }}
            >
              <Card
                img={item.img}
                title={item.title}
                subtitle={item.subtitle}
                copy={item.copy}
                isModal={false}
              />
            </li>
          ))}
        </ul>
      </Slider>
    </LazyShowY>
  );
};

export default ProductSlider;
