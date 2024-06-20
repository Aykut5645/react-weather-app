import { createContext } from 'react';
import { TempScaleType } from '../types/ScaleType.tsx';

type ScaleContextType = {
  scale: TempScaleType;
  changeScale: (scale: TempScaleType) => void;
};

export const ScaleContext = createContext<ScaleContextType | null>(null);
