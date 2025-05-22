import "./Header.css";
const Header = ({ param }) => {
  const { title } = { ...param };
  return <h1>{title}</h1>;
};

export default Header;
