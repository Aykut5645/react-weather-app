import { Link } from 'react-router-dom';
import { getWeekDay } from '../utils/helpers.tsx';

type WeatherCardProps = {
  dt: number;
  icon: string;
  temp: number;
  date: string;
};

const WeatherCard = ({ dt, icon, temp }: WeatherCardProps) => {
  const currentWeekDay = getWeekDay(dt);

  return (
    <Link to={`/${currentWeekDay.toLocaleLowerCase()}`}>
      <div
        style={{
          color: 'white',
          background: '#2d2d2d',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: '1.6rem',
          padding: '2rem 0',
          borderRadius: '1rem',
          border: '2px solid black',
        }}
      >
        <div>{currentWeekDay}</div>
        <div style={{ height: '8rem', width: '8rem' }}>
          <img
            style={{ height: '100%', width: '100%' }}
            alt="weather icon"
            className="weather-icon"
            // src={`src/assets/icons/${w.weather[0]?.icon}.png`}
            src={`src/assets/icons/${icon}.png`}
          />
        </div>
        <div>
          {/*<b>Temperature: </b>{Math.round(w?.main?.temp_max)}°C / {Math.round(w?.main?.temp_min)}&deg;*/}
          <b>Temperature: </b>
          {Math.round(temp)}&deg;
        </div>
      </div>
    </Link>
  );
};

export default WeatherCard;
