import { useParams } from 'react-router';

import Heading from '../ui/Heading/Heading.tsx';
import PageNotFound from './PageNotFound.tsx';
import WeatherDetails from '../components/WeatherDetails/WeatherDetails.tsx';
import { getNextFourDaysOfWeek } from '../utils/helpers.tsx';

const DetailsPage = () => {
  const { weekDay } = useParams();

  if (!getNextFourDaysOfWeek().some((wd) => wd === weekDay))
    return <PageNotFound />;

  return (
    <>
      <Heading>{weekDay![0].toLocaleUpperCase() + weekDay!.slice(1)}</Heading>
      <WeatherDetails />
    </>
  );
};

export default DetailsPage;
