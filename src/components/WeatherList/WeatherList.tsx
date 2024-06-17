import { useQuery } from '@tanstack/react-query';

import WeatherCard from '../WeatherCard/WeatherCard.tsx';
import { getDailyMiddayWeather } from '../../utils/helpers.tsx';

import styles from './WeatherList.module.scss';

const WeatherList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['forecast'],
    queryFn: async () => {
      const res = await fetch(
        'https://api.openweathermap.org/data/2.5/forecast?lat=42.6926003&lon=23.3557927&appid=8c8665dfe9c59d77eb1e4d54ad9490a1&units=metric'
      );
      const data = await res.json();
      return getDailyMiddayWeather(data);
    },
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      {data?.map((w, i) => (
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
