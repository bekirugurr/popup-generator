import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSize } from "../../slices/popUpSlice";
import type { RootState } from "../../store";
import Info from "./Common/Info";

const Size = () => {
  const dispatch = useDispatch();
  const size = useSelector((state: RootState) => state.popUp.size);
  const info =
    "You can set size of popup in your website. Changes are not visible here. But it will work on your site. Default is medium";

  return (
    <section className="font-secondary">
      <div className="my-2 mb-4 pl-1 pr-4 flex justify-between items-center ">
        <h4 className="font-secondary font-semibold ">Size</h4>
        <Info info={info} inWhichComponent="Size" />
      </div>
      <div className="text-sm h-12 bg-zinc-200 flex gap-1 rounded-xl p-1 w-[15.1rem]">
        <button
          className={`font-semibold rounded-lg flex items-center px-4 ${
            size === "small" ? "bg-white" : "bg-zinc-200 text-zinc-500"
          }`}
          onClick={() => dispatch(setSize("small"))}
        >
          Small
        </button>
        <button
          className={`font-semibold rounded-lg flex items-center px-4 ${
            size === "medium" ? "bg-white" : "bg-zinc-200 text-zinc-500"
          }`}
          onClick={() => dispatch(setSize("medium"))}
        >
          Medium
        </button>
        <button
          className={`font-semibold rounded-lg flex items-center px-4 ${
            size === "large" ? "bg-white" : "bg-zinc-200 text-zinc-500"
          }`}
          onClick={() => dispatch(setSize("large"))}
        >
          Large
        </button>
      </div>
    </section>
  );
};

export default Size;
