import Button from '../Button/Button';
import { LazyShowY } from '../LazyShow/LazyShow';
import styles from './SectionMain.module.css';

const SectionMain = () => {
  return (
    <section className={styles.sectionMain}>
      <LazyShowY className={styles.container} >
        <>
          <div className={styles.header}>
            <h1 className={styles.title}>Стильный комфорт</h1>
            <p className={styles.subTitle}>Откройте для себя моду</p>
          </div>
          <div className={styles.buttonContainer}>
            <Button other>Вся продукция</Button>
          </div>
        </>
      </LazyShowY>
    </section>
  );
};

export default SectionMain;
