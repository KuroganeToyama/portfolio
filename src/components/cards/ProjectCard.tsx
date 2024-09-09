import React from "react";
import ButtonProject from "../button/ButtonProject";

interface Project {
  name: string;
  links: ProjectLink[];
  src: string;
  skills: string[];
  desc?: string;
}

interface ProjectLink {
  name: string;
  path: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div
      className="block rounded-lg backdrop-blur-3xl bg-blue-300 shadow-lg 
                md:hover:transform md:hover:scale-105 md:transition md:duration-200 md:ease-in-out"
    >
      <div className="h-64 overflow-hidden relative">
        <img className="rounded-t-lg object-cover object-center" src={project.src} alt={project.name}/>
      </div>
      <div className="p-6">
        <h5 className="mb-1 text-xl font-bold leading-tight text-green-600">{project.name}</h5>
        <div className="flex flex-wrap justify-start mb-2">
          {project.skills.map((item, index) => (
            <p key={index} className="font-bold text-gray-800">
              {item}
              {index !== project.skills.length - 1 && <span className="mr-2 ml-2"> · </span>}
            </p>
          ))}
        </div>
        {project.desc && <p className="mb-4 text-base font-light text-gray-800">{project.desc}</p>}
        <div className="flex flex-wrap gap-4">
          {project.links.map((link, index) => (
            <ButtonProject key={index} name={link.name} path={link.path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;