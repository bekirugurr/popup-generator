import React from 'react'
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";

interface Props {
    index: number;
    item:string[];
    whichDivOpen: number;
    setWhichDivOpen: React.Dispatch<React.SetStateAction<number>>;
  }
  
const AccordionItem: React.FC<Props> = ({index, item, whichDivOpen, setWhichDivOpen}) => {
  return (
    <li className={`border-b-2 py-3  pl-4 relative ${whichDivOpen === index && 'bg-slate-100'}`}  onClick={() => {
        setWhichDivOpen(index);
      }}>
        <h5 className={`text-lg font-medium w-3/4 ${whichDivOpen !== index && 'text-slate-500'}`}>{item[0]}</h5>
        <p className={`w-3/4 mt-4 ${whichDivOpen === index ? 'block' :'hidden'}`}>{item[1]}</p>
        <button className="text-xl absolute right-4 top-4">
          {whichDivOpen === index ? (
            <FiMinusCircle className="text-prime-violet" />
          ) : (
            <FiPlusCircle className="text-slate-500" />
          )}
        </button>
      </li>
  )
}

export default AccordionItem