import ErrorAlert from '../ui/ErrorAlert/ErrorAlert.tsx';
import NavButton from '../ui/NavButton/NavButton.tsx';

const PageNotFound = () => {
  return (
    <>
      <ErrorAlert errorMessage="The page you are looking for could not be found" />
      <NavButton text="Go Home" />
    </>
  );
};

export default PageNotFound;
