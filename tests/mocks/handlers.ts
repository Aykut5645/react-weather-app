import { http, HttpResponse } from 'msw';

const API_KEY = import.meta.env.VITE_API_KEY;

export const handlers = [
  http.get(
    `/weather?lat=42.6926003&lon=23.3557927&appid=${API_KEY}&units=metric`,
    () => {
      return HttpResponse.json({
        cod: 200,
        name: 'Sofia',
      });
    }
  ),
];
