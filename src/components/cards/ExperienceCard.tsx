import React from "react";

interface ExperienceCardProps {
  company: string;
  role: string;
  date: string;
  location: string;
  desc: string[];
}

const ExperienceCard = ({ company, role, date, location, desc }: ExperienceCardProps) => {
  return (
    <div className="lg:flex lg:justify-between my-8 lg:gap-7 ">
      <div className="hidden lg:inline text-blue-200 text-left">
        <p className=" text-lg font-medium leading-11 text-gray-800 ">{date}</p>
        <p className=" text-lg text-gray-800 ">{location}</p>
      </div>
      <hr className="hidden border-gray-800 lg:my-4 lg:block lg:flex-grow"></hr>
      <div
        className="lg:max-w-[50%] rounded-xl bg-white/5 shadow-lg 
        md:hover:transform md:hover:scale-105 md:transition md:duration-200 md:ease-in-out
        ">
        
        <div className="flex flex-row justify-between bg-green-500 p-6 rounded-t-lg text-zinc-800 text-left">
          <div>
            <h2 className="text-md md:text-xl font-bold self-center break-normal whitespace-normal">{company}</h2>
            <h3 className="text-base md:text-md font-semibold break-normal whitespace-normal">{role}</h3>
          </div>
        </div>
        <ul className="mt-4 px-6 pb-6 text-left">
          {desc.map((point, index) => (
            <li className="list-disc ml-4 p-1 font-base text-sm text-gray-800" key={index}>
              {point}
            </li>
          ))}
        </ul>
        <h4 className="lg:hidden text-sm px-6 pb-6">
          {location} · {date}
        </h4>
      </div>
    </div>
  );
};

export default ExperienceCard;