interface Props {
  children: any;
}
export const Heading = ({ children }: Props) => {
  return <div className="text-4xl md:text-6xl font-semibold">{children}</div>;
};
