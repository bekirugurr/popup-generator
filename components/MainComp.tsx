import React from "react";
import type { RootState } from "../store";
import { useSelector } from "react-redux";
import Size from "./mainComponents/Size";
import Position from "./mainComponents/Position";
import Color from "./mainComponents/Color";
import UploadImage from "./mainComponents/UploadImage";
import defaultLogo from "../assets/defaultLogo.svg";
import defaultImage from "../assets/defaultImage.png";
import { setLogo, setImage } from "../slices/popUpSlice";
import Content from "./mainComponents/Content";
import VisitorDevice from "./mainComponents/VisitorDevice";
import TimeTrigger from "./mainComponents/TimeTrigger";
import ScrollTrigger from "./mainComponents/ScrollTrigger";
import TrafficSource from "./mainComponents/TrafficSource";

const MainComp: React.FC = () => {
  const popUpInfos = useSelector((state: RootState) => state.popUp);
  console.log(popUpInfos);
  return (
    <main className="px-32 py-4">
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

    </main>
  );
};

export default MainComp;
