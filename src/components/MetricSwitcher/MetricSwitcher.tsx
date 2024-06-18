import styles from './MetricSwitcher.module.scss';
import { useUnit } from '../../hooks/useUnit.tsx';
import { Unit } from '../../enum/UnitEnum.tsx';

const MetricSwitcher = () => {
  const { unit, changeUnit } = useUnit();

  return (
    <div className={styles['metric']}>
      <div className={styles['metric__radio-group']}>
        <input
          className={styles['metric__radio-input']}
          type="radio"
          id="celsius"
          name="size"
          checked={unit === Unit.CELSIUS}
          onChange={() => changeUnit(Unit.CELSIUS)}
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
          checked={unit === Unit.FAHRENHEIT}
          onChange={() => changeUnit(Unit.FAHRENHEIT)}
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
