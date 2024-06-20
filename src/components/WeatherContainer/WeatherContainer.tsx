import { Unit } from '../../enum/UnitEnum.tsx';
import { useUnit } from '../../hooks/useUnit.tsx';
import { celciusToFahrenheit, kmToMile } from '../../utils/helpers.tsx';

import styles from './WeatherContainer.module.scss';

type WeatherContainerProps = {
  temp: number;
  icon: string;
  feelsLike: number;
  cityName: string;
  country: string;
  main: string;
  description: string;
  windSpeed: number;
  humidity: number;
  pressure: number;
};

const WeatherContainer = ({
  temp,
  icon,
  feelsLike,
  cityName,
  country,
  main,
  description,
  windSpeed,
  humidity,
  pressure,
}: WeatherContainerProps) => {
  const { unit } = useUnit();

  const currentTemp = unit === Unit.CELSIUS ? temp : celciusToFahrenheit(temp);
  const currentFeelsLike =
    unit === Unit.CELSIUS ? feelsLike : celciusToFahrenheit(feelsLike);
  const currentWindSpeed =
    unit === Unit.CELSIUS ? windSpeed : kmToMile(windSpeed);
  const currentCityName = cityName.includes('-')
    ? cityName.split('-')[0]
    : cityName;

  return (
    <div className={styles['weather__container']}>
      <div className={styles['weather__container__left']}>
        <div className={styles['weather__container__left__temp']}>
          {Math.round(currentTemp)}&deg;
        </div>

        <div className={styles['weather__container__left__icon']}>
          <img alt="weather icon" src={`src/assets/icons/${icon}.png`} />
        </div>
      </div>

      <div className={styles['weather__container__right']}>
        <div className={styles['weather__container__right__header']}>
          <div>
            <b>Feels like</b>
            <span>{currentFeelsLike}&deg;</span>
          </div>
          <div>
            <b>Location</b>
            <span>
              {currentCityName} / {country}
            </span>
          </div>
        </div>

        <div>
          <b>Weather condition</b>
          <span>
            {main} ({description})
          </span>
        </div>

        <div className={styles['weather__container__right__info']}>
          <img
            src="src/assets/icons/humidity-icon.svg"
            alt="Cloud"
            style={{ filter: 'invert(100%)' }}
          />
          <span>Humidity {humidity}%</span>
        </div>

        <div className={styles['weather__container__right__info']}>
          <img
            src="src/assets/icons/wind-icon.svg"
            alt="Cloud"
            style={{ filter: 'invert(100%)' }}
          />
          <span>
            Wind speed {currentWindSpeed}
            {unit === Unit.CELSIUS ? 'kph' : 'mph'}
          </span>
        </div>

        <div className={styles['weather__container__right__info']}>
          <img
            src="src/assets/icons/pressure-icon.svg"
            alt="Cloud"
            style={{ filter: 'invert(100%)' }}
          />
          <span>Pressure {pressure}hPa</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherContainer;