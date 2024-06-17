import { useParams } from 'react-router';

import WeatherDetails from '../components/WeatherDetails/WeatherDetails.tsx';
import Heading from '../ui/Heading/Heading.tsx';

const DetailsPage = () => {
  const { weekDay } = useParams();
  const heading = weekDay![0].toUpperCase() + weekDay!.slice(1);

  return (
    <>
      <Heading>{heading}</Heading>
      <WeatherDetails />
    </>
  );
};

export default DetailsPage;
