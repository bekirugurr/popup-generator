import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {changeSize} from "../../slices/popUpSlice";
import type { RootState } from "../../store";

const Size = () => {
    const dispatch = useDispatch();
    const size = useSelector((state: RootState) => state.popUp.size);


  return (
    <section className='font-secondary'>
    <h4 className="my-2 pl-1">Size</h4>
    <div className="text-sm h-12 bg-zinc-200 flex gap-1 rounded-xl p-1 w-[17rem]">
        <button
          className={`font-semibold rounded-lg flex items-center px-4 ${
            size === "small" ? "bg-white" : "bg-zinc-200 text-zinc-500"
          }`}
          onClick={() => dispatch(changeSize("small"))}
        >
          Small
        </button>
        <button
          className={`font-semibold rounded-lg flex items-center px-4 ${
            size === "medium" ? "bg-white" : "bg-zinc-200 text-zinc-500"
          }`}
          onClick={() => dispatch(changeSize("medium"))}
        >
          Medium
        </button>
        <button
          className={`font-semibold rounded-lg flex items-center px-4 ${
            size === "large" ? "bg-white" : "bg-zinc-200 text-zinc-500"
          }`}
          onClick={() => dispatch(changeSize("large"))}
        >
          Large
        </button>
      </div>
      </section>
  )
}

export default Size