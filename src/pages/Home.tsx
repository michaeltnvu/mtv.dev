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
    <div>
      <section className="flex flex-col max-md:mt-14 md:flex-row md:mx-10 items-center justify-center max-md:space-y-16">
        <article className="flex flex-col gap-2 items-center">
          <img
            src="/images/portraitsq.jpg"
            alt="profile picture"
            className="hidden max-sm:block w-60"
          />
          <img
            src="/images/portrait.jpg"
            alt="profile picture"
            className="hidden md:block w-60"
          />
          <h1 className="font-bold text-3xl">Michael Vu</h1>
          <Link
            to="https://drive.google.com/file/d/1OTI_N9mykEPVAxAYo1ELGu-Q-aKK_CME/view?usp=sharing"
            target="_blank"
            className="border border-black py-1 px-4 bg-indigo-500 hover:bg-indigo-400 rounded-sm shadow-md text-white"
          >
            <span>Resume</span>
          </Link>
        </article>
        <article className="font-light px-10 text-lg md:space-y-10">
          <h2 className="hidden md:block font-semibold">
            I'm <span>{text}</span>
            <span>
              <Cursor cursorStyle="|" />
            </span>
          </h2>
          <div>
            <p>
              <em>
                "The greatest glory in living lies not in never falling, but in
                rising every time we fall."
              </em>
            </p>
            <span className="float-right">- Nelson Mandela</span>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Home;
