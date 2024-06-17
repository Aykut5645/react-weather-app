import { createContext } from 'react';

type UnitContextType = {
  unit: boolean;
  changeUnit: () => void;
};

export const UnitContext = createContext<UnitContextType | null>(null);

