import { useParams } from 'react-router';

import { getWeekDay } from '../../utils/helpers.tsx';
import { useForecast } from '../../hooks/useForecast.tsx';
import WeatherContainer from '../WeatherContainer/WeatherContainer.tsx';
import { ForecastListType } from '../../types/ForecastResponseType.tsx';
import Loader from '../../ui/Loader/Loader.tsx';
import GoBack from '../../ui/GoBack/GoBack.tsx';

const WeatherDetails = () => {
  const { weekDay } = useParams();
  const { forecast, isLoading, error } = useForecast();

  if (isLoading) return <Loader />;
  if (error) return <div>Something went wrong!</div>;

  const { list, city } = forecast!;

  const currentDay = list
    .filter(
      (x: ForecastListType) => getWeekDay(x.dt).toLocaleLowerCase() === weekDay
    )
    .find((x) => x.dt_txt.includes('12:00:00'));

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
      <GoBack />
    </>
  );
};

export default WeatherDetails;
