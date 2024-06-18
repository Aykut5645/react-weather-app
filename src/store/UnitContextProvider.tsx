import { type ReactNode, useEffect, useState } from 'react';

import { UnitContext } from './UnitContext.tsx';
import { Unit } from '../enum/UnitEnum.tsx';
import { UnitType } from '../types/UnitType.tsx';

type UnitContextProviderProps = {
  children: ReactNode;
};

const UnitContextProvider = ({ children }: UnitContextProviderProps) => {
  const [unit, setUnit] = useState<UnitType>(() => {
    const storedValue = localStorage.getItem('unit');
    return storedValue ? JSON.parse(storedValue) : Unit.CELSIUS;
  });

  useEffect(() => {
    localStorage.setItem('unit', JSON.stringify(unit));
  }, [unit]);

  const changeUnit = (unit: UnitType) => {
    setUnit(unit);
  };

  return (
    <UnitContext.Provider value={{ unit, changeUnit }}>
      {children}
    </UnitContext.Provider>
  );
};

export default UnitContextProvider;
