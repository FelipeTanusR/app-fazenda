import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({  children }) => {
  return (
    <button className="bg-gray-400 shadow-lg px-10 py-10  text-black rounded-lg hover:bg-gray-600 transition-colors duration-300">
      {children}
    </button>
  );
};

export default Button;