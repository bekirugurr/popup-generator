import React, { useState, useEffect } from "react";
import RadioButton from "./RadioButton";
import { setHowManySecondsAfter } from "../../slices/popUpSlice";
import type { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";

const TimeTrigger = () => {
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(true);
  const howManySecondsAfter = useSelector(
    (state: RootState) => state.popUp.howManySecondsAfter
  );
  const dispatch = useDispatch();

  useEffect(() => {
    !isSwitchOn && dispatch(setHowManySecondsAfter(false));
  }, [isSwitchOn, dispatch]);

  return (
    <section className="text-secondary w-96 relative mt-8">
      <h4 className="my-3 pl-1 font-semibold">After X Seconds</h4>
      <RadioButton isSwitchOn={isSwitchOn} setIsSwitchOn={setIsSwitchOn} />
      <input
        type="number"
        className="w-96 h-9 pl-2 text-sm rounded-lg border border-gray-500 focus:outline-prime-violet"
        value={
          typeof howManySecondsAfter === "number" ? howManySecondsAfter : 0
        }
        onChange={(e) =>isSwitchOn &&
          dispatch(setHowManySecondsAfter(parseInt(e.target.value)))
        }
      />
    </section>
  );
};

export default TimeTrigger;
