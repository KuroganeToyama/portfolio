import { socials } from "@/data/socials";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full mx-auto mt-auto pt-4 pb-0">
      <div className="mx-auto w-full p-4 py-6 lg:py-8 bg-slate-600 text-white-900">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center mb-1">
              <span className="self-center text-2xl font-semibold whitespace-nowrap hover:text-blue-200">
                Di Nguyen
              </span>
            </a>
            <a href="mailto:di.nguyen@uwaterloo.ca" className="mt-6">
              <span className=" self-center text-sm font-light whitespace-nowrap hover:text-blue-200">
                di.nguyen@uwaterloo.ca
              </span>
            </a>
          </div>
          <ul className="flex gap-4">
            {socials.map((link) => (
                <a
                  href={link.url}
                  key={link.id}
                  className="text-blue-300 bg-white/5 aspect-square size-fit
                   hover:text-zinc-900 rounded-lg hover:bg-gray-100 shadow-sm p-4 duration-300 "
                >
                  {link.icon}
                </a>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white-500 text-left">
            © 2024 by Di Nguyen
            <br />
            Last Updated: September 2024
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;