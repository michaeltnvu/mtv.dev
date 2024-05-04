import { useEffect } from "react";
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

  const updateImgSrc: () => void = () => {
    const image = document.getElementById("responsiveImg") as HTMLImageElement;
    const mediumScreen: MediaQueryList =
      window.matchMedia("(min-width: 768px)");

    image.src = mediumScreen.matches
      ? "/images/portrait.jpg"
      : "/images/portraitsq.jpg";
  };

  useEffect(() => {
    updateImgSrc();

    const isMediumScreen: MediaQueryList =
      window.matchMedia("(min-width: 768px)");

    isMediumScreen.addEventListener("change", updateImgSrc);

    return () => {
      isMediumScreen.removeEventListener("change", updateImgSrc);
    };
  }, []);

  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between space-y-16">
        <article className="flex flex-col gap-2 items-center mt-14">
          <img
            id="responsiveImg"
            alt="profile picture"
            className="w-60"
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

        {/* <article>
        <h2 className="text-lg px-8">
          I'm <span>{text}</span>
          <span>
            <Cursor cursorStyle="|" />
          </span>
        </h2>
      </article> */}

        <article className="font-light px-10 text-lg">
          <p>
            <em>
              "The greatest glory in living lies not in never falling, but in
              rising every time we fall."
            </em>
          </p>
          <span className="float-right">- Nelson Mandela</span>
        </article>
      </section>
      <section className="md-lg:"></section>
    </>
  );
};

export default Home;
