import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

interface ButtonProps {
  label: string;
  path: string;
}

const Button = ({ label, path }: ButtonProps) => {
  return (
    <a href={path} target="_blank">
      <button className="group relative flex w-fit items-center justify-center overflow-hidden rounded-md bg-green-500 text-zinc-800 px-4 py-2 font-bold transition-transform ease-out hover:scale-105">
        <span className="absolute inset-0 z-0 h-full translate-y-9 bg-zinc-100 transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
        <span className="relative flex items-center justify-center gap-2">
          {label} <FaExternalLinkAlt />{" "}
        </span>
      </button>
    </a>
  );
};

export default Button;