import { BsLinkedin } from "react-icons/bs";
import { VscGithubInverted } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 my-4 sticky text-center top-[100vh]">
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
