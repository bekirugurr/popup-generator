import React from "react";
import {
  MdOutlineGolfCourse,
  MdOutlineCodeOff,
  MdOutlineIntegrationInstructions,
} from "react-icons/md";
import { FaAws } from "react-icons/fa";
import Image from "next/image";
import popUpSmartLogo from "../../assets/popUpSmartLogo.svg";

const BottomOfFooter = () => {
  const contentArray = [
    {
      logo: <MdOutlineGolfCourse />,
      header: "Targeting Options",
      content: "Target +26 trigger to your visitors",
    },
    {
      logo: <MdOutlineCodeOff />,
      header: "No-Code",
      content: "No code required while you’re creating a popup",
    },
    {
      logo: <MdOutlineIntegrationInstructions />,
      header: "Integration",
      content: "Integrated with your marketing and CRM platforms",
    },
    {
      logo: <FaAws />,
      header: "Deployment & Speed",
      content: "Don’t worry about speed and Amazon AWS resources",
    },
  ];
  return (
    <section>
      <h2 className="text-4xl font-semibold text-center my-12">
        Build great popups without code
      </h2>
      <ul className="flex w-full px-8 justify-center gap-3 sm:gap-6">
        {contentArray.map((item, index) => (
          <li
            key={index}
            className="flex flex-col flex-1 items-center justify-start gap-5"
          >
            <div className="p-4 rounded-full bg-prime-violet text-white text-5xl">
              {item.logo}
            </div>
            <h4 className="text-lg text-center font-semibold h-[3rem]">
              {item.header}
            </h4>
            <p className="text-sm text-center">{item.content}</p>
          </li>
        ))}
      </ul>
      <div className="flex flex-col items-center gap-3">
        <div className="mt-14 w-[2.7rem] h-[2.7rem] grid grid-center p-3 bg-black rounded-full">
          <Image src={popUpSmartLogo} alt="logo" className="text-xl" />
        </div>
        <p className="text-sm">Povered by Popupsmart</p>
      </div>
    </section>
  );
};

export default BottomOfFooter;
