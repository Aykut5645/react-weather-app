import { useState, useEffect } from 'react';

type Location = {
  lat: number;
  lng: number;
};

const useLocation = () => {
  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
    const success = (position: GeolocationPosition) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    };

    const error = (err: GeolocationPositionError) => {
      console.error('Error fetching location => ', err);
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return location;
};

export default useLocation;
