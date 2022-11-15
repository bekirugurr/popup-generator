import React, { useState } from "react";
import Image from "next/image";
import navbarLogo from "../assets/navbarLogo.svg";
import { FiChevronDown } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <nav className="font-secondary font-medium py-2.5 px-3 md:px-12 lg:px-32 flex justify-between items-center my-1 shadow-md shadow-slate-300/50 ">
      <div className="grow-0 pr-6 hover:text-prime-violet shrink-0">
        <a className="flex flex-row  items-center gap-1 cursor-pointer">
          <Image src={navbarLogo} alt="logo" />
          <div className="font-bold">modal.cards</div>
        </a>
      </div>
      {!isMenuOpen && <button
            className="text-slate-900 cursor-pointer text-xl leading-none px-2 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FiMenu className="text-2xl" />
      </button>}
      <div className={"grow md:flex flex-col md:flex-row md:justify-between " + (isMenuOpen ? "flex mr-5 items-end md:items-center md:mr-0" : "hidden")}>
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="hover:text-prime-violet  items-end"
          onClick={() => setIsMenuOpen(false)}
          >
            <a className="cursor-pointer flex flex-row items-center gap-2">
              Solutions <FiChevronDown />
            </a>
          </div>
          <div className="hover:text-prime-violet"
          onClick={() => setIsMenuOpen(false)}
          >
            <a className="cursor-pointer whitespace-nowrap">Product Tour</a>{" "}
          </div>
          <div className="hover:text-prime-violet"
          onClick={() => setIsMenuOpen(false)}
          >
            <a className="cursor-pointer">Showcase</a>{" "}
          </div>
          <div className="hover:text-prime-violet"
          onClick={() => setIsMenuOpen(false)}
          >
            <a className="cursor-pointer">Pricing</a>{" "}
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5 mt-3 md:mt-0 md:ml-3">
          <div className="hover:text-prime-violet"
          onClick={() => setIsMenuOpen(false)}
          >
            <a className="cursor-pointer whitespace-nowrap">Sign In</a>{" "}
          </div>
          <button className="w-28 bg-prime-violet hover:bg-violet-500 py-2 rounded-xl text-white left-32"
          onClick={() => setIsMenuOpen(false)}
          >
            Try for free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;