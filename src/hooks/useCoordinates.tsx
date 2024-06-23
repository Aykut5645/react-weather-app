import { useState, useEffect } from 'react';
import { CoordinatesType } from '../types/ForecastResponseType.tsx';

const useCoordinates = () => {
  const [coords, setCoords] = useState<CoordinatesType | null>(null);
  const [errorCoords, setErrorCoords] =
    useState<GeolocationPositionError | null>(null);

  useEffect(() => {
    const success = (position: GeolocationPosition) => {
      setCoords({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    };

    const error = (err: GeolocationPositionError) => {
      setErrorCoords(err);
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return { isFetchingCoords: !coords && !errorCoords, coords, errorCoords };
};

export { useCoordinates };
