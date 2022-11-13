import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-3 px-9 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[5px] outline-none ${styles}`}>
    Download App
  </button>
);

export default Button;
