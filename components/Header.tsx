import React from "react";
import { MdDone } from "react-icons/md";
import Camper from "./headerComponents/Camper";
import Image from "next/image";
import flashImage from "../assets/flashImage.svg";
import dollarImage from "../assets/dollarImage.svg";

const Header = () => {
  return (
    <main className="px-3 md:px-24 lg:px-32 pt-20 pb-4 sm:pb-[12rem] lg:pb-[15rem] z-10 bg-gradient-to-b from-white  to-[#cde7ee] relative bg-red-600 m-0">
      <h1 className=" text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-semibold leading-tight	">
        {" "}
        Simple Modal <br /> card generator{" "}
      </h1>
      <p className="text-lg md:text-xl md:text-3xl mt-8">
        A utility-first CSS framework packed with classeslike flex, pt-4,
        text-center and rotate-90 that can becomposed to build any design,
        directly in your markup.
      </p>
      <div className=" z-50 text-sm">
        <div className="rounded-xl flex items-center bg-white py-1.5 px-3 mb-2 w-40 my-3">
          <Image src={flashImage}  alt='flashImage'/> <p className="ml-3">Grow email list</p>
        </div>
        <div className="rounded-xl flex items-center w-60 bg-white py-1.5 px-3">
          <Image src={dollarImage}  alt='dollarImage'/> <p className="ml-3">Increase sales conversion</p>
        </div></div>
      <button className="w-36 bg-prime-violet hover:bg-violet-500 py-3.5 rounded-2xl text-white mt-6">
        Try for free
      </button>
      <div className="flex flex-col sm:flex-row gap-2 mt-6 mb-5">
        <div className="flex gap-2 items-center">
          {" "}
          <MdDone />
          Free and paid plans
        </div>
        <div className="flex gap-2 items-center">
          {" "}
          <MdDone />
          Setup in minutes
        </div>
        <div className="flex gap-2 items-center">
          {" "}
          <MdDone />
          No credit card required
        </div>
      </div>
      <Camper />
    </main>
  );
};

export default Header;
