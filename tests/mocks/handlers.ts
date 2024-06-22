import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(`/weather`, () => {
    return HttpResponse.json({
      cod: '200',
      name: 'City Name',
      id: 1,
    });
  }),

  http.get(`/forecast`, () => {
    return HttpResponse.json({
      cod: '200',
      message: 0,
      cnt: 40,
      list: [],
      city: {
        id: 1,
        name: 'City Name',
      },
    });
  }),
];
