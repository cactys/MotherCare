import { CurrentPageContextProvider } from '@/contexts/CurrentPageContext';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import Main from '@components/Main/Main';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.page}>
      <Header />
      <CurrentPageContextProvider>
        <Main />
      </CurrentPageContextProvider>
      <Footer />
    </div>
  );
}

export default App;
