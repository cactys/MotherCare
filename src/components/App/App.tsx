import { CurrentPageContextProvider } from '@/contexts/CurrentPageContext';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import Main from '@components/Main/Main';
import styles from './App.module.css';
import { CardDataContextProvider } from '@/contexts/CardDataContext';
import { SliderContextProvider } from '@/contexts/SliderContext';

function App() {
  return (
    <div className={styles.page}>
      <Header />
      <CurrentPageContextProvider>
        <CardDataContextProvider>
          <SliderContextProvider>
            <Main />
          </SliderContextProvider>
        </CardDataContextProvider>
      </CurrentPageContextProvider>
      <Footer />
    </div>
  );
}

export default App;
