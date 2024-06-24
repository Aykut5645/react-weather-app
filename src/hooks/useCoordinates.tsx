import { useState, useEffect } from 'react';
import { CoordinatesType } from '../types/ForecastResponseType.tsx';

import { PermissionStatus } from "../utils/enums.tsx";

const useCoordinates = () => {
  const [coords, setCoords] = useState<CoordinatesType | null>(null);
  const [errorCoords, setErrorCoords] = useState<{ message: string } | null>(
    null
  );

  useEffect(() => {
    const checkPermissionAndFetchLocation = async () => {
      try {
        const permissionStatus = await navigator.permissions.query({ name: 'geolocation' });

        if (permissionStatus.state === PermissionStatus.GRANTED) {
          navigator.geolocation.getCurrentPosition(success, error);
        } else if (permissionStatus.state === PermissionStatus.PROMPT) {
          setErrorCoords({ message: 'Location access is needed to provide weather information.' });
        } else if (permissionStatus.state === 'denied') {
          setErrorCoords({ message: 'Location access has been denied. Please enable it in your browser settings.' });
        }

        permissionStatus.onchange = () => {
          if (permissionStatus.state === PermissionStatus.GRANTED) {
            navigator.geolocation.getCurrentPosition(success, error);
          } else if (permissionStatus.state === PermissionStatus.DENIED) {
            setErrorCoords({ message: 'Location access has been denied. Please enable it in your browser settings.' });
          }
        };
      } catch (err) {
        setErrorCoords({ message: 'An error occurred while checking location permissions.' });
      }
    };

    const success = (position: GeolocationPosition) => {
      setCoords({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    };

    const error = (err: GeolocationPositionError) => {
      setErrorCoords({ message: err.message });
    };

    checkPermissionAndFetchLocation();
  }, []);

  return { isFetchingCoords: !coords && !errorCoords, coords, errorCoords };
};

export { useCoordinates };
