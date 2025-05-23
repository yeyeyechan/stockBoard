import "./Header.css";
const Header = ({ headerProps }) => {
  const { title } = { ...headerProps };
  return <h1>{title}</h1>;
};

export default Header;
