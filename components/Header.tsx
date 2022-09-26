import React from "react";
import { MdDone } from "react-icons/md";
import Camper from "./Camper";
import Image from "next/image";

const Header = () => {
  return (
    <main className="px-32 pt-20 pb-[15rem] z-10 bg-gradient-to-b from-white  to-[#cde7ee] relative w-full">
      <h1 className="text-7xl font-semibold leading-tight	">
        {" "}
        Simple Modal <br /> card generator{" "}
      </h1>
      <p className="text-3xl mt-8">
        A utility-first CSS framework packed with classeslike flex, pt-4,
        text-center and rotate-90 that can becomposed to build any design,
        directly in your markup.
      </p>
      <button className="w-36 bg-prime-violet hover:bg-violet-500 py-3.5 rounded-2xl text-white mt-10">
        Try for free
      </button>
      <div className="flex gap-2 mt-6 mb-5">
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
          No credit card required*
        </div>
      </div>
      <Camper />
      {/* Alttati div sadece hafif opacity e sahip bir beyaz background veriyordu figmada  */}
      <div className="rounded-t-3xl bg-gray-50/50 h-[19rem] w-80 absolute bottom-0 right-40 z-0 flex flex-col justify-end "></div>
    </main>
  );
};

export default Header;
