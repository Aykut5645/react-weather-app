# React Weather App

## Live Demo

This application is deployed on Netlify: [https://comfy-biscotti-c57f94.netlify.app/](https://react-time-weather.netlify.app/)

## About the project

### Description

This React application provides a user-friendly interface to display the upcoming 5-day weather forecast based on your location. It offers visually appealing weather cards with icons, metric/imperial unit switching, and persistence of user preferences using localStorage.

### Features

- **location-Based Weather:** Retrieves weather data for 5 days based on your current location.
> ***!!! Please pay attention to this important information***  
> Since the OpenWeatherMap forecast5 endpoint, which is a paid feature, provides data in 3-hour intervals for 5 days, and I need to display the weather for 5 days, I've implemented the following data processing:  
> 
> I filtered this data to show the weather for each day around noon (12:00 PM) to midnight, giving you a snapshot of daily conditions.  
> 
> **Rationale for Data Filtering:**  
> Focusing on the 12:00 PM to midnight timeframe provides a more representative overview of each day's weather conditions, as it encompasses the period when people are typically most active and likely to be planning outdoor activities.

- **Card-Style Display:** Presents weather information in sleek, responsive cards showcasing the date, weather condition, and icon.


- **Detailed View:** Clicking a card opens a separate page with more comprehensive weather details for that specific day.


- **Metric/Imperial Units:** Users can seamlessly switch between metric (Celsius, kilometers per hour) and imperial (Fahrenheit, miles per hour) units to suit their preference.


- **Persistent User Preferences:** User-chosen units are stored in localStorage, ensuring persistence across browser sessions.


- **Mobile-Friendly:** Designed for optimal viewing on mobile devices.


- **Comprehensive Testing:** Unit and integration tests written with React Testing Library and Vitest guarantee the application's functionality and code quality.

### Tech Stack

**Frontend:**
 - React.js
 - React Router Dom
 - TanStack Query

**Development Tools:**
 - TypeScript
 - Vite
 - SASS

**Testing:**
- Vitest
- React Testing Library
- Mock Service Worker (MSW)

### Pages

| Pages            | Routes             | Description                                  |
|------------------|--------------------|----------------------------------------------|
| **HomePage**     | **/**              | `Current weather + forecast for next 4 days` |
| **DetailsPage**  | **/:weekDay**      | `Weather details for selected day`           |
| **PageNotFound** | **/invalid-route** | `Current page not found or does not exist`   |

## Getting Started

**Prerequisites**

1. Ensure you have Node.js and npm installed on your system. You can download them from the official websites:
    - Node.js: https://nodejs.org/
    - Npm: https://www.npmjs.com/ (comes bundled with Node.js)

**Installation**
 - Clone the repository or download the source code.
 - Install dependencies using `npm install`.
 - Start the development server using `npm run dev`. This will typically launch the application in your browser at `http:localhost:5173`.
 **Note:** If you see a different port number in your terminal output, use that port instead of `5173` in the URL.

## Licence

Distributed under the MIT License. See `LICENSE` for more information.
