"use client";

import Link, { LinkProps } from "next/link";
import React from "react";
import { LinkType } from "@/types/Link";

const UnstyledLink: React.ComponentPropsWithoutRef<"a"> & React.FC<LinkType & LinkProps> = ({ href, children, openNewTap, className, ...rest }) => {
  const isNewTap = openNewTap !== undefined ? openNewTap : href && !href.startsWith("/") && !href.startsWith("#");

  // console.log({ isNewTap });

  if (!isNewTap) {
    return (
      <Link href={href} {...rest} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a target="_blank" rel="noopener noreferrer" href={href} className={className}>
      {children}
    </a>
  );
};

export default UnstyledLink;
