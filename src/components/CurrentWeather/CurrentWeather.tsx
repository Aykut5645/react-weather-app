import WeatherContainer from '../WeatherContainer/WeatherContainer.tsx';
import { useCurrentWeather } from '../../hooks/useCurrentWeather.tsx';
import Loader from '../../ui/Loader/Loader.tsx';

const CurrentWeather = () => {
  const { currentWeather, isLoading, error } = useCurrentWeather();

  if (isLoading) return <Loader />;
  if (error) return <div>Something went wrong!</div>;

  const { main, weather, sys, wind, name } = currentWeather!;

  return (
    <WeatherContainer
      temp={main.temp}
      icon={weather[0].icon}
      feelsLike={main.feels_like}
      cityName={name}
      country={sys.country}
      main={weather[0].main}
      description={weather[0].description}
      windSpeed={wind.speed}
      humidity={main.humidity}
      pressure={main.pressure}
    />
  );
};

export default CurrentWeather;
