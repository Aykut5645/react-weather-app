import { useContext } from 'react';
import { UnitContext } from '../store/UnitContext.tsx';

const useUnit = () => {
  const context = useContext(UnitContext);
  if (context === null) {
    throw new Error('UnitContext was used outside of the PostProvider');
  }
  return context;
};

export { useUnit };
