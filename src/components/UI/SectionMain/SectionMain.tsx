import Button from '../Button/Button';
import styles from './SectionMain.module.css';

const SectionMain = () => {
  return (
    <section className={styles.sectionMain}>
      <div className={styles.container}>
        <h1>Стильный комфорт</h1>
        <p>Откройте для себя моду</p>
        <div className={styles.buttonContainer}>
          <Button other>Вся продукция</Button>
        </div>
      </div>
    </section>
  );
};

export default SectionMain;
