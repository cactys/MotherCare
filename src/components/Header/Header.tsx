import styles from './Header.module.css';
import Button from '../UI/Button/Button';
import HeaderLink from '../UI/HeaderLink/HeaderLink';
import IconSvg from '../UI/IconSvg/IconSvg';

import { headerMockData } from '@/mocks/headerMockData';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <IconSvg id="logo-svg" className={styles.logo} />
        <div className={styles.navContainer}>
          <ul className={styles.headerNav}>
            {headerMockData.map((item: string, index: number) => (
              <li key={index}>
                <HeaderLink>{item}</HeaderLink>
              </li>
            ))}
          </ul>
          <Button>Контакты</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
