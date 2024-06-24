import { CurrentWeatherResponseType } from '../types/CurrentWeatherResponseType.tsx';
import {
  CoordinatesType,
  ForecastResponseType,
} from '../types/ForecastResponseType.tsx';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const fetchCurrentWeather = async ({
  lat,
  lon,
}: CoordinatesType): Promise<CurrentWeatherResponseType> => {
  const res = await fetch(
    `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );
  return await res.json();
};

const fetchForecast = async ({
  lat,
  lon,
}: CoordinatesType): Promise<ForecastResponseType> => {
  const res = await fetch(
    `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );
  return await res.json();
};

export { fetchCurrentWeather, fetchForecast };
