import { useState } from "react";
import FormInput from "../Form-input/FormInput";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
import Footer from "../Footer/Footer";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <>
      <div className="sign-in-container container">
        <div className="sign-in-header">
          <div className="sign-in-head">Login</div>
          <p className="sign-in-desc">
            Get access to your Orders, Wishlist and Recommendations
          </p>
        </div>
        <form className="sign-in-form" onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />

          <FormInput
            label="Password"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />
          <button className="btn sign-in-btn">SignIn</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
