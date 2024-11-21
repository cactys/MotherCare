import { useContext } from 'react';
import type { ComplexObject, TPage } from '@/services/types';
import { CurrentPageContext } from '@/contexts/CurrentPageContext';
import Home from '@/pages/Home/Home';
import styles from './Main.module.css';

const Main = () => {
  const { currentPage } = useContext(CurrentPageContext) as ComplexObject;

  const page: TPage = {
    home: <Home />,
  };

  return <main className={styles.main}>{page[currentPage]}</main>;
};

export default Main;
