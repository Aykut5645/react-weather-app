import './App.scss';
import { useEffect, useState } from 'react';
import Metric from './components/Metric.tsx';
import WeatherList from "./components/WeatherList.tsx";

const App = () => {
  return (
    <div className="container-primary">
      <h1
        style={{
          color: 'white',
          background: '#151515',
          padding: '1rem 0',
          textAlign: 'center',
          marginBottom: '3rem',
        }}
      >
        Real Time Weather
      </h1>
      <div style={{ maxWidth: '85rem', margin: 'auto' }} className="content">
        <div
          style={{
            color: 'white',
            padding: '1rem',
            background: 'transparent',
            marginBottom: '.8rem',
            border: '2px solid #55c57a',
            borderRadius: 5,
          }}
        >
          {/*<div style={{}}>*/}
          {/*  <Metric />*/}
          {/*  <div style={{ display: 'flex', gap: '2rem', width: '100%' }}>*/}
          {/*    <div>*/}
          {/*      <img*/}
          {/*        alt="weather icon"*/}
          {/*        className="weather-icon"*/}
          {/*        src={`src/assets/icons/${data.weather[0]?.icon}.png`}*/}
          {/*      />*/}
          {/*    </div>*/}
          {/*    <div style={{ flex: 1 }}>*/}
          {/*      <div*/}
          {/*        style={{*/}
          {/*          display: 'flex',*/}
          {/*          justifyContent: 'space-between',*/}
          {/*          paddingBottom: '1.4rem',*/}
          {/*          borderBottom: '1px solid white',*/}
          {/*          marginBottom: '1.4rem',*/}
          {/*        }}*/}
          {/*      >*/}
          {/*        <div style={{ fontSize: '1.5rem' }}>*/}
          {/*          <b>Location:</b> Sofia / Bulgaria*/}
          {/*        </div>*/}
          {/*        <div style={{ fontSize: '1.5rem' }}>*/}
          {/*          <b>Today:</b> 5/12/2024*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*      <div style={{ fontSize: '1.5rem' }}>*/}
          {/*        <b>Temperature:</b> 20&deg;*/}
          {/*      </div>*/}
          {/*      <div style={{ fontSize: '1.5rem' }}>*/}
          {/*        <b>Weather condition:</b> Clouds (scattered clouds)*/}
          {/*      </div>*/}
          {/*      <div style={{ fontSize: '1.5rem' }}>*/}
          {/*        <b>Feels like:</b> 18&deg;*/}
          {/*      </div>*/}
          {/*      <div style={{ fontSize: '1.5rem' }}>*/}
          {/*        <b>Humidity:</b> 59%*/}
          {/*      </div>*/}
          {/*      <div style={{ fontSize: '1.5rem' }}>*/}
          {/*        <b>Wind speed:</b> 8.75 meter/sec*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
        <WeatherList/>
      </div>
    </div>
  );
};

export default App;
