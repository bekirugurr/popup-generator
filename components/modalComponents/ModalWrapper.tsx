import React from "react";
import type { RootState } from "../../store";
import { useSelector } from "react-redux";
import ModalDefault from "./ModalDefault";
import Modal1 from "./Modal1";
import Modal2 from "./Modal2";
import Modal3 from "./Modal3";

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
      </div>

    </div>
  );
};

export default ModalWrapper;
