import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}
export const Heading = ({ children, className = "" }: Props) => {
  return (
    <h2
      className={`section-title text-3xl font-semibold tracking-[-0.035em] text-white md:text-5xl ${className}`}
    >
      {children}
    </h2>
  );
};
