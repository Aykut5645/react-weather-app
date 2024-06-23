import ForecastCard from '../ForecastCard/ForecastCard.tsx';
import Loader from '../../ui/Loader/Loader.tsx';
import ErrorAlert from '../../ui/ErrorAlert/ErrorAlert.tsx';
import { useForecast } from '../../hooks/useForecast.tsx';
import { useCoordinates } from '../../hooks/useCoordinates.tsx';
import { getDailyWeatherAtNoonForNextFourDays } from '../../utils/helpers.tsx';

import styles from './ForecstList.module.scss';

const ForecastList = () => {
  const { coords, errorCoords, isFetchingCoords } = useCoordinates();
  const { forecast, isLoading, error } = useForecast(coords);

  if (isFetchingCoords || isLoading) return <Loader />;

  if (errorCoords || error)
    return <ErrorAlert errorMessage={errorCoords?.message || error?.message} />;

  const modifiedForecast = getDailyWeatherAtNoonForNextFourDays(forecast!);

  return (
    <ul className={styles.container}>
      {modifiedForecast?.map((w, i) => (
        <ForecastCard
          key={i}
          dt={w?.dt}
          icon={w?.icon}
          temp={w?.temp}
          date={w?.date}
        />
      ))}
    </ul>
  );
};

export default ForecastList;
