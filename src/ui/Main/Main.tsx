import { type ReactNode } from 'react';

import styles from './Main.module.scss';

type MainProps = {
  children: ReactNode;
};

const Main = ({ children }: MainProps) => {
  return <main className={styles.main}>{children}</main>;
};

export default Main;
