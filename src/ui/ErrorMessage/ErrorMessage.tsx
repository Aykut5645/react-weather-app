import { type ReactNode } from 'react';
import styles from './ErrorMessage.module.scss';

type ErrorAlertProps = {
  statusCode?: number;
  errorMessage?: ReactNode;
};

const ErrorMessage = ({ statusCode, errorMessage }: ErrorAlertProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.status}>{statusCode}</h1>
      <div className={styles.message}>
        {errorMessage || 'Something went wrong.'}
      </div>
    </div>
  );
};

export default ErrorMessage;
