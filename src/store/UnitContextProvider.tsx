import { type ReactNode, useEffect, useState } from 'react';
import { UnitContext } from './UnitContext.tsx';

type UnitContextProviderProps = {
  children: ReactNode;
};

const UnitContextProvider = ({ children }: UnitContextProviderProps) => {
  const [unit, setUnit] = useState<boolean>(() => {
    const storedValue = localStorage.getItem('unit');
    return storedValue ? JSON.parse(storedValue) : true;
  });

  useEffect(() => {
    localStorage.setItem('unit', JSON.stringify(unit));
  }, [unit]);

  const changeUnit = () => {
    setUnit((prevState) => !prevState);
  };

  return (
    <UnitContext.Provider value={{ unit, changeUnit }}>
      {children}
    </UnitContext.Provider>
  );
};

export default UnitContextProvider;
