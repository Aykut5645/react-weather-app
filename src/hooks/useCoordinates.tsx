import { useState, useEffect } from 'react';
import { CoordinatesType } from '../types/ForecastResponseType.tsx';

const useCoordinates = () => {
  const [coords, setCoords] = useState<CoordinatesType | null>(null);
  const [errorCoords, setErrorCoords] = useState<{ message: string } | null>(null);
  const [permissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    const success = (position: GeolocationPosition) => {
      setCoords({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
      setPermissionGranted(true);
    };

    const error = (err: GeolocationPositionError) => {
      setErrorCoords({ message: err.message });
    };


    if (!permissionGranted) {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }, [permissionGranted]);

  return { isFetchingCoords: !coords && !errorCoords, coords, errorCoords };
};

export { useCoordinates };