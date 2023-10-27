import React from "react";

interface Props {
  children: React.ReactNode;
  className?: String;
}

const Cart: React.FC<Props> = ({ children, className }) => {
  return (
    <>
      <div
        className={`
        w-full
        h-full 
        overflow-hidden
        border-2 
        cursor-pointer 
        border-black 
        rounded
        relative 
        shadow-dark
        transition
        ${className}
      `}
      >
        {children}
      </div>
    </>
  );
};

export default Cart;
