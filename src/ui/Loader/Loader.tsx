import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.container} data-testid="loader">
      <div className={styles.loader} />
    </div>
  );
};

export default Loader;
