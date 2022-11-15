import React, { useState, useEffect } from "react";
import type { RootState } from "../../store";
import { useSelector } from "react-redux";
import excuseIcon from "../../assets/excuseIcon.png";
import Image from "next/image";
import ModalDefault from "./ModalDefault";
import Modal1 from "./Modal1";
import Modal2 from "./Modal2";
import Modal3 from "./Modal3";
import Modal4 from "./Modal4";
import Modal5 from "./Modal5";
import Modal6 from "./Modal6";
import Modal7 from "./Modal7";
import Modal8 from "./Modal8";
import Modal9 from "./Modal9";
import Modal10 from "./Modal10";
import Modal11 from "./Modal11";
import Modal12 from "./Modal12";

const Modals = [
  <ModalDefault key="0" />,
  <Modal1 key="1" />,
  <Modal2 key="2" />,
  <Modal3 key="3" />,
  <Modal4 key="4" />,
  <Modal5 key="5" />,
  <Modal6 key="6" />,
  <Modal7 key="7" />,
  <Modal8 key="8" />,
  <Modal9 key="9" />,
  <Modal10 key="10" />,
  <Modal11 key="11" />,
  <Modal12 key="12" />,
];

const ModalWrapper = () => {
  const numberOfSelectedTemplate = useSelector(
    (state: RootState) => state.popUp.numberOfSelectedTemplate
  );

  const excuse = "There are currently 12 modals. But I'll add the remainings as soon as possible";
  const excuseDiv = (
    <div className="border-2 border-blue-400 bg-rose-200 p-12 rounded-3xl  flex items-center gap-6 max-w-lg ">
      <Image src={excuseIcon} alt="excuse icon" height='120' width='120'/>
      <p>{excuse}</p>
    </div>
  );

  return (
    <div className="md:p-1">
      <div className="sticky top-6">
        {Modals[numberOfSelectedTemplate]
          ? Modals[numberOfSelectedTemplate]
          : excuseDiv}
      </div>
    </div>
  );
};

export default ModalWrapper;
