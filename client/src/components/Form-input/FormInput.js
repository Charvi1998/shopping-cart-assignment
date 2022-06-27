import React from "react";
import "./FormInput.css";

const FormInput = ({ label, errorMessage, ...otherProps }) => {
  return (
    <div className="form-group">
      <input className="form-input" {...otherProps} />

      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
      {/* <p
        className={`${
          !otherProps.value.length ? "disabled" : "active"
        } helper-text`}
      >
        {helperText}
      </p> */}
      {/* <span className="text-error">{errorMessage}</span> */}
    </div>
  );
};

export default FormInput;
