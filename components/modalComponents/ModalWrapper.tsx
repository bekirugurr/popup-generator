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



const ModalWrapper = () => {
  const numberOfSelectedTemplate = useSelector(
    (state: RootState) => state.popUp.numberOfSelectedTemplate
  );

  return (
    <div className="p-1">
      <div className="sticky top-6">
        {numberOfSelectedTemplate === 0 && <ModalDefault />}
        {numberOfSelectedTemplate === 1 && <Modal1 />}
        {numberOfSelectedTemplate === 2 && <Modal2 />}
        {numberOfSelectedTemplate === 3 && <Modal3 />}
        {numberOfSelectedTemplate === 4 && <Modal4 />}
        {numberOfSelectedTemplate === 5 && <Modal5 />}
        {numberOfSelectedTemplate === 6 && <Modal6 />}
        {numberOfSelectedTemplate === 7 && <Modal7 />}
        {numberOfSelectedTemplate === 8 && <Modal8 />}
        {numberOfSelectedTemplate === 9 && <Modal9 />}
        {numberOfSelectedTemplate === 10 && <Modal10 />}
        {numberOfSelectedTemplate === 11 && <Modal11 />}
        {numberOfSelectedTemplate === 12 && <Modal12 />}
      </div>
    </div>
  );
};

export default ModalWrapper;
