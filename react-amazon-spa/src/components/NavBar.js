import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className={"nav-link"} to="/products">Product Index</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={"nav-link"} to="/products/new">New Product</NavLink>
        </li>
        
      </ul>
    </nav>
  );
};

export default NavBar;
