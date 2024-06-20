import { useContext } from 'react';
import { ScaleContext } from '../store/ScaleContext.tsx';

const useScale = () => {
  const context = useContext(ScaleContext);
  if (context === null) {
    throw new Error('ScaleContext was used outside of the ScaleProvider');
  }
  return context;
};

export { useScale };
