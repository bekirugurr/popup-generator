import React from "react";
import type { RootState } from "../../store";
import { useSelector } from "react-redux";
import ModalDefault from "./ModalDefault";
import Modal1 from "./Modal1";
import Modal2 from "./Modal2";
import Modal3 from "./Modal3";
import Modal4 from "./Modal4";
import Modal5 from "./Modal5";
import Modal6 from "./Modal6";

const ModalWrapper = () => {
  const numberOfSelectedTemplate = useSelector(
    (state: RootState) => state.popUp.numberOfSelectedTemplate
  );
  return (
    <div className="p-1">
      <div className="sticky top-6">
          {numberOfSelectedTemplate === 0 && <ModalDefault />}
          {numberOfSelectedTemplate === 1 && <div className="ml-6"><Modal1 /></div>}
          {numberOfSelectedTemplate === 2 && <div className="ml-6"><Modal2 /></div>}
          {numberOfSelectedTemplate === 3 && <div className="ml-6"><Modal3 /></div>}
          {numberOfSelectedTemplate === 4 && <div className="ml-6"><Modal4 /></div>}
          {numberOfSelectedTemplate === 5 && <div className="ml-6"><Modal5 /></div>}
          {numberOfSelectedTemplate === 6 && <div className="ml-6"><Modal6 /></div>}
      </div>

    </div>
  );
};

export default ModalWrapper;
