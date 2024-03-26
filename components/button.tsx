import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  fill?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  fill,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        `${
          fill
            ? "bg-dark-blue text-white border-none"
            : "bg-transparent text-dark-blue border "
        } px-12 py-3  font-bold uppercase`,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
