import React from "react";
import {
  MdOutlineGolfCourse,
  MdOutlineCodeOff,
  MdOutlineIntegrationInstructions,
} from "react-icons/md";
import { FaAws } from "react-icons/fa";
import Image from 'next/image'
import popUpSmartLogo from '../../assets/popUpSmartLogo.svg'

const BottomOfFooter = () => {
  return (
    <section>
      <h2 className="text-4xl font-semibold text-center my-12">
        Build great popups without code
      </h2>
      <div className="flex w-full px-8 justify-center gap-6">
        <div className="flex flex-col flex-1 items-center justify-center gap-5">
          <div className="p-4 rounded-full bg-prime-violet">
            <MdOutlineGolfCourse className="text-white text-5xl" />
          </div>
          <h4 className="text-lg font-semibold">Targeting Options</h4>
          <p className="text-sm text-center">
            Target +26 trigger to your visitors
          </p>
        </div>
        <div className="flex flex-col flex-1 items-center justify-center gap-5">
          <div className="p-4 rounded-full bg-prime-violet">
            <MdOutlineCodeOff className="text-white text-5xl" />
          </div>
          <h4 className="text-lg font-semibold">No-Code</h4>
          <p className="text-sm text-center">
            No code required while you’re creating a popup
          </p>
        </div>
        <div className="flex flex-col flex-1 items-center justify-center gap-5">
          <div className="p-4 rounded-full bg-prime-violet">
            <MdOutlineIntegrationInstructions className="text-white text-5xl" />
          </div>
          <h4 className="text-lg font-semibold">Targeting Options</h4>
          <p className="text-sm text-center">
            Integrated with your marketing and CRM platforms
          </p>
        </div>
        <div className="flex flex-col flex-1 items-center justify-center gap-5">
          <div className="p-4 rounded-full bg-prime-violet">
            <FaAws className="text-white text-5xl" />
          </div>
          <h4 className="text-lg font-semibold">Targeting Options</h4>
          <p className="text-sm text-center">
            Don’t worry about speed and Amazon AWS resources
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
      <div className="mt-14 w-[2.7rem] h-[2.7rem] grid grid-center p-3 bg-black rounded-full">
        <Image src={popUpSmartLogo} className='text-xl'/>
      </div>
      <p className="text-sm">Povered by Popupsmart</p>
      </div>
    </section>
  );
};

export default BottomOfFooter;
