import React, { useState, useEffect } from "react";
import RadioButton from "./Common/RadioButton";
import { setTrafficSource } from "../../slices/popUpSlice";
import type { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import Info from "./Common/Info";

const TrafficSource = () => {
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(true);
  const trafficSource = useSelector(
    (state: RootState) => state.popUp.trafficSource
  );
  const dispatch = useDispatch();

  useEffect(() => {
    !isSwitchOn && dispatch(setTrafficSource(""));
  }, [isSwitchOn, dispatch]);
  
  const info = "You can allow to the popup to appear for whom only come with links from certain sites by this feature. Defalt is all sites."

  return (
    <section className="text-secondary w-96 relative mt-8">
      <h4 className="my-3 pl-1 font-semibold">Traffic Source</h4>
      <div className="absolute top-0 right-0 flex items-center gap-3">
        <Info
          info={info}
          inWhichComponent="TrafficSource"
        />
        <RadioButton isSwitchOn={isSwitchOn} setIsSwitchOn={setIsSwitchOn} />
      </div>      <input
        type="text"
        className="w-96 h-9 pl-2 text-sm rounded-lg border border-gray-500 focus:outline-prime-violet"
        placeholder="Enter your traffic source domain"
        value={trafficSource ? trafficSource :""}
        onChange={(e) =>isSwitchOn &&
          dispatch(setTrafficSource(e.target.value))
        }
      />
    </section>
  );
};

export default TrafficSource;
