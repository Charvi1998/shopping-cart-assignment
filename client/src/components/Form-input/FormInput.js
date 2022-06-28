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
    </div>
  );
};

export default FormInput;
