import { useState, useEffect } from "react";
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
  const numberOfSelectedTemplate = useSelector(
    (state: RootState) => state.popUp.numberOfSelectedTemplate
  );

  const [isLogoShow, setIsLogoShow] = useState<boolean>(true);
  const [isImageShow, setIsImageShow] = useState<boolean>(true);

  useEffect(() => {
    setIsLogoShow(
      numberOfSelectedTemplate === 1 ||
        numberOfSelectedTemplate === 4 ||
        numberOfSelectedTemplate === 9 ||
        numberOfSelectedTemplate === 11
    );
    setIsImageShow(
      numberOfSelectedTemplate === 0 ||
        numberOfSelectedTemplate === 2 ||
        numberOfSelectedTemplate === 9 ||
        numberOfSelectedTemplate === 10 ||
        numberOfSelectedTemplate === 12
    );
  }, [numberOfSelectedTemplate, setIsLogoShow, setIsImageShow]);

  const imgInfo = 'You can upload a image by drag drop or clicking on the section below'
  const logoInfo = 'You can upload a logo by drag drop or clicking on the section below'

  return (
    <main className=" pl-1 md:px-16 lg:px-24 lg:pt-2 pb-4 flex flex-col-reverse  lg:flex-row gap-4 lg:gap-9">
      <div className="pl-3 md:pl-0">
        <div className="flex items-center  pb-3 pt-6">
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
        {isLogoShow && (
          <UploadImage
            defaultImage={defaultLogo}
            changeImgFunc={setLogo}
            title={"Logo"}
            info={logoInfo}
          />
        )}
        <div className="flex items-center pb-3 pt-12">
          <div className="rounded-full bg-zinc-300 w-8 h-8 flex items-center justify-center font-semibold">
            3
          </div>
          <h3 className="text-xl font-semibold pl-4">Content </h3>
        </div>
        <Content />
        {isImageShow && (
          <UploadImage
            defaultImage={defaultImage}
            changeImgFunc={setImage}
            title={"Image"}
            info={imgInfo}
          />
        )}
        <div className="flex items-center pb-3 pt-12">
          <div className="rounded-full bg-zinc-300 w-8 h-8 flex items-center justify-center font-semibold">
            4
          </div>
          <h3 className="text-xl font-semibold pl-4">Targeting Rules </h3>
        </div>
        <VisitorDevice />
        <TimeTrigger />
        <ScrollTrigger />
        <TrafficSource />
        <Language />
        <ExitIntentTargeting />
        <div className="flex items-center pb-3 pt-10">
          <div className="rounded-full bg-zinc-300 w-8 h-8 flex items-center justify-center font-semibold">
            5
          </div>
          <h3 className="text-xl font-semibold pl-4">Settings and Code </h3>
        </div>
        <SettingsAndCode />
      </div>

      <ModalWrapper />
    </main>
  );
};

export default MainComp;
