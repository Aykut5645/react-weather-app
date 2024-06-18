import { getDailyMiddayWeather } from '../utils/helpers.tsx';
import { UnitType } from '../types/UnitType.tsx';
import { CurrentWeatherResponseType } from '../types/CurrentWeatherResponseType.tsx';
import { ForecastResponseType } from '../types/ForecastResponseType.tsx';

const fetchCurrentWeather = async (
  unit: UnitType
): Promise<CurrentWeatherResponseType> => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=42.6926003&lon=23.3557927&appid=${import.meta.env.VITE_API_KEY}&units=${unit}`
  );
  return await res.json();
};

const fetchForecast = async (unit: UnitType) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=42.6926003&lon=23.3557927&appid=${import.meta.env.VITE_API_KEY}&units=${unit}`
  );
  const data: ForecastResponseType = await res.json();
  return getDailyMiddayWeather(data);
};

export { fetchCurrentWeather, fetchForecast };
