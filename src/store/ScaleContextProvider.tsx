import { type ReactNode, useEffect, useState } from 'react';

import { ScaleContext } from './ScaleContext.tsx';
import { TempScale } from '../utils/enums.tsx';
import { TempScaleType } from '../types/ScaleType.tsx';
import { SCALE_KEY } from '../utils/constants.tsx';

type ScaleContextProviderProps = {
  children: ReactNode;
};

const ScaleContextProvider = ({ children }: ScaleContextProviderProps) => {
  const [scale, setScale] = useState<TempScaleType>(() => {
    const storedValue = localStorage.getItem(SCALE_KEY);
    return storedValue ? JSON.parse(storedValue) : TempScale.CELSIUS;
  });

  useEffect(() => {
    localStorage.setItem(SCALE_KEY, JSON.stringify(scale));
  }, [scale]);

  const changeScale = (scale: TempScaleType) => {
    setScale(scale);
  };

  return (
    <ScaleContext.Provider value={{ scale, changeScale }}>
      {children}
    </ScaleContext.Provider>
  );
};

export default ScaleContextProvider;
