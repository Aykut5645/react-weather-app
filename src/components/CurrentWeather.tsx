import { useEffect, useState } from 'react';

const CurrentWeather = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?lat=42.6926003&lon=23.3557927&appid={}&units=metric'
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log('Result => ', data);

  return (
    <>
      <div style={{ color: 'white', fontSize: '2rem' }}>Current Weather</div>
      <div
        style={{
          display: 'flex',
          gap: '2rem',
          width: '100%',
          padding: '1rem',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ fontSize: '5rem', color: 'white' }}>
            {Math.round(data?.main?.temp)}&deg;
          </div>
          <div>
            <img
              alt="weather icon"
              className="weather-icon"
              src={`src/assets/icons/${(data?.weather && data?.weather[0])?.icon}.png`}
            />
          </div>
        </div>

        <div
          style={{
            flex: 1,
            minHeight: '19rem',
            flexDirection: 'column',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingBottom: '1.4rem',
              borderBottom: '1px solid white',
              marginBottom: '1.4rem',
            }}
          >
            <div style={{ fontSize: '1.6rem', color: 'white' }}>
              <b>Location:</b> {data?.name} / {data?.sys?.country}
            </div>
          </div>

          <div style={{ fontSize: '1.6rem', color: 'white' }}>
            <b>Weather condition</b> {(data?.weather && data?.weather[0])?.main}{' '}
            ({(data?.weather && data?.weather[0])?.description})
          </div>
          <div style={{ fontSize: '1.6rem', color: 'white' }}>
            <b>Feels like</b> {data?.main?.feels_like}&deg;
          </div>
          <div
            style={{
              fontSize: '1.6rem',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              gap: '1.7rem',
            }}
          >
            <img
              src="src/assets/icons/humidity-icon.svg"
              alt="Cloud"
              style={{ filter: 'invert(100%)' }}
            />
            <span>Humidity {data?.main?.humidity}%</span>
          </div>
          <div
            style={{
              fontSize: '1.6rem',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              gap: '1.2rem',
            }}
          >
            <img
              src="src/assets/icons/wind-icon.svg"
              alt="Cloud"
              style={{ filter: 'invert(100%)' }}
            />
            <span>Wind speed {data?.wind?.speed}mph</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
