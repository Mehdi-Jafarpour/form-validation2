import { useState, useEffect } from "react";

const useForm = (validate) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    website: "",
    sex: "",
    marride: "",
    age: "",
    email: "",
    country: "",
    city: "",
    catchPhrase: "",
  });
  const [errors, setErrors] = useState({});
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
   
  
  };
  const handleOnBlur = (e) => {
    setErrors(validate(values));
  };
  
  
 
  return { handleChange, values, handleSubmit, errors, handleOnBlur};
};


export default useForm;

