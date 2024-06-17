import { getDailyMiddayWeather } from '../utils/helpers.tsx';

const fetchCurrentWeather = async () => {
  const res = await fetch(
    'https://api.openweathermap.org/data/2.5/weather?lat=42.6926003&lon=23.3557927&appid=8c8665dfe9c59d77eb1e4d54ad9490a1&units=metric'
  );
  return await res.json();
};

const fetchForecast = async () => {
  const res = await fetch(
    'https://api.openweathermap.org/data/2.5/forecast?lat=42.6926003&lon=23.3557927&appid=8c8665dfe9c59d77eb1e4d54ad9490a1&units=metric'
  );
  const data = await res.json();
  return getDailyMiddayWeather(data);
};

export { fetchCurrentWeather, fetchForecast };
