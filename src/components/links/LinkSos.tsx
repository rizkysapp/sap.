import React from "react";
import UnstyledLink from "./UnstyledLink";
import { LinkType } from "@/types/Link";

const LinkSos: React.FC<LinkType> = ({ href, children, className }) => {
  return (
    <>
      <UnstyledLink
        href={href}
        className={`
          flex 
          justify-start 
          items-center 
          gap-1 
          text-neutral-600 
          hover:text-gray-900  
          px-1 
          ${className}
        `}
      >
        {children}
      </UnstyledLink>
    </>
  );
};

export default LinkSos;
