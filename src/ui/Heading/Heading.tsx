import { type ReactNode } from 'react';
import ScaleSwitcher from '../../components/ScaleSwitcher/ScaleSwitcher.tsx';

import styles from './Heading.module.scss';

type HeadingProps = {
  children: ReactNode;
};

const Heading = ({ children }: HeadingProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>{children}</div>
      <ScaleSwitcher />
    </div>
  );
};

export default Heading;
