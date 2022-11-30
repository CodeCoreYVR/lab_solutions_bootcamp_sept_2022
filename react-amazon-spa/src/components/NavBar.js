import { NavLink } from "react-router-dom";
import { Session } from "../requests";
const NavBar = ({ currentUser, onSignOut }) => {
  const handleSignOut = () => {
    Session.destroy().then(() => {
      onSignOut();
    });
  };
  return (
    <nav>
      <NavLink to="/products">Product Index</NavLink>|
      {currentUser ? (
        <>
          <NavLink to="/products/new">New Product</NavLink>-
          <span>Welcome, {currentUser.first_name}</span>-{" "}
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <>
          <NavLink to="/sign_in">Sign In</NavLink>|
          <NavLink to="/sign_up">Sign Up</NavLink>
        </>
      )}
    </nav>
  );
};

export default NavBar;