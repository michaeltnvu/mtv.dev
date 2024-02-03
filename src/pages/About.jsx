const About = () => {
  return (
    <div className="px-[5%] py-[15%]">
      <h2 className="font-bold text-3xl">About Me</h2>
      <div className="flex flex-col gap-8">
        <p>Hello world, I'm Michael Vu!</p>
        <p>
          I have a passion for learning new technologies and am always looking
          for ways to incorporate it into my engineering work. Currently, I am
          learning <span className="font-bold"> Next.js</span> and
          <span className="font-bold"> TypeScript</span>.
        </p>
        <p>
          Aside from coding, you can find me honing my hand-eye coordination and
          cat-like reflexes in online shooters such as Apex Legends and
          Counter-Strike 2. And when I'm not at my desk I am probably lifting
          weights, playing basketball/pickleball, or traveling to places I've
          never been :)
        </p>
      </div>
    </div>
  );
};

export default About;
