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
    !isSwitchOn && dispatch(setPercentage(false));
  }, [isSwitchOn]);

  return (
    <section className="text-secondary w-96 relative mt-8">
      <h4 className="my-3 pl-1 font-semibold">After % Scroll</h4>
      <RadioButton isSwitchOn={isSwitchOn} setIsSwitchOn={setIsSwitchOn} />
      <input
        type="number"
        className="w-96 h-9 pl-2 text-sm rounded-lg border border-gray-500 focus:outline-prime-violet"
        value={
            typeof percentage === "number" ? percentage : 0
          }
        onChange={(e) =>isSwitchOn &&
            dispatch(setPercentage(parseInt(e.target.value)))
          }
      />
    </section>
  );
};

export default ScrollTrigger;