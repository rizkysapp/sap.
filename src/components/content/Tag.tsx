import React from "react";
import UnstyledLink from "../links/UnstyledLink";

interface Props {
  href: String;
  children: React.ReactNode;
}

const Tag: React.FC<Props> = ({ href, children }) => {
  return (
    <>
      <UnstyledLink
        href={`${href}`}
        className="
          px-2 
          py-1 
          bg-slate-100 
          shadow 
          hover:shadow-md
          rounded
          text-sm
        "
      >
        {children}
      </UnstyledLink>
    </>
  );
};

export default Tag;
