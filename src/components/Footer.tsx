import { BsLinkedin } from "react-icons/bs";
import { VscGithubInverted } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mx-4 my-4 flex flex-col justify-between text-center">
      <div className="flex items-center gap-3 mx-auto">
        <Link to="https://github.com/michaeltnvu" target="_blank">
          <VscGithubInverted className="w-11 h-11" />
        </Link>
        <Link to="https://linkedin.com/in/michaeltnvu" target="_blank">
          <BsLinkedin className="rounded-full w-11 h-11" />
        </Link>
      </div>
      <span className="text-sm">© 2024 Michael Vu</span>
    </div>
  );
};

export default Footer;
