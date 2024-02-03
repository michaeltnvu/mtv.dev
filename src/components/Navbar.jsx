import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center p-2">
      <Link to="/">
        <img
          className="w-12"
          src="./src/assets/logo-no-background.png"
          alt="my logo"
        />
      </Link>
      <div className="relative flex flex-col items-center">
        <button
          className="p-[1.15em] rounded-full"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {!isOpen ? (
            <RxHamburgerMenu className="text-[1.5rem]" />
          ) : (
            <IoClose className="text-[1.5rem]" />
          )}
        </button>
        {isOpen && (
          <ul className="absolute bg-black rounded-lg left-[-60px] top-16 flex flex-col gap-2">
            <li className="py-2 px-6 rounded-md hover:bg-stone-700 focus-within:bg-stone-800">
              <Link className="" to="/about">
                About
              </Link>
            </li>
            <li className="py-2 px-6 rounded-lg hover:bg-stone-700 focus-within:bg-stone-800">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="py-2 px-6 rounded-lg hover:bg-stone-700 focus-within:bg-stone-800">
              <Link to="/resume">Resume</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
