import WeatherCard from '../WeatherCard/WeatherCard.tsx';
import { useForecast } from '../../hooks/useForecast.tsx';
import { getDailyMiddayWeather } from '../../utils/helpers.tsx';

import styles from './WeatherList.module.scss';

const WeatherList = () => {
  const { forecast, isLoading, error } = useForecast();

  if (isLoading)
    return <div style={{ fontSize: 18, color: 'white' }}>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const modifiedForecast = getDailyMiddayWeather(forecast!);

  return (
    <ul className={styles.container}>
      {modifiedForecast?.map((w, i) => (
        <li key={i}>
          <WeatherCard
            dt={w?.dt}
            icon={w?.icon}
            temp={w?.temp}
            date={w?.date}
          />
        </li>
      ))}
    </ul>
  );
};

export default WeatherList;
