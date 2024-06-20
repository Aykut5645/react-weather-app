import { useQuery } from '@tanstack/react-query';

import WeatherContainer from '../WeatherContainer/WeatherContainer.tsx';
import Loader from '../../ui/Loader/Loader.tsx';
import ErrorAlert from '../../ui/ErrorAlert/ErrorAlert.tsx';
import useCoordinates from '../../hooks/useCoordinates.tsx';
import { fetchCurrentWeather } from '../../services/api.tsx';

const CurrentWeather = () => {
  const { coordinates, errorCoordinates } = useCoordinates();
  const {
    data: currentWeather,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['current-weather'],
    queryFn: () => fetchCurrentWeather(coordinates!),
    enabled: Boolean(coordinates),
  });

  console.log('Coordinates => ', coordinates);

  if (Boolean(coordinates === null && errorCoordinates === null) || isLoading) {
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
