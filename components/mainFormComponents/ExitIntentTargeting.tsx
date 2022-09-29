import React, { useState, useEffect } from "react";
import RadioButton from "./RadioButton";
import { setExitIntentTargeting } from "../../slices/popUpSlice";
import type { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";

const ExitIntentTargeting = () => {
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(true);
  const exitIntentTargeting = useSelector(
    (state: RootState) => state.popUp.exitIntentTargeting
  );
  const dispatch = useDispatch();

  useEffect(() => {
    isSwitchOn ? dispatch(setExitIntentTargeting(true)): dispatch(setExitIntentTargeting(false));
  }, [isSwitchOn]);

  return (
    <section className="text-secondary w-96 relative mt-8">
      <h4 className="my-3 pl-1 font-semibold">Exit Intent Targeting</h4>
      <RadioButton isSwitchOn={isSwitchOn} setIsSwitchOn={setIsSwitchOn} />
      
    </section>
  );
};

export default ExitIntentTargeting;
