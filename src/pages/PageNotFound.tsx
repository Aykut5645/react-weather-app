import ErrorMessage from '../ui/ErrorMessage/ErrorMessage.tsx';
import NavButton from '../ui/NavButton/NavButton.tsx';

const PageNotFound = () => {
  return (
    <>
      <ErrorMessage
        statusCode={404}
        errorMessage="The page you are looking for could not be found"
      />
      <NavButton text="Go Home" />
    </>
  );
};

export default PageNotFound;
