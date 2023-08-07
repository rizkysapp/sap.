"use client";

import React from "react";

interface Props {
  onSubmit: (e: React.MouseEvent<HTMLFormElement>) => void;
  placeholder?: string;
  onChange?: any;
  icon?: React.ReactNode;
  className?: String;
}

const Input: React.FC<Props> = ({ placeholder, onChange, icon, className, onSubmit }) => {
  return (
    <>
      <form action="" className="w-full" onSubmit={onSubmit}>
        <div
          className={`
            flex 
            items-center 
            bg-white 
            border 
            border-gray-800 
            rounded-lg 
            overflow-hidden 
            px-2 
            py-2 
            justify-between 
            shadow-md 
            ${className}
          `}
        >
          <input
            type="text"
            className=" 
              text-sm
              text-gray-800 
              flex-grow 
              outline-none 
              px-1
            "
            onChange={onChange}
            placeholder={placeholder}
          />
          <button>{icon}</button>
        </div>
      </form>
    </>
  );
};

export default Input;
