import React from "react";

const GraySection = () => {
  return (
    <section className="px-32 pt-[15rem] bg-prime-gray">
      <ul className=" text-white py-20 flex items-center gap-12">
        <li>
            <p className="text-7xl mb-3">3x</p>
            <p>Increase <br/>Conversion Rate</p>
        </li>
        <li>
            <p className="text-7xl mb-3">120%</p>
            <p>Email <br/>Subscribers</p>
        </li>
        <li>
            <p className="text-7xl mb-3">390%</p>
            <p>More Customer <br/>Engagement</p>
        </li>
        <li>
            <p className="text-3xl w-80">Popupsmart meets all your business needs.</p>
        </li>
      </ul>
    </section>
  );
};

export default GraySection;
