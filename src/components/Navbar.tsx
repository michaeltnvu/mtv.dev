// logo | home | projects | resume | contact
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  return (
    <div className="flex items-center justify-between max-lg:mr-6 max-lg:ml-2 lg:mx-4">
      <a href="/">
        <img src="images/logo.png" alt="logo" className="w-20" />
      </a>
      <nav>
        <section className="flex lg:hidden">
          <div
            className="hover:cursor-pointer space-y-1"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-6 animate-pulse bg-black"></span>
            <span className="block h-0.5 w-6 animate-pulse bg-black"></span>
            <span className="block h-0.5 w-6 animate-pulse bg-black"></span>
          </div>

          <div
            className={
              isNavOpen
                ? "absolute w-6/12 h-72 top-0 left-48 md:w-1/4 md:left-[35.8rem] bg-gray-100 z-10 flex flex-col justify-center items-center rounded-lg shadow-xl"
                : "hidden"
            }
          >
            <div
              className="absolute top-0 right-0 px-5 py-7"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <svg
                className="hover:cursor-pointer h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-evenly min-h-[250px]">
              <li
                className="border-b border-indigo-500 uppercase"
                onClick={() => setIsNavOpen(false)}
              >
                <Link to="/">home</Link>
              </li>
              <li
                className="border-b border-indigo-500 uppercase"
                onClick={() => setIsNavOpen(false)}
              >
                <Link to="/projects">projects</Link>
              </li>
              <li
                className="border-b border-indigo-500 uppercase"
                onClick={() => setIsNavOpen(false)}
              >
                <Link to="/contact">contact</Link>
              </li>
            </ul>
          </div>
        </section>

        <ul className="gap-6 hidden lg:flex mr-4">
          <li>
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
          </li>
          <li>
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
          </li>
          <li>
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
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
