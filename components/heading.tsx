import React from "react";
import Button from "@/components/button";

interface HeadingProps {
  children: React.ReactNode;
  title: string;
  btn: string;
  btnOnClick: () => void;
}

const Heading: React.FC<HeadingProps> = ({
  children,
  title,
  btn,
  btnOnClick,
}) => {
  return (
    <div className="my-8 text-center">
      <h2 className=" text-4xl text-dark-blue font-bold uppercase">
        {children}
      </h2>
      <p className="my-4">{title}</p>
      {btn && <Button onClick={btnOnClick}>{btn}</Button>}
    </div>
  );
};

export default Heading;
