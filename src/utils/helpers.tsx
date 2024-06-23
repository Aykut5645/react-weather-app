import {
  ForecastListType,
  ForecastResponseType,
} from '../types/ForecastResponseType.tsx';
import { WEEK_DAYS } from './constants.tsx';

export const getWeekDay = (dt: number) => {
  return new Date(dt * 1000).toLocaleString('en-us', {
    weekday: 'long',
  });
};

export const getNextFourDaysOfWeek = () => {
  const today = new Date().getDay();
  return WEEK_DAYS.slice(today, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, 3));
};

export const celsiusToFahrenheit = (c: number) => {
  return Math.round(c * (9 / 5) + 32);
};

export const kmToMile = (n: number) => {
  return Math.round(n / 1.60934);
};

// Function to get the next 4 days' weather at noon from the forecast data
export const getDailyWeatherAtNoonForNextFourDays = (
  data: ForecastResponseType
) => {
  const today = new Date();

  // Set the start time to midnight of tomorrow
  const startOfTomorrow = new Date(today);
  startOfTomorrow.setDate(today.getDate() + 1);
  startOfTomorrow.setHours(0, 0, 0, 0);

  // Calculate the end time, 4 days from tomorrow
  const endOfFourDays = new Date(startOfTomorrow);
  endOfFourDays.setDate(startOfTomorrow.getDate() + 4);

  // Filter forecast data to include only the next 4 days starting from tomorrow
  const nextFourDaysForecast = data.list.filter((item) => {
    const itemDate = new Date(item.dt_txt);
    return itemDate >= startOfTomorrow && itemDate < endOfFourDays;
  });

  // Group forecast entries by date
  const groupedByDate = nextFourDaysForecast.reduce(
    (acc: { [date: string]: ForecastListType[] }, entry) => {
      const date = entry.dt_txt.split(' ')[0]; // Extract date in 'YYYY-MM-DD' format
      if (!acc[date]) acc[date] = [];
      acc[date].push(entry);
      return acc;
    },
    {}
  );

  // Extract the noon forecast entry for each day
  return Object.keys(groupedByDate).map((date) => {
    const dayEntries = groupedByDate[date];

    // Find the entry closest to noon (12:00:00)
    const middayEntry =
      dayEntries.find((entry) => entry.dt_txt.includes('12:00:00')) ||
      dayEntries[0];

    // Return the relevant data for each day
    return {
      date,
      dt: middayEntry.dt,
      temp: middayEntry.main.temp,
      weather: middayEntry.weather[0].description,
      icon: middayEntry.weather[0].icon,
    };
  });
};

// Function to get the current day weather at noon from the forecast data
export const getCurrentDayWeatherAtNoon = (
  list: ForecastListType[],
  weekDay: string
) => {
  return list
    .filter(
      (f: ForecastListType) => getWeekDay(f.dt).toLocaleLowerCase() === weekDay
    )
    .find((f) => f.dt_txt.includes('12:00:00'));
};
