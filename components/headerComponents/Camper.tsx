import React from "react";
import Image from "next/image";
import camperLogo from "../../assets/camperLogo.svg";
import walkingFoots from "../../assets/walkingFoots.png";
import { MdClose } from "react-icons/md";

const Camper = () => {
  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
  };

  return (
    <section className="hidden w-[38rem] h-[22.2rem] lg:w-[50rem] lg:h-[29.2rem] rounded-3xl bg-white sm:flex flex-row absolute -bottom-[12rem] lg:-bottom-[14.5rem] z-20">
      <form
        className="px-6 lg:px-10 py-6 lg:py-12 flex flex-col items-center justify-between w-1/2"
        onSubmit={(e)=>handleSubmit(e)}
      >
        <Image src={camperLogo} alt="camperLogo" className="h-9" />
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
          Join the club
        </h1>
        <p className="lg:text-lg text-center">
          Subscribe and Get an Extra
          <u>
            <strong> 25% Off </strong>
          </u>
          on your first purchase.
        </p>
        <input
          type="email"
          placeholder="Email address"
          className=" rounded-xl border border-2 border-gray-500 w-full py-2 pl-3"
        />
        <button
          type="submit"
          className="bg-black hover:bg-slate-800 text-white rounded-xl px-2 w-full py-2"
        >
          Subscribe
        </button>
        <p className="text-xs lg:text-sm text-slate-500">
          By signing up, you agree to
          <a className="underline decoration-solid">Privacy Policy</a> and
          <a className="underline decoration-solid">Terms of Use</a>.
        </p>
      </form>
      <div className="h-full  w-1/2 relative">
        <Image
          src={walkingFoots}
          alt="walking"
          className="h-full rounded-r-3xl "
        />
        <button className="p-2 bg-white absolute right-4 top-4  rounded-full hover:opacity-80">
          <MdClose className="bg-white text-base" />
        </button>
        <p className="text-2xl lg:text-4xl text-white absolute left-9 bottom-9">
          Mediterranean Sneakers®
        </p>
      </div>
    </section>
  );
};

export default Camper;
