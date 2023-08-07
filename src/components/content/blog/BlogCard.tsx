import Image from "next/image";
import { BsEye } from "react-icons/bs";
import { BiTimeFive, BiRightArrowAlt } from "react-icons/bi";
import Underline from "../../links/Underline";
import Cart from "../Cart";
import { BlogProps } from "@/types/Blog";
import React from "react";

const BlogCard: React.FC<BlogProps> = ({ title, date, desc, look, dateUp, srcImage, small }) => {
  return (
    <div className={`${small ? "md:w-full" : "w-1/2"}`}>
      <Cart>
        <div
          className=" 
            relative
            object-cover 
            p-1
          "
        >
          <Image
            className="
              w-full 
              h-auto
              overflow-hidden
              rounded-t
            "
            src={`${srcImage}`}
            alt="sa"
            width={600}
            height={400}
          />
        </div>
        <div className="p-2">
          <h1
            className="
              text-xl 
              font-semibold
            "
          >
            {title}
          </h1>
          <div
            className={`
              flex 
              justify-start 
              gap-5 
              items-center 
              mt-1
              ${small ? "flex" : "hidden"}
            `}
          >
            <div
              className={`
                flex 
                justify-center 
                items-center 
                gap-1 
                bg-gradient-to-r 
                from-[#ebf4f5] 
                to-[#b5c6e0]
              `}
            >
              <BiTimeFive size={16} />
              <h2 className="text-sm">{dateUp}</h2>
            </div>
            <div
              className="
                flex 
                justify-center 
                items-center 
                gap-2 
                bg-gradient-to-r 
                from-[#ebf4f5] 
                to-[#b5c6e0]
              "
            >
              <BsEye size={16} />
              <span className="text-sm">{look} views</span>
            </div>
          </div>
          <h2
            className="
              mt-2 
              text-sm 
              font-semibold
            "
          >
            {date}
          </h2>
          <p
            className={`
              mt-2 
              h-10 
              overflow-hidden 
              text-sm 
              font-normal
              ${small ? "h-16 overflow-hidden" : "h-auto mb-4"}
            `}
          >
            {desc}
          </p>
        </div>
        <div
          className={`
            px-2 
            mb-3 
            items-center 
            justify-start
            ${small ? "flex" : "hidden"}
          `}
        >
          <Underline href="/test">
            <span>Lee more</span>
            <BiRightArrowAlt />
          </Underline>
        </div>
      </Cart>
    </div>
  );
};

export default BlogCard;
