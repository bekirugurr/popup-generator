import React from "react";
import type { RootState } from "../store";
import { useSelector } from "react-redux";
import Size from "./mainComponents/Size";
import Position from "./mainComponents/Position";
import Color from "./mainComponents/Color";
import UploadImage from "./mainComponents/UploadImage";
import defaultLogo from "../assets/defaultLogo.svg";
import defaultImage from "../assets/defaultImage.png";
import { changeLogo, changeImage } from "../slices/popUpSlice";
import Content from "./mainComponents/Content";

const MainComp: React.FC = () => {
  const popUpInfos = useSelector((state: RootState) => state.popUp);
  console.log(popUpInfos);
  return (
    <main className="px-32 py-8">
      <div className="flex items-center py-8">
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
        changeImgFunc={changeLogo}
        title={"Logo"}
      />


    </main>
  );
};

export default MainComp;
