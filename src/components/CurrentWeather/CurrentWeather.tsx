import { useCurrentWeather } from '../../hooks/useCurrentWeather.tsx';
import styles from './CurrentWeather.module.scss';
import { useUnit } from '../../hooks/useUnit.tsx';
import { Unit } from '../../enum/UnitEnum.tsx';
import { celciusToFahrenheit, kmToMile } from '../../utils/helpers.tsx';

const CurrentWeather = () => {
  const { weather, isLoading, error } = useCurrentWeather();
  const { unit } = useUnit();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong!</div>;

  const temp =
    unit === Unit.CELSIUS
      ? weather!.main.temp
      : celciusToFahrenheit(weather!.main.temp);

  const feelsLike =
    unit === Unit.CELSIUS
      ? weather!.main.feels_like
      : celciusToFahrenheit(weather!.main.feels_like);

  return (
    <div className={styles['weather__container']}>
      <div className={styles['weather__container__left']}>
        <div className={styles['weather__container__left__temp']}>
          {Math.round(temp)}&deg;
        </div>

        <div className={styles['weather__container__left__icon']}>
          <img
            alt="weather icon"
            src={`src/assets/icons/${(weather?.weather && weather?.weather[0])?.icon}.png`}
          />
        </div>
      </div>

      <div className={styles['weather__container__right']}>
        <div className={styles['weather__container__right__header']}>
          <div>
            <b>Feels like</b>
            <span>{feelsLike}&deg;</span>
          </div>
          <div>
            <b>Location</b>
            <span>
              {weather?.name.includes('-')
                ? weather.name.split('-')[0]
                : weather?.name}{' '}
              / {weather?.sys?.country}
            </span>
          </div>
        </div>

        <div>
          <b>Weather condition</b>
          <span>
            {(weather?.weather && weather?.weather[0])?.main} (
            {(weather?.weather && weather?.weather[0])?.description})
          </span>
        </div>

        <div className={styles['weather__container__right__info']}>
          <img
            src="src/assets/icons/humidity-icon.svg"
            alt="Cloud"
            style={{ filter: 'invert(100%)' }}
          />
          <span>Humidity {weather?.main?.humidity}%</span>
        </div>

        <div className={styles['weather__container__right__info']}>
          <img
            src="src/assets/icons/wind-icon.svg"
            alt="Cloud"
            style={{ filter: 'invert(100%)' }}
          />
          <span>
            Wind speed{' '}
            {unit === Unit.CELSIUS
              ? weather!.wind.speed
              : kmToMile(weather!.wind.speed)}
            {unit === Unit.CELSIUS ? 'kph' : 'mph'}
          </span>
        </div>

        <div className={styles['weather__container__right__info']}>
          <img
            src="src/assets/icons/pressure-icon.svg"
            alt="Cloud"
            style={{ filter: 'invert(100%)' }}
          />
          <span>Pressure {weather?.main?.pressure}hPa</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
