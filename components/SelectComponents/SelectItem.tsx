import React, { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from 'react-redux'
import { setTemplate } from '../../slices/popUpSlice'
import type { RootState } from "../../store";


interface Props {
    templateNum:number;
    image:any;
  }

const SelectItem: React.FC<Props>  = ({templateNum, image}) => {
  const [isOnHover, setIsOnHover] = useState<boolean>(false);
  const numberOfSelectedTemplate = useSelector(
    (state: RootState) => state.popUp.numberOfSelectedTemplate
  );
  const dispatch = useDispatch()
  return (
    <div
      className="bg-gray-200 rounded-xl  px-2 h-56 grid place-items-center z-20 relative"
      onMouseEnter={() => setIsOnHover(true)}
      onMouseLeave={() => setIsOnHover(false)}
    >
      <Image src={image} />
      {isOnHover && (
        <div className="absolute top-0 bottom-0 right-0 left-0 z-50 bg-prime-violet/[0.6] grid place-items-center  rounded-xl ">
          <button className="bg-white  rounded-xl text-prime-violet text-sm font-semibold py-3 px-4" onClick={()=>dispatch(setTemplate(templateNum))}>
            {numberOfSelectedTemplate == templateNum ? 'Selected' : 'Select Template'}
          </button>
        </div>
      )}
    </div>
  );
};

export default SelectItem;
