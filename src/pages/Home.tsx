import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Home = () => {
  const [text] = useTypewriter({
    words: [
      "Michael (hello!)",
      "a developer by day (bc responsibilities!)",
      "a gamer by night (bc destress!)",
      "an ex-collegiate basketball player (bc athletic!)",
      "now a pickleball enthusiast (bc old, but athletic!)",
      "also a gym-goer (bc food!)",
      "traveling the world when on vacation (bc wow!)",
      "saying yes (bc you want to hire me!)"
    ],
    loop: true,
    typeSpeed: 60,
    deleteSpeed: 40,
  });

  return (
    <div className="max-w-[65vw] max-h-[80vh] h-[80vh] mx-auto flex gap-24 justify-center items-center">
      <div>
        <img
          src="src\assets\portrait.jpg"
          alt="profile picture"
          className="w-72"
        />
        <h1 className="font-extrabold mt-4 text-3xl text-center">Michael Vu</h1>
      </div>
      <div className="flex flex-col gap-10 justify-between">
        <h1 className="text-3xl text-left">
          I'm{" "}
          <span>{text}</span>
          <span><Cursor cursorStyle="|" /></span> 
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
