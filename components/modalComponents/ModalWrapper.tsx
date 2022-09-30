import React from "react";
import type { RootState } from "../../store";
import { useSelector } from "react-redux";
import ModalDefault from "./ModalDefault";

const ModalWrapper = () => {
  const numberOfSelectedTemplate = useSelector(
    (state: RootState) => state.popUp.numberOfSelectedTemplate
  );
  return (
    <div className="p-1 bg-green-500">
      <div className="sticky top-6">
          {numberOfSelectedTemplate === 0 && <ModalDefault />}
      </div>
    </div>
  );
};

export default ModalWrapper;
