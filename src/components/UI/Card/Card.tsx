import styles from './Card.module.css';
import { LazyShowX } from '../LazyShow/LazyShow';
import { TCard } from '@/services/types';

const Card = ({ img, title, subtitle, copy, isModal }: TCard) => {
  return (
    <LazyShowX className={styles.card}>
      <article className={styles.article}>
        <figcaption className={styles.figure}>
          <img src={`${img}`} alt={title} className={styles.img} />
        </figcaption>
        <div className={styles.body}>
          <h2 className={styles.cardTitle}>
            {title}{' '}
            <svg
              className={styles.cardSvg}
              viewBox="0 0 10 17"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.25111 16.0843c-.320261 0-.640343-.1222-.88465-.3663-.488613-.4886-.488613-1.2807 0-1.7693l5.90679-5.90664L.36646 2.13545c-.488613-.48844-.488613-1.28069 0-1.769124.488434-.488435 1.28069-.488435 1.76912 0L8.92684 7.15759c.48844.48843.48844 1.28068 0 1.7693L2.13558 15.7181c-.24412.244-.56421.3662-.88447.3662Z" />
            </svg>
          </h2>
          <h3 className={styles.cardSubtitle}>{subtitle}</h3>
          {isModal && <p className={styles.cardCopy}>{copy}</p>}
          {!isModal && (
            <a href="#" className={styles.cardLink}>
              Ссылка
            </a>
          )}
        </div>
      </article>
    </LazyShowX>
  );
};

export default Card;
