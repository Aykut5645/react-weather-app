export const getDailyMiddayWeather = (data) => {
  const today = new Date();
  const fiveDaysFromToday = new Date();
  fiveDaysFromToday.setDate(today.getDate() + 4);

  const filteredList = data.list.filter((item) => {
    const itemDate = new Date(item.dt_txt);
    return itemDate >= today && itemDate < fiveDaysFromToday;
  });

  const groupedByDay = filteredList.reduce((acc, curr) => {
    const date = new Date(curr.dt_txt).toLocaleDateString();
    if (!acc[date]) acc[date] = [];
    acc[date].push(curr);

    return acc;
  }, {});

  const dailyData = Object.keys(groupedByDay).map((date) => {
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

  return dailyData;
};
