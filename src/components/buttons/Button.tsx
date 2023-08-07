"use client";

import React from "react";
import { IconType } from "react-icons";

interface Props {
  label?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  small?: Boolean;
  outline?: boolean;
  icon?: IconType;
  full?: boolean;
  className?: String;
}
const Button: React.FC<Props> = ({ label, onClick, disabled, small, outline, icon: Icon, full, className }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`
          py-2  
          cursor-pointer 
          rounded
          relative 
          transition
          font-normal
          sm:font-semibold
          text-base
          ${
            small
              ? "small-btn rounded-sm shadow-md"
              : `${outline ? "bg-gray-950 text-white hover:bg-transparent hover:text-gray-900 outline-btn text-md" : "hover:bg-gray-950 hover:text-white outline-btn"}`
          }
          ${full ? "w-full" : "px-4"}
          ${className}
        `}
      >
        {Icon && <Icon size={20} />}
        {label}
      </button>
    </>
  );
};

export default Button;
