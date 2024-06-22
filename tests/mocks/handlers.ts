import { http, HttpResponse } from 'msw';

const API_KEY = import.meta.env.VITE_API_KEY;

export const handlers = [
  http.get(
    `/weather?lat=42.6926003&lon=23.3557927&appid=${API_KEY}&units=metric`,
    () => {
      return HttpResponse.json([
        {
          date: '6/23/2024',
          dt: 1719144000,
          icon: '04d',
          temp: 21.12,
          weather: 'broken clouds',
        },
        {
          date: '6/24/2024',
          dt: 1815457030,
          icon: '02d',
          temp: 33.12,
          weather: 'sunny',
        },
      ]);
    }
  ),
];
