import WeatherDetails from '../components/WeatherDetails/WeatherDetails.tsx';
import Heading from '../ui/Heading/Heading.tsx';
import { useParams } from 'react-router';
// import NavButton from '../ui/NavButton/NavButton.tsx';

const DetailsPage = () => {
  const { weekDay } = useParams();

  return (
    <>
      <Heading>{weekDay}</Heading>
      <WeatherDetails />
      {/*<NavButton text="Go back" />*/}
    </>
  );
};

export default DetailsPage;
