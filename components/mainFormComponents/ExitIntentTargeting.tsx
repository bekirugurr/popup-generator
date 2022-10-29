import React, { useState, useEffect } from "react";
import RadioButton from "./Common/RadioButton";
import { setExitIntentTargeting } from "../../slices/popUpSlice";
import type { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import Info from "./Common/Info";

const ExitIntentTargeting = () => {
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(true);
  const exitIntentTargeting = useSelector(
    (state: RootState) => state.popUp.exitIntentTargeting
  );
  const dispatch = useDispatch();

  useEffect(() => {
    isSwitchOn ? dispatch(setExitIntentTargeting(true)): dispatch(setExitIntentTargeting(false));
  }, [isSwitchOn, dispatch]);

  const info = "You can allow the popup to apper when user moves out the mouse cursor to close tab. Default is open. "

  return (
    <section className="text-secondary w-96 relative mt-8">
      <h4 className="my-3 pl-1 font-semibold">Exit Intent Targeting</h4>
      <div className="absolute top-0 right-0 flex items-center gap-3">
        <Info
          info={info}
          inWhichComponent="ExitIntentTargeting"
        />
        <RadioButton isSwitchOn={isSwitchOn} setIsSwitchOn={setIsSwitchOn} />
      </div>
    </section>
  );
};

export default ExitIntentTargeting;