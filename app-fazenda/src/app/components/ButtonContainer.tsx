import React, { ReactNode } from 'react';

interface ButtonContainerProps {
  children: ReactNode;
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({ children }) => {
  return (
    <div className=" bg-gray-400 rounded-lg shadow-lg p-6 space-x-4 flex flex-row justify-center">
      {children}
    </div>
  );
};

export default ButtonContainer;