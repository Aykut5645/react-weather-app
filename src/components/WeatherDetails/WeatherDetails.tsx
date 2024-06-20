import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';

import Loader from '../../ui/Loader/Loader.tsx';
import Heading from '../../ui/Heading/Heading.tsx';
import WeatherContainer from '../WeatherContainer/WeatherContainer.tsx';
import { getWeekDay } from '../../utils/helpers.tsx';
import { fetchForecast } from '../../services/api.tsx';
import useCoordinates from '../../hooks/useCoordinates.tsx';
import { ForecastListType } from '../../types/ForecastResponseType.tsx';
import ErrorAlert from '../../ui/ErrorAlert/ErrorAlert.tsx';
import NavButton from '../../ui/NavButton/NavButton.tsx';

const WeatherDetails = () => {
  const { weekDay } = useParams();
  const { coordinates, errorCoordinates } = useCoordinates();
  const {
    data: forecast,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['forecast'],
    queryFn: () => fetchForecast(coordinates!),
    enabled: Boolean(coordinates),
  });

  if (Boolean(coordinates === null && errorCoordinates === null) || isLoading)
    return <Loader />;
  if (errorCoordinates || error)
    return (
      <ErrorAlert errorMessage={errorCoordinates?.message || error?.message} />
    );

  const { list, city } = forecast!;

  const currentDay = list
    .filter(
      (x: ForecastListType) => getWeekDay(x.dt).toLocaleLowerCase() === weekDay
    )
    .find((x) => x.dt_txt.includes('12:00:00'));

  const { dt, main, weather, wind } = currentDay!;

  return (
    <>
      <Heading>{getWeekDay(dt)}</Heading>
      <WeatherContainer
        temp={main.temp}
        icon={weather[0].icon}
        feelsLike={main.feels_like}
        cityName={city.name}
        country={city.country}
        main={weather[0].main}
        description={weather[0].description}
        windSpeed={wind.speed}
        humidity={main.humidity}
        pressure={main.pressure}
      />
      <NavButton text="Go back" />
    </>
  );
};

export default WeatherDetails;
