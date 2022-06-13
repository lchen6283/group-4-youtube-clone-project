import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <h1>
        <Link to="/">YouTube</Link>
      </h1>
      <h1>
        <Link to="/">Home</Link>
      </h1>
      <h1>
        <Link to="/about">About</Link>
      </h1>
    </header>
  );
};

export default Nav;