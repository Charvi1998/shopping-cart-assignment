import { React, useState } from "react";
import FormInput from "../Form-input/FormInput";
import "./Register.css";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstName, lastName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      navigate("/");
      resetFormFields();
    }
  };

  const validate = () => {
    let fNameError = "";
    let lNameError = "";
    let emailError = "";
    let passwordError = "";
    if (!firstName) {
      fNameError = "First Name field is required";
    }
    if (!lastName) {
      lNameError = "First Name field is required";
    }

    const reg = new RegExp("/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/()");

    if (!email || reg.test(email) === false) {
      emailError = "Email Field is Invalid ";
    }
    if (!password) {
      passwordError = "Password field is required";
    }
    if (emailError || fNameError || lNameError || passwordError) {
      setFormFields({ fNameError, lNameError, emailError, passwordError });
      return false;
    }
    return true;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <>
      <div className="sign-up-container container">
        <div className="sign-up-header">
          <div className="sign-up-head">Signup</div>
          <p className="sign-up-desc">
            We do not share your personal details with anyone.
          </p>
        </div>

        <form className="sign-up-form" onSubmit={handleSubmit}>
          <FormInput
            label="First Name"
            type="text"
            required
            onChange={handleChange}
            name="firstName"
            value={firstName}
            errorMessage={formFields.fNameError}
          />
          <FormInput
            label="Last Name"
            type="text"
            required
            onChange={handleChange}
            name="lastName"
            value={lastName}
            errorMessage={formFields.lNameError}
          />
          <FormInput
            label="Email"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
            errorMessage={formFields.emailError}
          />
          <FormInput
            label="Password"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
            errorMessage={formFields.passwordError}
          />
          <FormInput
            label="Confirm Password"
            type="password"
            required
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
          />
          <button className="btn signup-btn">SignUp</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Register;
