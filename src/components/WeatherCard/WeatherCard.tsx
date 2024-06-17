import { Link } from 'react-router-dom';
import { getWeekDay } from '../../utils/helpers.tsx';

import styles from './WeatherCard.module.scss';

type WeatherCardProps = {
  dt: number;
  icon: string;
  temp: number;
  date: string;
};

const WeatherCard = ({ dt, icon, temp }: WeatherCardProps) => {
  const currentWeekDay = getWeekDay(dt);

  return (
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
          <span>{Math.round(temp)}&deg;</span>
        </div>
      </div>
    </Link>
  );
};

export default WeatherCard;
