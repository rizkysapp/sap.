import React from "react";

interface Props {
  children: React.ReactNode;
}

const Cart: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div
        className="
        h-full 
        overflow-hidden
        border-2 
        cursor-pointer 
        border-black 
        rounded
        relative 
        shadow-dark
        transition
      "
      >
        {children}
      </div>
    </>
  );
};

export default Cart;
