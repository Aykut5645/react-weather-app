import { createMemoryRouter, RouterProvider } from 'react-router';
import { render } from '@testing-library/react';

import {
  ForecastListType,
  ForecastResponseType,
} from '../types/ForecastResponseType.tsx';
import { routesObjects } from '../routes.tsx';
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

export const getDailyMiddayWeather = (data: ForecastResponseType) => {
  const today = new Date();
  const startOfTomorrow = new Date(today);
  startOfTomorrow.setDate(today.getDate() + 1);
  startOfTomorrow.setHours(0, 0, 0, 0);

  const fourDaysFromTomorrow = new Date(startOfTomorrow);
  fourDaysFromTomorrow.setDate(startOfTomorrow.getDate() + 4);

  const filteredList = data.list.filter((item) => {
    const itemDate = new Date(item.dt_txt);
    return itemDate >= startOfTomorrow && itemDate < fourDaysFromTomorrow;
  });

  const groupedByDay = filteredList.reduce(
    (acc: { [key: string]: ForecastListType[] }, curr) => {
      const date = new Date(curr.dt_txt).toLocaleDateString();
      if (!(date in acc)) acc[date] = [];
      acc[date].push(curr);

      return acc;
    },
    {}
  );

  return Object.keys(groupedByDay).map((date) => {
    const dayEntries = groupedByDay[date];
    const middayEntry =
      dayEntries.find((entry) => entry.dt_txt.includes('12:00:00')) ||
      dayEntries[0];

    return {
      date,
      dt: middayEntry.dt,
      temp: middayEntry.main.temp,
      weather: middayEntry.weather[0].description,
      icon: middayEntry.weather[0].icon,
    };
  });
};

export const navigateTo = (path: string) => {
  const router = createMemoryRouter(routesObjects, {
    initialEntries: [path],
  });

  render(<RouterProvider router={router} />);
};
