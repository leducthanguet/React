import { useRef, useState, useEffect } from "react";
import useInput from "../hooks/use-input";

const  ValidateEmail = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
    return true;
  }
    return false;
}

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  // const [enteredName, setEnteredName] = useState("");
  // const [enteredEmail, setEnteredEmail] = useState("");

  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== "");


  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(ValidateEmail);
  // const [formIsValid, setFormIsValid] = useState(false);

  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  // const enteredNameIsValid = enteredName !== "";
  // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  // const enteredEmailIsValid = ValidateEmail(enteredEmail);
  // const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  // useEffect(() => {
  //   if(enteredNameIsValid){
  //     setFormIsValid(true);
  //   }
  //   else{
  //     setFormIsValid(false);
  //   }
  // }, [enteredNameIsValid])

  let formIsValid = false;
  if(enteredNameIsValid && enteredEmailIsValid){
    formIsValid=true; 
  }
  else{
    formIsValid=false;
  }
  // const nameInputChangeHandler = event => {
  //   setEnteredName(event.target.value);
  // };

  // const nameInputBlurHandler = (event) => {
  //   setEnteredNameTouched(true);
  // }

  // const emailInputChangeHandler = event => {
  //   setEnteredEmail(event.target.value);
  // };

  // const emailInputBlurHandler = (event) => {
  //   setEnteredEmailTouched(true);
  // }

  const nameInputClasses = nameInputHasError ? "form-control invalid" : "form-control";
  const emailInputClasses = emailInputHasError ? "form-control invalid" : "form-control";

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    console.log(enteredName);
    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue)
    // setEnteredNameTouched(true);
    // setEnteredEmailTouched(true);
    if (!enteredNameIsValid || !enteredEmailIsValid){
      return;
    }
    // setEnteredName("");
    // setEnteredNameTouched(false);
    resetNameInput();
    resetEmailInput();
    // setEnteredEmail("");
    // setEnteredEmailTouched(false);
    // nameInputRef.current.value = "";
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && <p className="error-text">Name must be not empty.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && <p className="error-text">Email must be a valid email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
