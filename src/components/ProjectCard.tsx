import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  skills: string;
  image: string;
  liveLink: string;
  sourceCode: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  skills,
  image,
  liveLink,
  sourceCode,
}) => {
  return (
    <div className="bg-slate-200 p-4 mx-4 rounded-md shadow-sm space-y-4 md:p-4 lg:flex lg:items-center lg:w-[60rem]">
      <img
        src={image}
        alt="project screenshot"
        className="mx-auto shadow-lg rounded-md md:min-w-[100%] lg:max-w-[50%] lg:min-w-[50%]"
      />
      <div className="space-y-2 lg:text-center lg:px-6">
        <h3 className="font-semibold text-2xl">{title}</h3>
        <p>{description}</p>
        <p>
          <span className="font-medium">Technologies used:</span> {skills}
        </p>
        <div className="flex gap-4 items-center justify-center pt-4">
          <Link
            to={liveLink}
            target="_blank"
            className="border border-black py-1 px-3 relative overflow-hidden bg-white transition-all before:absolute before:bottom-0 before:right-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-indigo-400 before:transition-all before:duration-500 hover:text-black hover:before:right-0 hover:before:w-full"
          >
            <span className="relative z-10">See Live</span>
          </Link>
          <Link
            to={sourceCode}
            target="_blank"
            className="hover:before:scale-x-100 hover:before:origin-right relative before:w-full before:h-1 before:origin-left before:transition-transform before:duration-300 before:scale-x-0 before:bg-indigo-500 before:absolute before:right-0 before:bottom-0"
          >
            Source Code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
