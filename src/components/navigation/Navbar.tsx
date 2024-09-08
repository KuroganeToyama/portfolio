"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { MdMenu, MdClose } from "react-icons/md";
import { pages } from "@/data/pages";

interface NavLinkProps {
  name: string;
  path: string;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-slate-600 w-[85%] m-auto p-2 rounded-lg text-white justify-between">
      <ul className="md:flex flex-row justify-between ">
        {/* Mobile Menu - Default */}
        <div className="flex items-center justify-between font-bold">
          <a className="p-2" href="/">
            <img src="/images/logos/logo.png" alt="" className="max-h-[36px] rounded-md" />
          </a>
          <button
            className="md:hidden text-2xl block p-2"
            onClick={() => {
              setOpen(true);
            }}
          >
            <MdMenu />
          </button>
        </div>

        {/* Mobile Menu - Expand */}
        <div
          className={`fixed font-light bottom-0 left-[40%] right-0 top-0 z-50 flex flex-col items-end gap-2 bg-zinc-700 pr-4 pt-4 transition-transform duration-300 ease-in-out md:hidden ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button className="block p-2 text-2xl" onClick={() => setOpen(false)}>
            <MdClose />
          </button>

          {pages.map((page, index) => (
            <NavLink key={index} name={page.name} path={page.path} />
          ))}
        </div>

        {/* Desktop Menu */}
        <DesktopMenu />
      </ul>
    </nav>
  );
}

function NavLink({ name, path }: NavLinkProps) {
  const curPath = usePathname();

  return (
    <li>
      <a
        href={path}
        className="group relative block px-1 py-1 text-xl md:text-sm text-white font-semibold"
      >
        <span
          className={`group-hover:bg-blue-200 group-hover:text-zinc-900 p-2 rounded-lg ${
            curPath === path && " bg-blue-200 text-zinc-900"
          }`}
        >
          {name}
        </span>
      </a>
    </li>
  );
}

function DesktopMenu() {
  return (
    <ul className="hidden md:flex flex-row overflow-hidden  my-auto justify-end py-2 rounded-lg items-center text-white">
      {pages.map((page, index) => (
        <div className="flex flex-row" key={index}>
          <ul>
            <NavLink name={page.name} path={page.path} />
          </ul>
          {index < pages.length - 1 && (
            <div key={`separator-${index}`} className=" font-thin align-bottom">
              /
            </div>
          )}
        </div>
      ))}
    </ul>
  );
}