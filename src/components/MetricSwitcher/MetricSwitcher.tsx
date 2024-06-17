import styles from './MetricSwitcher.module.scss';

const MetricSwitcher = () => {
  return (
    <div className={styles['metric']}>
      <div className={styles['metric__radio-group']}>
        <input
          className={styles['metric__radio-input']}
          type="radio"
          id="celsius"
          name="size"
        />
        <label htmlFor="celsius" className={styles['metric__radio-label']}>
          <span className={styles['metric__radio-button']}></span>
          &deg;C
        </label>
      </div>

      <div className={styles['metric__radio-group']}>
        <input
          className={styles['metric__radio-input']}
          type="radio"
          id="fahrenheit"
          name="size"
        />
        <label htmlFor="fahrenheit" className={styles['metric__radio-label']}>
          <span className={styles['metric__radio-button']}></span>
          &deg;F
        </label>
      </div>
    </div>
  );
};

export default MetricSwitcher;
