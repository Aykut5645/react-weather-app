import { useEffect, useState } from 'react';
import WeatherCard from './WeatherCard.tsx';
import MetricSwitcher from './MetricSwitcher.tsx';
import { getDailyMiddayWeather } from '../utils/helpers.tsx';
import CurrentWeather from './CurrentWeather/CurrentWeather.tsx';

const WeatherList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.openweathermap.org/data/2.5/forecast?lat=42.6926003&lon=23.3557927&appid=8c8665dfe9c59d77eb1e4d54ad9490a1&units=metric'
    )
      .then((res) => res.json())
      .then((data) => setData(getDailyMiddayWeather(data)));
  }, []);

  if (!data?.length) return null;

  return (
    <>
      <MetricSwitcher />
      <CurrentWeather />
      <div
        style={{
          display: 'grid',
          gridGap: '.8rem',
          gridTemplateRows: 'repeat(2, 1fr)',
          gridTemplateColumns: 'repeat(4, 1fr)',
        }}
      >
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
    </>
  );
};

export default WeatherList;
