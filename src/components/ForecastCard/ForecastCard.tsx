import { Link } from 'react-router-dom';

import WeatherIcon from '../WeatherIcon/WeatherIcon.tsx';
import { celsiusToFahrenheit, getWeekDay } from '../../utils/helpers.tsx';
import { TempScale } from '../../utils/enums.tsx';
import { useScale } from '../../hooks/useScale.tsx';
import styles from './ForecastCard.module.scss';

type WeatherCardProps = {
  dt: number;
  icon: string;
  temp: number;
  date: string;
};

const ForecastCard = ({ dt, icon, temp }: WeatherCardProps) => {
  const { scale } = useScale();

  const currentWeekDay = getWeekDay(dt);
  const currentTemp =
    scale === TempScale.CELSIUS ? temp : celsiusToFahrenheit(temp);

  return (
    <li>
      <Link
        className={styles['card__link']}
        to={`/${currentWeekDay.toLocaleLowerCase()}`}
      >
        <div className={styles['card__container']}>
          <div className={styles['card__container__day']}>{currentWeekDay}</div>
          <WeatherIcon icon={icon} className={styles['card__container__img']} />
          <div className={styles['card__container__temp']}>
            <b>Temp</b>
            <span>
              {Math.round(currentTemp)}
              &deg;
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ForecastCard;
