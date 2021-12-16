import React from "react";
import "./index.scss";
import patchExclamationFill from "../../images/icons/patchExclamationFill.svg";

export default function InputErrorMessage({ error }) {
  if (!error) {
    return null;
  }

  return (
    <div className="errorMessage" role="alert">
      <img src={patchExclamationFill} alt="Error logo" />
      <p>{error.message}</p>
    </div>
  );
}
