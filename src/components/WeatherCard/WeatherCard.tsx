import { Link } from 'react-router-dom';
import { celciusToFahrenheit, getWeekDay } from '../../utils/helpers.tsx';

import { TempScale } from '../../utils/enums.tsx';
import { useScale } from '../../hooks/useScale.tsx';
import styles from './WeatherCard.module.scss';

type WeatherCardProps = {
  dt: number;
  icon: string;
  temp: number;
  date: string;
};

const WeatherCard = ({ dt, icon, temp }: WeatherCardProps) => {
  const currentWeekDay = getWeekDay(dt);
  const { scale } = useScale();

  const currentTemp = scale === TempScale.CELSIUS ? temp : celciusToFahrenheit(temp);

  return (
    <li>
      <Link
        className={styles['card__link']}
        to={`/${currentWeekDay.toLocaleLowerCase()}`}
      >
        <div className={styles['card__container']}>
          <div className={styles['card__container__day']}>{currentWeekDay}</div>
          <div className={styles['card__container__img']}>
            <img
              alt="weather icon"
              className="weather-icon"
              src={`src/assets/icons/${icon}.png`}
            />
          </div>
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

export default WeatherCard;
