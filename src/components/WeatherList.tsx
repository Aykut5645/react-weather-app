import { useEffect, useState } from 'react';
const WEEK_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const WeatherList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.openweathermap.org/data/2.5/forecast?lat=42.6926003&lon=23.3557927&appid=8c8665dfe9c59d77eb1e4d54ad9490a1&units=metric'
    )
      .then((res) => res.json())
      .then((data) => {
        // setData(data.list);
        const today = new Date();
        const fiveDaysFromToday = new Date();
        fiveDaysFromToday.setDate(today.getDate() + 4);

        const filteredList = data.list.filter((item) => {
          const itemDate = new Date(item.dt_txt);
          return itemDate >= today && itemDate < fiveDaysFromToday;
        });

        const groupedByDay = filteredList.reduce((acc, curr) => {
          const date = new Date(curr.dt_txt).toLocaleDateString();
          if (!acc[date]) {
            acc[date] = [];
          }
          acc[date].push(curr);
          return acc;
        }, {});

        const dailyData = Object.keys(groupedByDay).map((date) => {
          const dayEntries = groupedByDay[date];
          const middayEntry =
            dayEntries.find((entry) => entry.dt_txt.includes('12:00:00')) ||
            dayEntries[0];
          console.log('MiddayEntry => ', middayEntry);
          return {
            date,
            dt: middayEntry.dt,
            temp: middayEntry.main.temp,
            weather: middayEntry.weather[0].description,
            icon: middayEntry.weather[0].icon,
          };
        });
        console.log('Daily data => ', dailyData);
        setData(dailyData);
      });
  }, []);

  if (!data?.length) return null;
  console.log('Data => ', data);
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  return (
    <div
      style={{
        display: 'grid',
        gridGap: '.8rem',
        gridTemplateColumns: 'repeat(4, 1fr)',
      }}
    >
      {data?.map((w, i) => (
        <div
          key={i}
          style={{
            color: 'white',
            background: '#151515',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: '1.6rem',
            padding: '2rem 0',
            borderRadius: '1rem',
          }}
        >
          <div>
            {new Date(w?.dt * 1000).toLocaleString('en-us', {
              weekday: 'long',
            })}
          </div>
          <div style={{ height: '8rem', width: '8rem' }}>
            <img
              style={{ height: '100%', width: '100%' }}
              alt="weather icon"
              className="weather-icon"
              // src={`src/assets/icons/${w.weather[0]?.icon}.png`}
              src={`src/assets/icons/${w?.icon}.png`}
            />
          </div>
          <div>
            {/*<b>Temperature: </b>{Math.round(w?.main?.temp_max)}°C / {Math.round(w?.main?.temp_min)}&deg;*/}
            <b>Temperature: </b>
            {Math.round(w?.temp)}&deg;
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherList;
