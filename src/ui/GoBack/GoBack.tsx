import { Link } from 'react-router-dom';
import styles from './Goback.module.scss';

const GoBack = () => {
  return (
    <div className={styles['container']}>
      <Link to="/" className={styles['btn-text']}>
        &larr; Go back
      </Link>
    </div>
  );
};

export default GoBack;
