import { useContext, useState } from 'react';
import IconSvg from '../IconSvg/IconSvg';
import { LazyShowY } from '../LazyShow/LazyShow';
import Card from '../Card/Card';
import styles from './Slider.module.css';
import { CardDataContext } from '@/contexts/CardDataContext';

const Slider = () => {
  const cardData = useContext(CardDataContext);
  const [slider, setSlider] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  

  return (
    <LazyShowY className={styles.slider}>
      <>
        <button className={styles.arrowButton} type="button">
          Arrow Left
          <IconSvg
            className={`${styles.arrowImage} ${styles.arrowLeft}`}
            id="arrow-svg"
          />
        </button>
        <ul className={styles.sliderList}>
          {cardData?.map((item) => (
            <li key={item.id} className={styles.sliderItem}>
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
        <button className={styles.arrowButton} type="button">
          Arrow Right
          <IconSvg className={styles.arrowImage} id="arrow-svg" />
        </button>
      </>
    </LazyShowY>
  );
};

export default Slider;
