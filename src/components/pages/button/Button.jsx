import React from "react";
import '../button/button.css'; 


const Button = ({ label, onClick, disabled }) => {
  return (
    <button className="custom-button" onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
