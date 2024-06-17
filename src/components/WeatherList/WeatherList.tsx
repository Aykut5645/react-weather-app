import WeatherCard from '../WeatherCard/WeatherCard.tsx';
import { useForecast } from '../../hooks/useForecast.tsx';

import styles from './WeatherList.module.scss';

const WeatherList = () => {
  const { forecast, isLoading, error } = useForecast();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong!</div>;

  return (
    <div className={styles.container}>
      {forecast?.map((w, i) => (
        <WeatherCard
          key={i}
          dt={w?.dt}
          icon={w?.icon}
          temp={w?.temp}
          date={w?.date}
        />
      ))}
    </div>
  );
};

export default WeatherList;
