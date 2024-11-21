import styles from './Button.module.css';

const Button = ({
  children,
  other,
  width,
}: {
  children: string;
  other?: boolean;
  width?: string;
}) => {
  return (
    <a
      href="#"
      className={`${styles.button} ${other ? styles.otherButton : ''}`}
      style={{ width: `${width}%` }}
    >
      {children}
    </a>
  );
};

export default Button;
