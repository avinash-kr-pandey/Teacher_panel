// InputBox.js
import React from "react";

const InputBox = ({ label, type, placeholder, name, value, onChange ,disabled}) => {
  return (
    <div className="w-[80%] flex flex-col gap-1">
      <p className="text-white text-lg font-semibold font-Montserrat">
        {label}
      </p>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        disabled={disabled}
        onChange={onChange}
        className="shadow-md rounded-lg p-2  focus:outline-none border md:w-[14rem] lg:w-[20rem] xl:w-[20rem] 2xl:w-[40rem]"
      />
    </div>
  );
};

export default InputBox;
