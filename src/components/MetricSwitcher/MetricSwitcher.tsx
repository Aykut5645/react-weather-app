import styles from './MetricSwitcher.module.scss';
import { useUnit } from '../../hooks/useUnit.tsx';

const MetricSwitcher = () => {
  const { unit, changeUnit } = useUnit();

  const handleUnitChange = () => {
    changeUnit();
  };

  return (
    <div className={styles['metric']}>
      <div className={styles['metric__radio-group']}>
        <input
          className={styles['metric__radio-input']}
          type="radio"
          id="celsius"
          name="size"
          checked={unit}
          onChange={handleUnitChange}
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
          checked={!unit}
          onChange={handleUnitChange}
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
