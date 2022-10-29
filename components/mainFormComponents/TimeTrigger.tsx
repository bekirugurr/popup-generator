import React, { useState, useEffect } from "react";
import RadioButton from "./Common/RadioButton";
import { setHowManySecondsAfter } from "../../slices/popUpSlice";
import type { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import Info from "./Common/Info";

const TimeTrigger = () => {
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(true);
  const howManySecondsAfter = useSelector(
    (state: RootState) => state.popUp.howManySecondsAfter
  );
  const dispatch = useDispatch();

  useEffect(() => {
    !isSwitchOn && dispatch(setHowManySecondsAfter(0));
  }, [isSwitchOn, dispatch]);

  const handleChange = (e: React.FormEvent<EventTarget>) => {
    const inputTarget = e.target as HTMLInputElement;
    if (isSwitchOn && +inputTarget.value >= 0) {
      dispatch(setHowManySecondsAfter(parseInt(inputTarget.value)));
    }
  };

  const info = "You can set how many seconds after your site open, the popup will appear by this feature. Default is 0."

  return (
    <section className="text-secondary w-96 relative mt-8">
      <h4 className="my-3 pl-1 font-semibold">After X Seconds</h4>
      <div className="absolute top-0 right-0 flex items-center gap-3">
        <Info
          info={info}
          inWhichComponent="TimeTrigger"
        />
        <RadioButton isSwitchOn={isSwitchOn} setIsSwitchOn={setIsSwitchOn} />
      </div>
      <input
        type="number"
        className="w-96 h-9 pl-2 text-sm rounded-lg border border-gray-500 focus:outline-prime-violet"
        value={howManySecondsAfter}
        onChange={(e) => handleChange(e)}
      />
    </section>
  );
};

export default TimeTrigger;
