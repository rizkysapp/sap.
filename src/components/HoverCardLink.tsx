import React from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import { IconType } from "react-icons/lib";

interface Props {
  desc: String;
  title: String | JSX.Element;
  href: String;
  className?: String;
}

const HoverCardLink: React.FC<Props> = ({ desc, title, href, className }) => {
  return (
    <>
      <HoverCard.Root openDelay={2} closeDelay={2}>
        <HoverCard.Trigger
          href={`${href}`}
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
          {title}
        </HoverCard.Trigger>
        <HoverCard.Portal>
          <HoverCard.Content side="top" sideOffset={4} className="HoverCardContent">
            <div
              className="
                border-2 
                border-gray-950 
                rounded-md 
                p-2 
                shadow-md 
                bg-white
              "
            >
              <p className="text-sm font-normal">{desc}</p>
            </div>
            <HoverCard.Arrow />
          </HoverCard.Content>
        </HoverCard.Portal>
      </HoverCard.Root>
    </>
  );
};

export default HoverCardLink;
