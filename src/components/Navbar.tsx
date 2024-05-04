// logo | home | projects | resume | contact
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center text-xl mx-10">
      <img src="images/logo.png" alt="logo" className="w-20"/>
      <div className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) => {
            const hoverAnimation =
              "hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-indigo-500 before:absolute before:left-0 before:bottom-0";
            const activeClass = isActive
              ? "underline decoration-indigo-500 decoration-double"
              : "";
            return `${hoverAnimation} ${activeClass}`;
          }}
        >
          home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => {
            const hoverAnimation =
              "hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-indigo-500 before:absolute before:left-0 before:bottom-0";
            const activeClass = isActive
              ? "underline decoration-indigo-500 decoration-double"
              : "";
            return `${hoverAnimation} ${activeClass}`;
          }}
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
          className={({ isActive }) => {
            const hoverAnimation =
              "hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-indigo-500 before:absolute before:left-0 before:bottom-0";
            const activeClass = isActive
              ? "underline decoration-indigo-500 decoration-double"
              : "";
            return `${hoverAnimation} ${activeClass}`;
          }}
        >
          contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
