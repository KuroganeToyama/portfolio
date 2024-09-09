import React from "react";
import ProjectCard from "@/components/cards/ProjectCard";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <section className="w-[85%] mx-auto text-slate-50 pt-8 pb-8">
      <h1 className="text-3xl md:text-[40px] lg:text-[60px] font-bold text-green-500 mb-16">
        So... what projects did I work on?
      </h1>

      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 justify-between mb-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;