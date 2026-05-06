interface Props {
  children: any;
}
export const Heading = ({ children }: Props) => {
  return (
    <div className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
      {children}
    </div>
  );
};
