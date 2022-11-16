import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {setPosition} from "../../slices/popUpSlice";
import type { RootState } from "../../store";
import Info from "./Common/Info";


const Position = () => {

    const position = useSelector((state: RootState) => state.popUp.position);
    const dispatch = useDispatch()
    const info = 'You can set position of popup in your website. Changes are not visible here. But it will work on your site. Default is center in both axis'
  return (
    <section>
      <div className='mt-7 mb-3 pr-4 flex justify-between items-center '>
        <h4 className="font-secondary font-semibold ">Position</h4>
        <Info
          info={info}
          inWhichComponent="Position"
        />
      </div> 
      <div className="grid grid-cols-3 grid-flow-row gap-1.5 w-[7rem] ">
        <button
          className={`h-6 w-8 border border-1 border-gray-500 ${
            position.x === "left" && position.y === "top" && "bg-prime-violet"
          }`}
          onClick={() => dispatch(setPosition({ x: "left", y: "top" }))}
        />
        <button
          className={`h-6 w-8 border border-1 border-gray-500 ${
            position.x === "center" && position.y === "top" && "bg-prime-violet"
          }`}
          onClick={() => dispatch(setPosition({ x: "center", y: "top" }))}
        />
        <button
          className={`h-6 w-8 border border-1 border-gray-500 ${
            position.x === "right" && position.y === "top" && "bg-prime-violet"
          }`}
          onClick={() => dispatch(setPosition({ x: "right", y: "top" }))}
        />
        <button
          className={`h-6 w-8 border border-1 border-gray-500 ${
            position.x === "left" &&
            position.y === "center" &&
            "bg-prime-violet"
          }`}
          onClick={() => dispatch(setPosition({ x: "left", y: "center" }))}
        />
        <button
          className={`h-6 w-8 border border-1 border-gray-500 ${
            position.x === "center" &&
            position.y === "center" &&
            "bg-prime-violet"
          }`}
          onClick={() => dispatch(setPosition({ x: "center", y: "center" }))}
        />
        <button
          className={`h-6 w-8 border border-1 border-gray-500 ${
            position.x === "right" &&
            position.y === "center" &&
            "bg-prime-violet"
          }`}
          onClick={() => dispatch(setPosition({ x: "right", y: "center" }))}
        />
        <button
          className={`h-6 w-8 border border-1 border-gray-500 ${
            position.x === "left" &&
            position.y === "bottom" &&
            "bg-prime-violet"
          }`}
          onClick={() => dispatch(setPosition({ x: "left", y: "bottom" }))}
        />
        <button
          className={`h-6 w-8 border border-1 border-gray-500 ${
            position.x === "center" &&
            position.y === "bottom" &&
            "bg-prime-violet"
          }`}
          onClick={() => dispatch(setPosition({ x: "center", y: "bottom" }))}
        />
        <button
          className={`h-6 w-8 border border-1 border-gray-500 ${
            position.x === "right" &&
            position.y === "bottom" &&
            "bg-prime-violet"
          }`}
          onClick={() => dispatch(setPosition({ x: "right", y: "bottom" }))}
        />
      </div>
    </section>
  )
}

export default Position