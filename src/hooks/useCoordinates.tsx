import { useState, useEffect } from 'react';
import { CoordinatesType } from '../types/ForecastResponseType.tsx';

const useCoordinates = () => {
  const [coordinates, setCoordinates] = useState<CoordinatesType | null>(null);
  const [errorCoordinates, setErrorCoordinates] =
    useState<GeolocationPositionError | null>(null);

  useEffect(() => {
    const success = (position: GeolocationPosition) => {
      setCoordinates({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    };

    const error = (err: GeolocationPositionError) => {
      setErrorCoordinates(err);
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return { coordinates, errorCoordinates };
};

export default useCoordinates;
