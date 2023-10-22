interface Props {
  children: any;
}
export const Heading = ({ children }: Props) => {
  return <div className="text-6xl font-semibold">{children}</div>;
};
