import Heading from '../ui/Heading/Heading.tsx';
import MetricSwitcher from '../components/MetricSwitcher/MetricSwitcher.tsx';
import CurrentWeather from '../components/CurrentWeather/CurrentWeather.tsx';
import WeatherList from '../components/WeatherList/WeatherList.tsx';

const HomePage = () => {
  return (
    <>
      <Heading>Current Weather</Heading>
      <MetricSwitcher />
      <CurrentWeather />
      <WeatherList />
    </>
  );
};

export default HomePage;
