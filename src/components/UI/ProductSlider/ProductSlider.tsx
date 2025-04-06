import { useContext } from 'react';
import { LazyShowY } from '../LazyShow/LazyShow';
import Card from '../Card/Card';
import { CardDataContext } from '@/contexts/CardDataContext';
import Slider from '../Slider/Slider';

const ProductSlider = () => {
  const cardData = useContext(CardDataContext);

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
