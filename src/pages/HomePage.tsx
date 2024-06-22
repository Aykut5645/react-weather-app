import Heading from '../ui/Heading/Heading.tsx';
import CurrentWeather from '../components/CurrentWeather/CurrentWeather.tsx';
import WeatherList from '../components/WeatherList/WeatherList.tsx';

const HomePage = () => {
  return (
    <>
      <Heading>Current Weather</Heading>
      <CurrentWeather />
      <WeatherList />
    </>
  );
};

export default HomePage;
