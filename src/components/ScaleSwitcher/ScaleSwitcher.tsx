import { useScale } from '../../hooks/useScale.tsx';
import { TempScale } from '../../utils/enums.tsx';

import styles from './ScaleSwitcher.module.scss';

const ScaleSwitcher = () => {
  const { scale, changeScale } = useScale();

  return (
    <div className={styles['scale']}>
      <div className={styles['scale__radio-group']}>
        <input
          className={styles['scale__radio-input']}
          type="radio"
          name="size"
          id={TempScale.CELSIUS}
          checked={scale === TempScale.CELSIUS}
          onChange={() => changeScale(TempScale.CELSIUS)}
        />
        <label
          htmlFor={TempScale.CELSIUS}
          className={styles['scale__radio-label']}
        >
          <span className={styles['scale__radio-button']}></span>
          &deg;C
        </label>
      </div>

      <div className={styles['scale__radio-group']}>
        <input
          className={styles['scale__radio-input']}
          type="radio"
          name="size"
          id={TempScale.FAHRENHEIT}
          checked={scale === TempScale.FAHRENHEIT}
          onChange={() => changeScale(TempScale.FAHRENHEIT)}
        />
        <label
          htmlFor={TempScale.FAHRENHEIT}
          className={styles['scale__radio-label']}
        >
          <span className={styles['scale__radio-button']}></span>
          &deg;F
        </label>
      </div>
    </div>
  );
};

export default ScaleSwitcher;
