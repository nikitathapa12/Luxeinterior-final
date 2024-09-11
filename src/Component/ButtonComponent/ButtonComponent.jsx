// ButtonComponent.js
import React from 'react';

const ButtonComponent = ({ text, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center bg-blue-950 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-300"
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
};

export default ButtonComponent;
