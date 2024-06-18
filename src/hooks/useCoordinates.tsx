import { useState, useEffect } from 'react';
import { CoordinatesType } from '../types/ForecastResponseType.tsx';

const useCoordinates = () => {
  const [location, setLocation] = useState<CoordinatesType | null>(null);

  useEffect(() => {
    const success = (position: GeolocationPosition) => {
      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    };

    const error = (err: GeolocationPositionError) => {
      console.error('Error fetching location => ', err);
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return location;
};

export default useCoordinates;
