import { useEffect, useState } from 'react';

import styles from './CurrentWeather.module.scss';

const CurrentWeather = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?lat=42.6926003&lon=23.3557927&appid=8c8665dfe9c59d77eb1e4d54ad9490a1&units=metric'
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <div className={styles['weather__title']}>Current Weather</div>
      <div className={styles['weather__container']}>
        <div className={styles['weather__container__left']}>
          <div className={styles['weather__container__left__temp']}>
            {Math.round(data?.main?.temp)}&deg;
          </div>

          <div className={styles['weather__container__left__icon']}>
            <img
              alt="weather icon"
              src={`src/assets/icons/${(data?.weather && data?.weather[0])?.icon}.png`}
            />
          </div>
        </div>

        <div className={styles['weather__container__right']}>
          <div className={styles['weather__container__right__header']}>
            <div>
              <b>Feels like</b>
              <span>{data?.main?.feels_like}&deg;</span>
            </div>
            <div>
              <b>Location</b>
              <span>
                {data?.name} / {data?.sys?.country}
              </span>
            </div>
          </div>

          <div>
            <b>Weather condition</b>
            <span>
              {(data?.weather && data?.weather[0])?.main} (
              {(data?.weather && data?.weather[0])?.description})
            </span>
          </div>

          <div className={styles['weather__container__right__info']}>
            <img
              src="src/assets/icons/humidity-icon.svg"
              alt="Cloud"
              style={{ filter: 'invert(100%)' }}
            />
            <span>Humidity {data?.main?.humidity}%</span>
          </div>

          <div className={styles['weather__container__right__info']}>
            <img
              src="src/assets/icons/wind-icon.svg"
              alt="Cloud"
              style={{ filter: 'invert(100%)' }}
            />
            <span>Wind speed {data?.wind?.speed}mph</span>
          </div>

          <div className={styles['weather__container__right__info']}>
            <img
              src="src/assets/icons/pressure-icon.svg"
              alt="Cloud"
              style={{ filter: 'invert(100%)' }}
            />
            <span>Pressure {data?.wind?.speed}mb</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
