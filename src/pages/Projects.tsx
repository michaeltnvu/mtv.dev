import AltProjectCard from "../components/AltProjectCard";
import ProjectCard from "../components/ProjectCard";

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col items-center my-14">
      <h2 className="font-bold text-3xl mb-4">Projects</h2>
      <div className="flex flex-col gap-8">
        <div>
          <ProjectCard
            title="Pathfindr"
            description="A captivating full-stack social media app tailored for travel enthusiasts. Powered by the MERN stack, its SPA frontend, built with React, offers a seamless experience with multiple views and full CRUD actions. The REST API backend, constructed with ExpressJS, MongoDB, and Mongoose, communicates flawlessly with the frontend. With user authentication, Pathfindr ensures a secure and feature-rich environment."
            skills="JavaScript, React, Express, Node, MongoDB, Tailwind, Cloudinary, Netlify, Adaptable.io"
            image="images/pathfindr.jpg"
            liveLink="https://pathfindrr.netlify.app/login"
            sourceCode="https://github.com/michaeltnvu/project3-client"
          />
        </div>
        <div>
          <AltProjectCard
            title="Task Trove"
            description="A dynamic Single Page Application (SPA) built with React and Bootstrap, offering a user-friendly kanban board experience. Task Trove seamlessly integrates a mock backend, enabling comprehensive CRUD operations."
            skills="JavaScript, React. Bootstrap, Drag and Drop API, Fake Store API, Netlify, Adaptable.io"
            image="images/tasktrove.jpg"
            liveLink="https://task-trove.netlify.app/tasktrove"
            sourceCode="https://github.com/michaeltnvu/tasktrove"
          />
        </div>
        <div>
          <ProjectCard
            title="Ironhack Samurai"
            description="An engaging browser-based game combining DOM manipulation and Object-Oriented Programming (OOP)"
            skills="JavaScript, HTML, CSS"
            image="images/ironhacksamurai.jpg"
            liveLink="https://michaeltnvu.github.io/ironhack-samurai/"
            sourceCode="https://github.com/michaeltnvu/ironhack-samurai"
          />
        </div>
        <div>
          <AltProjectCard
            title="Seats for Eats"
            description="A reservation and table manager to be used by a restaurant that allows tracking of reservations as well as seating tables."
            skills="JavaScript, React, React Router, Bootstrap/CSS, Node.js, Knex, PostgreSQL"
            image="images/restaurant.png"
            liveLink="https://restaurant-reservation-app-five.vercel.app/dashboard"
            sourceCode="https://github.com/michaeltnvu/restaurant-reservation"
          />
        </div>
        <div>
          <ProjectCard
            title="Pomodoro"
            description="Timer application developed with adjustable work and break periods to help users study efficiently."
            skills="JavaScript, React, React Hooks, Bootstrap"
            image="images/pomodoro.png"
            liveLink="https://pomodoro-pi-six.vercel.app/"
            sourceCode="https://github.com/michaeltnvu/project_pomodoro_timer"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
