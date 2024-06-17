import MetricSwitcher from '../components/MetricSwitcher.tsx';
import CurrentWeather from '../components/CurrentWeather/CurrentWeather.tsx';
import WeatherList from '../components/WeatherList/WeatherList.tsx';

const HomePage = () => {
  return (
    <>
      <MetricSwitcher />
      <CurrentWeather />
      <WeatherList />
    </>
  );
};

export default HomePage;
