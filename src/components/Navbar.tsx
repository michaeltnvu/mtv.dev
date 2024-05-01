// logo | home | projects | resume | contact
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <NavLink
      to=""
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
    ></NavLink>
  );
};

export default Navbar;
