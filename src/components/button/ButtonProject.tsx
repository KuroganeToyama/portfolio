import React from "react";
import { FaExternalLinkAlt, FaGithub, FaYoutube, FaAppStore, FaKaggle } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import { IoExtensionPuzzleOutline } from "react-icons/io5";

interface ButtonProjectProps {
  name: string;
  path: string;
}

const ButtonProject = ({ name, path }: ButtonProjectProps) => {
  const nameDisplay = (name: string) => {
    switch (name.toLowerCase()) {
      case "github":
        return <FaGithub />;
      case "youtube":
        return <FaYoutube />;
      case "devpost":
        return <SiDevpost />;
      case "apple":
        return <FaAppStore />;
      case "kaggle":
        return <FaKaggle />;
      case "chrome":
        return <IoExtensionPuzzleOutline />;
      default:
        return <FaExternalLinkAlt />;
    }
  };

  return (
    <a href={path}>
      <button className="group relative flex w-fit items-center justify-center overflow-hidden rounded-md bg-green-500 text-zinc-800  px-4 py-2 font-bold transition-transform ease-out  hover:scale-105">
        <span className="absolute inset-0 z-0 h-full translate-y-9 bg-zinc-100 transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
        <span className="relative flex items-center justify-center gap-2">
          {name}
          {nameDisplay(name)}
        </span>
      </button>
    </a>
  );
};

export default ButtonProject;