import { type ReactNode } from 'react';
import MetricSwitcher from '../../components/MetricSwitcher/MetricSwitcher.tsx';

import styles from './Heading.module.scss';

type HeadingProps = {
  children: ReactNode;
};

const Heading = ({ children }: HeadingProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>{children}</div>
      <MetricSwitcher />
    </div>
  );
};

export default Heading;
