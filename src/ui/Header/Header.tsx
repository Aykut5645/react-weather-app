import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <h1 className={styles.header}>
      <Link to="/" className={styles.link}>
        Real Time Weather
      </Link>
    </h1>
  );
};

export default Header;
