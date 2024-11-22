import LazyShow from '../LazyShow/LazyShow';
import ProductCard from '../ProductCard/ProductCard';
import styles from './SectionProduct.module.css';

const SectionProduct = () => {
  return (
    <section className={styles.sectionProduct}>
      <div className={styles.container}>
        <LazyShow>
          <div className={styles.cardProduct}>
            <h2 className={styles.title}>Стильный комфорт</h2>
            <h3 className={styles.subTitle}>
              Улучшите свой опыт материнства с помощью наших дизайнов.
            </h3>
          </div>
        </LazyShow>
        <LazyShow>
          <ul>
            <ProductCard />
          </ul>
        </LazyShow>
      </div>
    </section>
  );
};

export default SectionProduct;
