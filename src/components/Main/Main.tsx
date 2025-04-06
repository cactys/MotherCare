import { useContext } from 'react';
import type { ComplexObject, TPage } from '@/services/types';
import { CurrentPageContext } from '@/contexts/CurrentPageContext';
import Home from '@/pages/Home/Home';
import styles from './Main.module.css';
import NotFound from '@/pages/NotFound/NotFound';

const Main = () => {
  const { currentPage } = useContext(CurrentPageContext) as ComplexObject;

  const page: TPage = {
    home: <Home />,
  };

  const currentComponent = page[currentPage as keyof TPage] || <NotFound />;

  return <main className={styles.main}>{currentComponent}</main>;
};

export default Main;
