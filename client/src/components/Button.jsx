import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-indigo-600 text-white font-Sat py-2 px-6 rounded md:ml-8 duration-500">
      {children}
    </button>
  );
};

export default Button;
