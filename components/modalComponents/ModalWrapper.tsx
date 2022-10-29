import React, { useState, useEffect } from "react";
import type { RootState } from "../../store";
import { useSelector } from "react-redux";
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
  <ModalDefault  key='0'/>,
  <Modal1 key='1'/>,
  <Modal2  key='2'/>,
  <Modal3  key='3'/>,
  <Modal4  key='4'/>,
  <Modal5  key='5'/>,
  <Modal6  key='6'/>,
  <Modal7  key='7'/>,
  <Modal8  key='8'/>,
  <Modal9  key='9'/>,
  <Modal10  key='10'/>,
  <Modal11  key='11'/>,
  <Modal12  key='12'/>,
];

const ModalWrapper = () => {
  const numberOfSelectedTemplate = useSelector(
    (state: RootState) => state.popUp.numberOfSelectedTemplate
  );

  return (
    <div className="p-1">
      <div className="sticky top-6">{Modals[numberOfSelectedTemplate]}</div>
    </div>
  );
};

export default ModalWrapper;
