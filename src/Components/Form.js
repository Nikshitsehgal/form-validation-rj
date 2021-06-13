import React, { useState } from "react";
import FormSignUp from "./FormSignUp";
import FormSuccess from "./FormSuccess";
import LeftContent from "./LeftContent";
import "./form.css";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div className="form-container">
      <span className="close-btn">x</span>
      <LeftContent isSubmitted={isSubmitted} />
      {!isSubmitted ? <FormSignUp submitForm={submitForm} /> : <FormSuccess />}
    </div>
  );
};

export default Form;
