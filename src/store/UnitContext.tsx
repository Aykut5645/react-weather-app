import { createContext } from 'react';
import { UnitType } from '../types/UnitType.tsx';

type UnitContextType = {
  unit: UnitType;
  changeUnit: (unit: UnitType) => void;
};

export const UnitContext = createContext<UnitContextType | null>(null);
