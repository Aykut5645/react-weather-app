import { useParams } from 'react-router';

import Heading from '../ui/Heading/Heading.tsx';
import PageNotFound from './PageNotFound.tsx';
import WeatherDetails from '../components/WeatherDetails/WeatherDetails.tsx';
import { getNextFourDaysOfWeek } from '../utils/helpers.tsx';

const DetailsPage = () => {
  const { weekDay } = useParams<{ weekDay?: string }>();

  if (!weekDay || !getNextFourDaysOfWeek().includes(weekDay)) {
    return <PageNotFound />;
  }

  const heading = weekDay.charAt(0).toUpperCase() + weekDay.slice(1);

  return (
    <>
      <Heading>{heading}</Heading>
      <WeatherDetails weekDay={weekDay} />
    </>
  );
};

export default DetailsPage;
