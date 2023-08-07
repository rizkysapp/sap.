import React from "react";

interface Props {
  title: String;
  desc: String;
}

const TitlePage: React.FC<Props> = ({ title, desc }) => {
  return (
    <>
      <div className="flex">
        <h1 className="page-h1">{title}</h1>
      </div>
      <p
        className="
          text-sm 
          font-light 
          text-neutral-600 
          mt-2
        "
      >
        {desc}
      </p>
    </>
  );
};

export default TitlePage;
