import styles from './HeaderLink.module.css';

const HeaderLink = ({ children }: { children: string }) => {
  console.log(children);
  return (
    <a href="#" className={styles.headerLink}>
      {children}
    </a>
  );
};

export default HeaderLink;
