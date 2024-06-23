import Loader from '../../ui/Loader/Loader.tsx';
import ErrorMessage from '../../ui/ErrorMessage/ErrorMessage.tsx';
import WeatherContainer from '../WeatherContainer/WeatherContainer.tsx';
import { useCurrentWeather } from '../../hooks/useCurrentWeather.tsx';
import { useCoordinates } from '../../hooks/useCoordinates.tsx';

const CurrentWeather = () => {
  const { coords, errorCoords, isFetchingCoords } = useCoordinates();
  const { currentWeather, isLoading, error } = useCurrentWeather(coords);

  if (isFetchingCoords || isLoading) return <Loader />;

  if (errorCoords || error)
    return <ErrorMessage errorMessage={errorCoords?.message || error?.message} />;

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
