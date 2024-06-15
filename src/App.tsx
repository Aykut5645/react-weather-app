import './App.scss';
import { useEffect, useState } from 'react';
import Metric from './components/Metric.tsx';

const App = () => {
  const [data, setData] = useState({ weather: [] });

  useEffect(() => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?lat=42.6926003&lon=23.3557927&appid=8c8665dfe9c59d77eb1e4d54ad9490a1'
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log('Data => ', data);

  return (
    <div className="container">
      <h1
        style={{
          color: 'white',
          background: 'black',
          padding: '1rem 0',
          textAlign: 'center',
          marginBottom: '3rem',
        }}
      >
        Real Time Weather
      </h1>
      <div style={{ maxWidth: '75rem', margin: 'auto' }} className="content">
        <div
          style={{
            color: 'white',
            background: 'red',
            marginBottom: '.8rem',
          }}
        >
          <Metric />
        </div>
        <div
          style={{
            display: 'grid',
            gridGap: '.6rem',
            gridTemplateColumns: '1fr 1fr',
          }}
        >
          <div style={{ color: 'white', background: 'green', padding: '6rem' }}>
            Next Day Weather
          </div>
          <div
            style={{ color: 'white', background: 'orange', padding: '6rem' }}
          >
            Next Day Weather
          </div>
          <div
            style={{ color: 'white', background: 'violet', padding: '6rem' }}
          >
            Next Day Weather
          </div>
          <div style={{ color: 'white', background: 'brown', padding: '6rem' }}>
            Next Day Weather
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
