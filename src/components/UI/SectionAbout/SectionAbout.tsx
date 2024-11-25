import { LazyShowY } from '../LazyShow/LazyShow';
import styles from './SectionAbout.module.css';

import heroImage from '@assets/images/hero_image.webp';

const SectionAbout = () => {
  return (
    <section className={styles.sectionAbout}>
      <LazyShowY className={styles.container} >
        <>
          <div className={styles.cardAbout}>
            <div className={styles.mainContent}>
              <h2 className={styles.title}>Примите минимализм</h2>
              <h3 className={styles.subTitle}>
                Стильная одежда для мам и малышей
              </h3>
              <p>
                В Mother Care мы переосмысливаем моду материнства, предлагая
                тщательно подобранную одежду для мам и их малышей. Расположенный
                в самом центре города, наш дизайн сочетает минимализм с
                художественными элементами, гарантируя, что каждая вещь будет не
                только стильной, но и функциональной. Наш адаптивный веб-сайт
                улучшает ваш опыт покупок, позволяя вам легко просматривать нашу
                коллекцию на любом устройстве. Присоединяйтесь к нам и радуйтесь
                красоте простоты и радости материнства.
              </p>
            </div>
            <a href="#" className={styles.link}>
              Свяжитесь с нами
            </a>
          </div>
          <figure className={styles.figure}>
            <img alt="О нас" src={heroImage} className={styles.img} />
          </figure>
        </>
      </LazyShowY>
    </section>
  );
};

export default SectionAbout;
