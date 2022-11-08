import UserInput from "../hooks/user-input";
import UserInputReducer from "../hooks/user-input-reducer";

const  ValidateEmail = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
    return true;
  }
    return false;
}

const BasicForm = (props) => {
  const {
    value: enteredFirstNameValue,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    isValid: firstNameIsValid,
    reset: resetFirstNameInput,
    hasError: firstNameInputHasError
    
  } = UserInputReducer(value => value.trim() !== "");

  const {
    value: enteredLastNameValue,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    isValid: lastNameIsValid,
    reset: resetLastNameInput,
    hasError: lastNameInputHasError
    
  } = UserInputReducer(value => value.trim() !== "");

  const {
    value: enteredEmailValue,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    isValid: emailIsValid,
    reset: resetEmailInput,
    hasError: emailInputHasError
    
  } = UserInputReducer(ValidateEmail);

  const classFirstName = firstNameInputHasError ? "form-control invalid" : "form-control";
  const classLastName = lastNameInputHasError ? "form-control invalid" : "form-control";
  const classEmail = emailInputHasError ? "form-control invalid" : "form-control";

  let formIsValid = false;
  if(firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }


  const formSubmissionHandler = (event) => {
    event.preventDefault();
    console.log(enteredFirstNameValue);
    console.log(enteredLastNameValue);
    console.log(enteredEmailValue);
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={classFirstName}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={enteredFirstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameInputHasError && <p className="error-text">First Name must be not empty.</p>}
        </div>
        <div className={classLastName}>
          <label htmlFor="lastName">Last Name</label>
          <input 
            type="text" 
            id="lastName" 
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastNameValue}
          />
          {lastNameInputHasError && <p className="error-text">Last Name must be not empty.</p>}
        </div>
      </div>
      <div className={classEmail}>
        <label htmlFor="email">E-Mail Address</label>
        <input 
          type="text" 
          id="email" 
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmailValue}
        />
        {emailInputHasError && <p className="error-text">Email must be a valid email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
