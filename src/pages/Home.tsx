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
    <div className="max-w-[65vw] max-h-[90vh] h-[82vh] mx-auto flex gap-24 justify-center items-center">
      <div className="flex flex-col items-center">
        <img
          src="/images/portrait.jpg"
          alt="profile picture"
          className="w-72"
        />
        <h1 className="font-bold mt-4 mb-2 text-3xl">Michael Vu</h1>
        <Link
          to="https://drive.google.com/file/d/1OTI_N9mykEPVAxAYo1ELGu-Q-aKK_CME/view?usp=sharing"
          target="_blank"
          className="border border-black py-1 px-4 bg-indigo-500 hover:bg-indigo-400 rounded-sm text-white"
        >
          <span>Resume</span>
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
