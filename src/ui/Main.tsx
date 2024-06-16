import { type ReactNode } from 'react';

type MainProps = {
  children: ReactNode;
};

const Main = ({ children }: MainProps) => {
  return <main style={{ maxWidth: '85rem', margin: 'auto' }}>{children}</main>;
};

export default Main;
