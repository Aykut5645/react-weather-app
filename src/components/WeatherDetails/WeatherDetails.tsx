import Loader from '../../ui/Loader/Loader.tsx';
import NavButton from '../../ui/NavButton/NavButton.tsx';
import ErrorAlert from '../../ui/ErrorAlert/ErrorAlert.tsx';
import WeatherContainer from '../WeatherContainer/WeatherContainer.tsx';
import { getWeekDay } from '../../utils/helpers.tsx';
import useCoordinates from '../../hooks/useCoordinates.tsx';
import { ForecastListType } from '../../types/ForecastResponseType.tsx';
import { useForecast } from '../../hooks/useForecast.tsx';

const getCurrentDayMiddayWeather = (
  list: ForecastListType[],
  weekDay: string
) => {
  return list
    .filter(
      (f: ForecastListType) => getWeekDay(f.dt).toLocaleLowerCase() === weekDay
    )
    .find((f) => f.dt_txt.includes('12:00:00'));
};

const WeatherDetails = ({ weekDay }: { weekDay: string }) => {
  const { coordinates, errorCoordinates } = useCoordinates();
  const { forecast, isLoading, error } = useForecast(coordinates);

  if ((!coordinates && !errorCoordinates) || isLoading) return <Loader />;
  if (errorCoordinates || error)
    return (
      <ErrorAlert errorMessage={errorCoordinates?.message || error?.message} />
    );

  const { list, city } = forecast!;
  const currentDay = getCurrentDayMiddayWeather(list, weekDay);

  const { main, weather, wind } = currentDay!;

  return (
    <>
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
