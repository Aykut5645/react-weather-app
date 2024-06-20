import { Link } from 'react-router-dom';
import styles from './NavButton.module.scss';

const NavButton = ({ text }: { text: string }) => {
  return (
    <div className={styles['container']}>
      <Link to="/" className={styles['btn-text']}>
        &larr; {text}
      </Link>
    </div>
  );
};

export default NavButton;
