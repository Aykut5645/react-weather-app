import Loader from '../../ui/Loader/Loader.tsx';
import NavButton from '../../ui/NavButton/NavButton.tsx';
import ErrorMessage from '../../ui/ErrorMessage/ErrorMessage.tsx';
import WeatherContainer from '../WeatherContainer/WeatherContainer.tsx';
import { useCoordinates } from '../../hooks/useCoordinates.tsx';
import { useForecast } from '../../hooks/useForecast.tsx';
import { getCurrentDayWeatherAtNoon } from '../../utils/helpers.tsx';

const WeatherDetails = ({ weekDay }: { weekDay: string }) => {
  const { coords, errorCoords, isFetchingCoords } = useCoordinates();
  const { forecast, isLoading, error } = useForecast(coords);

  if (isFetchingCoords || isLoading) return <Loader />;

  if (errorCoords || error)
    return <ErrorMessage errorMessage={errorCoords?.message || error?.message} />;

  const { list, city } = forecast!;
  const { main, weather, wind } = getCurrentDayWeatherAtNoon(list, weekDay)!;

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
