export type ForecastResponseType = {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastListType[];
  city: CityType;
};

export type ForecastListType = {
  dt: number;
  main: ForecastMainType;
  weather: WeatherDescriptionType[];
  clouds: { all: number };
  wind: WindType;
  visibility: number;
  pop: number;
  rain?: { [key: string]: number };
  sys: { pod: string };
  dt_txt: string;
};

export type ForecastMainType = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
};

export type WeatherDescriptionType = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type CityType = {
  id: number;
  name: string;
  coord: CoordinatesType;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
};

export type CoordinatesType = {
  lat: number;
  lon: number;
};

export type WindType = {
  speed: number;
  deg: number;
  gust: number;
};
