import Heading from '../ui/Heading/Heading.tsx';
import CurrentWeather from '../components/CurrentWeather/CurrentWeather.tsx';
import ForecastList from '../components/ForecastList/ForecastList.tsx';

const HomePage = () => {
  return (
    <>
      <Heading>Current Weather</Heading>
      <CurrentWeather />
      <ForecastList />
    </>
  );
};

export default HomePage;
