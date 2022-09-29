import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {setColor} from "../../slices/popUpSlice";
import type { RootState } from "../../store";
const Color = () => {
    const dispatch = useDispatch()
  return (
    <section>
       <h4 className="mt-7 mb-3 font-secondary">Colors</h4>
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