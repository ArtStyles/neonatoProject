import { useFormikContext } from 'formik';
import { useEffect } from 'react';

const ScrollToFirstError = () => {
  const { errors, isSubmitting, isValidating } = useFormikContext();

  useEffect(() => {
    if (isSubmitting && !isValidating) {
      const keys = Object.keys(errors);
      if (keys.length > 0) {
        const selector = `[name=${keys[0]}]`;
        const errorElement = document.querySelector(selector);
        if (errorElement) {
          errorElement.scrollIntoView();
          window.scrollTo(0,0);
        }
      }
    }

  }, [errors, isSubmitting, isValidating]);

  return null;
};

export default ScrollToFirstError;