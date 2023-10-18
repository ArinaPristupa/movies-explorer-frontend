import React from 'react';

const useValidation = () => {

  const [errorsValidation, setErrorsValidation] = React.useState({});
  const [valuesValidation, setValuesValidation] = React.useState({});
  const [isFormValidation, setIsFormValidation] = React.useState(false);

  const handleChange = (evt) => {

    const name = evt.target.name;
    const value = evt.target.value;

    setValuesValidation({ ...valuesValidation, [name]: value, });

    setErrorsValidation({ ...errorsValidation, [name]: evt.target.validationMessage, });

    setIsFormValidation(evt.target.form.checkValidity());
  };

  const resetForm = React.useCallback(
    (newValuesValidation = {}, newErrorsValidation = {}, newIsFormValidation = false) => {
      setValuesValidation(newValuesValidation);
      setErrorsValidation(newErrorsValidation);
      setIsFormValidation(newIsFormValidation);
    }, [setValuesValidation, setErrorsValidation, setIsFormValidation]
  );

  return {
    handleChange,
    resetForm,
    errorsValidation,
    isFormValidation,
    valuesValidation,
  };

};

export default useValidation;
