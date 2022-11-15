import React from "react";

const GraySection = () => {
  return (
    <section className="pr-3 md:px-24 lg:px-24 sm:pt-[10rem] lg:pt-[14.5rem] bg-prime-gray ">
      <ul className=" text-white pt-10 pb-10 sm-pt-20 flex flex-wrap items-center">
        <li className="mx-3 sm:mx-5 lg:mx-7 mt-3">
            <p className="text-3xl sm:text-5xl lg:text-7xl ">3x</p>
            <p>Increase <br/>Conversion Rate</p>
        </li>
        <li className="mx-3 sm:mx-5 lg:mx-7 mt-3">
            <p className="text-3xl sm:text-5xl lg:text-7xl ">120%</p>
            <p>Email <br/>Subscribers</p>
        </li>
        <li className="mx-3 sm:mx-5 lg:mx-7  mt-3">
            <p className="text-3xl sm:text-5xl lg:text-7xl ">390%</p>
            <p>More Customer <br/>Engagement</p>
        </li>
        <li className="ml-3 mt-6">
            <p className="text-xl sm:text-2xl lg:text-3xl">Popupsmart meets all your business needs.</p>
        </li>
      </ul>
    </section>
  );
};

export default GraySection;
