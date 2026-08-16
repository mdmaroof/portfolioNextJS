import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}
export const Heading = ({ children, className = "" }: Props) => {
  return (
    <h2
      className={`text-3xl font-semibold tracking-tight text-white md:text-5xl ${className}`}
    >
      {children}
    </h2>
  );
};
