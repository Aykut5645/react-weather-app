import Loader from '../../ui/Loader/Loader.tsx';
import ErrorAlert from '../../ui/ErrorAlert/ErrorAlert.tsx';
import WeatherContainer from '../WeatherContainer/WeatherContainer.tsx';
import { useCurrentWeather } from '../../hooks/useCurrentWeather.tsx';
import { useCoordinates } from '../../hooks/useCoordinates.tsx';

const CurrentWeather = () => {
  const { coordinates, errorCoordinates } = useCoordinates();
  const { currentWeather, isLoading, error } = useCurrentWeather(coordinates);

  if ((!coordinates && !errorCoordinates) || isLoading) {
    return <Loader />;
  }
  if (errorCoordinates || error) {
    return (
      <ErrorAlert errorMessage={errorCoordinates?.message || error?.message} />
    );
  }

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
