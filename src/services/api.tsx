import { getDailyMiddayWeather } from '../utils/helpers.tsx';
import { CurrentWeatherResponseType } from '../types/CurrentWeatherResponseType.tsx';
import {
  CoordinatesType,
  ForecastResponseType,
} from '../types/ForecastResponseType.tsx';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const fetchCurrentWeather = async ({
  lat,
  lon,
}: CoordinatesType): Promise<CurrentWeatherResponseType> => {
  const res = await fetch(
    `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );
  return await res.json();
};

const fetchForecast = async ({ lat, lon }: CoordinatesType) => {
  const res = await fetch(
    `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );
  const data: ForecastResponseType = await res.json();
  return getDailyMiddayWeather(data);
};

export { fetchCurrentWeather, fetchForecast };
