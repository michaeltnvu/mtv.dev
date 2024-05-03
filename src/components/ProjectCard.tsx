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
    <div className="flex gap-2">
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-2xl">{title}</h3>
        <p>{description}</p>
        <span>Technologies used: {skills}</span>
        <div className="flex gap-4 items-center">
          <Link to={liveLink} target="_blank" className="border border-black py-2 px-4">
            See Live
          </Link>
          <Link to={sourceCode} target="_blank">
            Source Code
          </Link>
        </div>
      </div>
      <img
        src={image}
        alt="project screenshot"
        className="h-[300px] w-[525px]"
      />
    </div>
  );
};

export default ProjectCard;
