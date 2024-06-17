import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { getWeekDay } from '../utils/helpers.tsx';

const WeatherDetails = () => {
  const [data, setData] = useState([]);
  const { weekDay } = useParams();

  useEffect(() => {
    fetch(
      'https://api.openweathermap.org/data/2.5/forecast?lat=42.6926003&lon=23.3557927&appid=8c8665dfe9c59d77eb1e4d54ad9490a1&units=metric'
    )
      .then((res) => res.json())
      .then((data) => {
        const currentDays = data.list.filter(
          (x) => getWeekDay(x.dt).toLocaleLowerCase() === weekDay
        );
        const currentDay = currentDays.find((x) =>
          x.dt_txt.includes('12:00:00')
        );
        console.log('Data => ', data);
        setData({ city: data?.city, ...currentDay });
      });
  }, []);
  console.log('Result => ', data);
  return (
    <div>
      <div style={{ display: 'flex', gap: '2rem', width: '100%' }}>
        <div>
          <img
            alt="weather icon"
            className="weather-icon"
            src={`src/assets/icons/${(data?.weather && data?.weather[0])?.icon}.png`}
          />
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingBottom: '1.4rem',
              borderBottom: '1px solid white',
              marginBottom: '1.4rem',
            }}
          >
            <div style={{ fontSize: '1.6rem', color: 'white' }}>
              <b>Location:</b> {data?.city?.name} / {data?.city?.country}
            </div>
            <div style={{ fontSize: '1.6rem', color: 'white' }}>
              <b>Today:</b> {data?.dt_txt?.split(' ')[0].trim()}
            </div>
          </div>
          <div style={{ fontSize: '1.6rem', color: 'white' }}>
            <b>Temperature:</b> {data?.main?.temp}&deg;
          </div>
          <div style={{ fontSize: '1.6rem', color: 'white' }}>
            <b>Weather condition:</b>{' '}
            {(data?.weather && data?.weather[0])?.main} (
            {(data?.weather && data?.weather[0])?.description})
          </div>
          <div style={{ fontSize: '1.6rem', color: 'white' }}>
            <b>Feels like:</b> {data?.main?.feels_like}&deg;
          </div>
          <div style={{ fontSize: '1.6rem', color: 'white' }}>
            <b>Humidity:</b> {data?.main?.humidity}%
          </div>
          <div style={{ fontSize: '1.6rem', color: 'white' }}>
            <b>Wind speed:</b> {data?.wind?.speed}% meter/sec
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
