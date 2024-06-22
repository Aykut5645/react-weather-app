import { type ReactNode } from 'react';
import styles from './ErrorAlert.module.scss';

type ErrorAlertProps = {
  statusCode?: number;
  errorMessage?: ReactNode;
};

const ErrorAlert = ({ statusCode, errorMessage }: ErrorAlertProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.status}>{statusCode}</h1>
      <h2>{errorMessage || 'Something went wrong.'}</h2>
    </div>
  );
};

export default ErrorAlert;
