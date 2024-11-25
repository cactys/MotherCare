import { LazyShowY } from '../LazyShow/LazyShow';
import Slider from '../Slider/Slider';
import styles from './SectionProduct.module.css';

const SectionProduct = () => {
  return (
    <section className={styles.sectionProduct}>
      <LazyShowY className={styles.container}>
        <>
          <div className={styles.cardProduct}>
            <h2 className={styles.title}>Стильный комфорт</h2>
            <h3 className={styles.subTitle}>
              Улучшите свой опыт материнства с помощью наших дизайнов.
            </h3>
          </div>
          <Slider />
        </>
      </LazyShowY>
    </section>
  );
};

export default SectionProduct;
