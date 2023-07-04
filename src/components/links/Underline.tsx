import React from "react";
import UnstyledLink from "./UnstyledLink";
import { LinkType } from "@/types/Link";

const Underline: React.FC<LinkType> = ({ children, ...rest }) => {
  return (
    <>
      <UnstyledLink
        {...rest}
        className={`
          link-underline 
          link-underline-black 
          text-slate-950 
          flex 
          justify-center 
          items-center 
          gap-1
        `}
      >
        {children}
      </UnstyledLink>
    </>
  );
};

export default Underline;
