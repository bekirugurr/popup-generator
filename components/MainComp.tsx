import React from "react";
import type { RootState } from "../store";
import { useSelector } from "react-redux";
import Size from "./mainFormComponents/Size";
import Position from "./mainFormComponents/Position";
import Color from "./mainFormComponents/Color";
import UploadImage from "./mainFormComponents/UploadImage";
import defaultLogo from "../assets/defaultLogo.svg";
import defaultImage from "../assets/defaultImage.png";
import { setLogo, setImage } from "../slices/popUpSlice";
import Content from "./mainFormComponents/Content";
import VisitorDevice from "./mainFormComponents/VisitorDevice";
import TimeTrigger from "./mainFormComponents/TimeTrigger";
import ScrollTrigger from "./mainFormComponents/ScrollTrigger";
import TrafficSource from "./mainFormComponents/TrafficSource";
import Language from "./mainFormComponents/Language";
import ExitIntentTargeting from "./mainFormComponents/ExitIntentTargeting";
import SettingsAndCode from "./mainFormComponents/SettingsAndCode";
import ModalWrapper from "./modalComponents/ModalWrapper";

const MainComp: React.FC = () => {
  const popUpInfos = useSelector((state: RootState) => state.popUp);
  console.log(popUpInfos);
  return (
    <main className="px-32 py-4 flex gap-9">
      <div>
      <div className="flex items-center  pb-3 pt-8">
        <div className="rounded-full bg-zinc-300 w-8 h-8 flex items-center justify-center font-semibold">
          2
        </div>
        <div className="flex">
          <h3 className="text-xl font-semibold pl-4">Appearance </h3>(Size,
          colors, logo)
        </div>
      </div>
      <Size />
      <Position />
      <Color />
      <UploadImage
        defaultImage={defaultLogo}
        changeImgFunc={setLogo}
        title={"Logo"}
      />
      <div className="flex items-center pb-3 pt-12">
        <div className="rounded-full bg-zinc-300 w-8 h-8 flex items-center justify-center font-semibold">
          3
        </div>
        <h3 className="text-xl font-semibold pl-4">Content </h3>
      </div>
      <Content />
      <UploadImage
        defaultImage={defaultImage}
        changeImgFunc={setImage}
        title={"Image"}
      />
      <div className="flex items-center pb-3 pt-12">
        <div className="rounded-full bg-zinc-300 w-8 h-8 flex items-center justify-center font-semibold">
          4
        </div>
        <h3 className="text-xl font-semibold pl-4">Targeting Rules </h3>
      </div>
      <VisitorDevice/>
      <TimeTrigger/>
      <ScrollTrigger/>
      <TrafficSource/>
      <Language/>
      <ExitIntentTargeting/>
      <div className="flex items-center pb-3 pt-10">
        <div className="rounded-full bg-zinc-300 w-8 h-8 flex items-center justify-center font-semibold">
          5
        </div>
        <h3 className="text-xl font-semibold pl-4">Settings and Code </h3>
      </div>
      <SettingsAndCode/>
      </div>
          
        <ModalWrapper/>


    </main>
  );
};

export default MainComp;
