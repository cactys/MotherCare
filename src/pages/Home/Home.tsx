import SectionMain from '@/components/UI/SectionMain/SectionMain';
import SectionAbout from '@/components/UI/SectionAbout/SectionAbout';

import styles from './Home.module.css';
import SectionProduct from '@/components/UI/SectionProduct/SectionProduct';

const Home = () => {
  return (
    <>
      <SectionMain />
      <SectionAbout />
      <SectionProduct />
    </>
  );
};

export default Home;
