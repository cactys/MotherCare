import styles from './Footer.module.css';
import IconSvg from '../UI/IconSvg/IconSvg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerColumn}>
            <IconSvg id="logo-svg" className={styles.logo} />
            <p className={styles.description}>
              Магазин натуральной косметики для мам и малышей
            </p>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Навигация</h3>
            <ul className={styles.footerNav}>
              <li><a href="#" className={styles.footerLink}>Домой</a></li>
              <li><a href="#" className={styles.footerLink}>О Нас</a></li>
              <li><a href="#" className={styles.footerLink}>Продукция</a></li>
              <li><a href="#" className={styles.footerLink}>Контакты</a></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Контакты</h3>
            <ul className={styles.contactList}>
              <li>
                <IconSvg id="phone-svg" className={styles.contactIcon} />
                <a href="tel:+79999999999" className={styles.contactLink}>+7 (999) 999-99-99</a>
              </li>
              <li>
                <IconSvg id="email-svg" className={styles.contactIcon} />
                <a href="mailto:info@mothercare.ru" className={styles.contactLink}>info@mothercare.ru</a>
              </li>
              <li>
                <IconSvg id="location-svg" className={styles.contactIcon} />
                <span className={styles.contactText}>г. Москва, ул. Примерная, д. 1</span>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Социальные сети</h3>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>
                <IconSvg id="vk-svg" className={styles.socialIcon} />
              </a>
              <a href="#" className={styles.socialLink}>
                <IconSvg id="telegram-svg" className={styles.socialIcon} />
              </a>
              <a href="#" className={styles.socialLink}>
                <IconSvg id="whatsapp-svg" className={styles.socialIcon} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>© 2024 MotherCare. Все права защищены</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
