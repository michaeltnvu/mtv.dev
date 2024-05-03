import { Link } from "react-router-dom";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: [
      "Michael (hello!)",
      "a developer by day (bc responsibilities!)",
      "a gamer by night (bc destress!)",
      "an ex-collegiate basketball player (bc athletic!)",
      "now a pickleball enthusiast (bc old, but athletic!)",
      "a gym-goer (bc food!)",
      "traveling the world when on vacation (bc wow!)",
      "shouting yes (bc you want to hire me!)",
    ],
    loop: true,
    typeSpeed: 60,
    deleteSpeed: 40,
  });

  return (
    <div className="max-w-[65vw] max-h-[90vh] h-[84vh] mx-auto flex gap-24 justify-center items-center">
      <div className="flex flex-col items-center">
        <img
          src="src\assets\portrait.jpg"
          alt="profile picture"
          className="w-72"
        />
        <h1 className="font-bold mt-4 mb-2 text-3xl">Michael Vu</h1>
        <Link
          to=""
          className="border border-black py-1 px-4 hover:before:bg-red relative overflow-hidden bg-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-indigo-400 before:transition-all before:duration-200 hover:text-black hover:before:left-0 hover:before:w-full"
        >
          <span className="relative z-10">Resume</span>
        </Link>
      </div>
      <div className="flex flex-col gap-10 justify-between">
        <h1 className="text-3xl text-left">
          I'm <span>{text}</span>
          <span>
            <Cursor cursorStyle="|" />
          </span>
        </h1>
        <div className="font-light">
          <p className="text-xl">
            <em>
              "The greatest glory in living lies not in never falling, but in
              rising every time we fall."
            </em>
          </p>
          <span className="float-right text-xl">- Nelson Mandela</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
