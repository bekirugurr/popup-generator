import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {setColor} from "../../slices/popUpSlice";
import type { RootState } from "../../store";
import Info from "./Common/Info";

const Color = () => {
    const dispatch = useDispatch()
    const info =
    "You can choose one of five colors for the colored parts of the popup.";

  return (
    <section>
      <div className="mt-5 mb-2 mb-4 pl-1 pr-4 flex justify-between items-center ">
        <h4 className="font-secondary font-semibold ">Colors</h4>
        <Info info={info} inWhichComponent="Colors" />
      </div>
      <div className="flex gap-2">
        <button
          className="rounded-lg h-11 w-11 bg-[#000000]"
          onClick={() => dispatch(setColor("#000000"))}
        ></button>
        <button
          className="rounded-lg h-11 w-11 bg-[#7D4AEA]"
          onClick={() => dispatch(setColor("#7D4AEA"))}
        ></button>
        <button
          className="rounded-lg h-11 w-11 bg-[#F37C34]"
          onClick={() => dispatch(setColor("#F37C34"))}
        ></button>
        <button
          className="rounded-lg h-11 w-11 bg-[#DDDDDD]"
          onClick={() => dispatch(setColor("#DDDDDD"))}
        ></button>
        <button
          className="rounded-lg border-2 border-gray-300 h-11 w-11 bg-[#FFFFFF]"
          onClick={() => dispatch(setColor("#FFFFFF"))}
        ></button>
      </div> 
    </section>
  )
}

export default Color