// logo | home | projects | resume | contact
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-end items-center text-xl my-4 mx-10">
      <div className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          projects
        </NavLink>
        {/* <NavLink
          to="/resume"
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          resume
        </NavLink> */}
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
