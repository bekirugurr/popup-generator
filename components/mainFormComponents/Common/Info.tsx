import React from "react";
import { MdInfoOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setInfoComponent } from "../../../slices/popUpSlice";
import type { RootState } from "../../../store";


interface Props {
  info: string;
  inWhichComponent: string;
}

const Explaination: React.FC<Props> = ({ info, inWhichComponent }) => {
  const infoComponent = useSelector(
    (state: RootState) => state.popUp.infoComponent
  );
  const dispatch = useDispatch()

  const handeClick = () => {
    if(infoComponent === inWhichComponent){
      dispatch(setInfoComponent('none'))
    }else{
      dispatch(setInfoComponent(inWhichComponent))
    }
  }

  return (
    <div className="overflow-visible relative">
    <button className="flex items-center" onClick={handeClick}>
        <MdInfoOutline className={`text-2xl ${ inWhichComponent === infoComponent ? "bg-prime-violet text-white rounded-full" : "text-prime-violet"}  `} />
    </button>
    { infoComponent === inWhichComponent && <p className="absolute top-6 right-5 bg-prime-violet text-white px-2 py-1 rounded w-[19.5rem] text-xs z-40">{info}</p>}
    </div>
  );
};

export default Explaination;
