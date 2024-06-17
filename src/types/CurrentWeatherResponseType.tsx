import { WeatherDescriptionType, WindType } from './ForecastResponseType.tsx';
import { CoordinatesType } from './ForecastResponseType.tsx';

export type CurrentWeatherResponseType = {
  coord: CoordinatesType;
  weather: WeatherDescriptionType[];
  base: string;
  main: CurrentWeatherMainType;
  visibility: number;
  wind: WindType;
  rain?: { [key: string]: number };
  clouds: { all: number };
  dt: number;
  sys: CurrentWeatherSysType;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type CurrentWeatherMainType = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
};

export type CurrentWeatherSysType = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
};
