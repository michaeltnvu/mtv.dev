import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

const Home = () => {
  return (
    <div className="px-[5%] py-[15%] flex flex-col gap-8">
      <div>
        <h1 className="font-bold text-3xl">Michael Vu</h1>
        <h2>Full Stack Developer</h2>
      </div>

      <img
        className="w-24 rounded-full"
        src="./src/assets/profile.jpg"
        alt="profile image"
      />
      <ul>
        <li>
          <a
            className="flex items-center"
            href="https://github.com/michaeltnvu"
            target="_blank"
          >
            <FaGithub className="mr-2" />
            <span>/michaeltnvu</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center"
            href="https://linkedin.com/in/michaeltnvu"
            target="_blank"
          >
            <FaLinkedin className="mr-2" />
            <span>/michaeltnvu</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center"
            href="mailto:vu.michaeltien@gmail.com"
          >
            <IoMailOutline className="mr-2" />
            <span>vu.michaeltien@gmail.com</span>
          </a>
        </li>
      </ul>
      <p>
        Hi, I'm Michael Vu, an ex-collegiate athlete, ex-accountant, and
        ex-project manager turned software engineer.
      </p>
    </div>
  );
};

export default Home;
