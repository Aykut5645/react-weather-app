import { type ReactNode } from 'react';
import styles from './Heading.module.scss';

type HeadingProps = {
  children: ReactNode;
};

const Heading = ({ children }: HeadingProps) => {
  return <div className={styles.heading}>{children}</div>;
};

export default Heading;
