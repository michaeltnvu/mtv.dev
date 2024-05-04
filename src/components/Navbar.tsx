// logo | home | projects | resume | contact
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  // return (
  //   <nav className="flex justify-between items-center text-xl mx-10">
  //     <img src="images/logo.png" alt="logo" className="w-20"/>
  //     <div className="flex gap-6">
  //       <NavLink
  //         to="/"
  //         className={({ isActive }) => {
  //           const hoverAnimation =
  //             "hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-indigo-500 before:absolute before:left-0 before:bottom-0";
  //           const activeClass = isActive
  //             ? "underline decoration-indigo-500 decoration-double"
  //             : "";
  //           return `${hoverAnimation} ${activeClass}`;
  //         }}
  //       >
  //         home
  //       </NavLink>
  //       <NavLink
  //         to="/projects"
  //         className={({ isActive }) => {
  //           const hoverAnimation =
  //             "hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-indigo-500 before:absolute before:left-0 before:bottom-0";
  //           const activeClass = isActive
  //             ? "underline decoration-indigo-500 decoration-double"
  //             : "";
  //           return `${hoverAnimation} ${activeClass}`;
  //         }}
  //       >
  //         projects
  //       </NavLink>
  //       <NavLink
  //         to="/contact"
  //         className={({ isActive }) => {
  //           const hoverAnimation =
  //             "hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-indigo-500 before:absolute before:left-0 before:bottom-0";
  //           const activeClass = isActive
  //             ? "underline decoration-indigo-500 decoration-double"
  //             : "";
  //           return `${hoverAnimation} ${activeClass}`;
  //         }}
  //       >
  //         contact
  //       </NavLink>
  //     </div>
  //   </nav>
  // );
  return (
    <div className="flex items-center justify-between mx-4">
      <a href="/">
        <img src="images/logo.png" alt="logo" className="w-20" />
      </a>
      <nav>
        <section className="flex lg:hidden">
          <div
            className="hover:cursor-pointer mr-2 space-y-1 "
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-6 animate-pulse bg-black"></span>
            <span className="block h-0.5 w-6 animate-pulse bg-black"></span>
            <span className="block h-0.5 w-6 animate-pulse bg-black"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
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
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li
                className="border-b border-indigo-500 my-8 uppercase"
                onClick={() => setIsNavOpen(false)}
              >
                <Link to="/">home</Link>
              </li>
              <li
                className="border-b border-indigo-500 my-8 uppercase"
                onClick={() => setIsNavOpen(false)}
              >
                <Link to="/projects">projects</Link>
              </li>
              <li
                className="border-b border-indigo-500 my-8 uppercase"
                onClick={() => setIsNavOpen(false)}
              >
                <Link to="/contact">contact</Link>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
};
export default Navbar;
