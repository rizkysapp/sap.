"use client";

import React, { useEffect, useState } from "react";
import Container from "../../Container";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import UnstyledLink from "@/components/links/UnstyledLink";

const Navbar = () => {
  const param = usePathname();

  const [onTop, setOnTop] = useState<Boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      setOnTop(window.pageYOffset === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        sticky 
        top-0 
        z-50 
        transition-shadow 
        bg-white 
        ${!onTop && "shadow-md"}
      `}
    >
      <Container>
        <nav className="py-4">
          <ul className="flex-start space-x-5">
            {navLinks.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href}>
                  <span
                    className={`
                      pb-[2px] 
                      font-medium 
                      ${href === param ? "underline-active link-underline-black" : "link-underline link-underline-black text-slate-950"}
                    `}
                  >
                    {label}
                  </span>
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
