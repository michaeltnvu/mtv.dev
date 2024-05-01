// logo | home | projects | resume | contact
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-end gap-3 text-2xl my-2 mx-4">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "underline" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) => (isActive ? "underline" : "")}
      >
        Projects
      </NavLink>
      <NavLink
        to="/resume"
        className={({ isActive }) => (isActive ? "underline" : "")}
      >
        Resume
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "underline" : "")}
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
