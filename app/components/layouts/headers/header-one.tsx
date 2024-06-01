type Props = {
  children?: React.ReactNode;
};

const HeaderOne = ({ children }: Props) => {
  return <header>{children}</header>;
};

export default HeaderOne;
