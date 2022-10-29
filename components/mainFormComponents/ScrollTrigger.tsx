import React, { useState, useEffect } from "react";
import RadioButton from "./RadioButton";
import { setPercentage } from "../../slices/popUpSlice";
import type { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";

const ScrollTrigger = () => {
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(true);
  const percentage = useSelector(
    (state: RootState) => state.popUp.percentage
  );
  const dispatch = useDispatch();

  useEffect(() => {
    !isSwitchOn && dispatch(setPercentage(0));
  }, [isSwitchOn, dispatch]);  

  const handleChange = (e: React.FormEvent<EventTarget>) => { 
    const inputTarget = e.target as HTMLInputElement
    if (isSwitchOn && 100 >= +inputTarget.value && +inputTarget.value >= 0) {
      dispatch(setPercentage(+inputTarget.value))
    }
   }
  
  return (
    <section className="text-secondary w-96 relative mt-8">
      <h4 className="my-3 pl-1 font-semibold">After % Scroll</h4>
      <RadioButton isSwitchOn={isSwitchOn} setIsSwitchOn={setIsSwitchOn} />
      <input
        type="number"
        className="w-96 h-9 pl-2 text-sm rounded-lg border border-gray-500 focus:outline-prime-violet"
        value={percentage}
        onChange={(e) => handleChange(e)}
      />
    </section>
  );
};

export default ScrollTrigger;
