import React, { useState, useEffect } from "react";
import RadioButton from "./Common/RadioButton";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineLaptopWindows } from "react-icons/md";
import { HiCheck } from "react-icons/hi";
import { setVisitorDevice } from "../../slices/popUpSlice";
import type { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import Info from "./Common/Info";

const VisitorDevice = () => {
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(true);
  const visitorDevice = useSelector(
    (state: RootState) => state.popUp.visitorDevice
  );
  const dispatch = useDispatch();

  useEffect(() => {
    !isSwitchOn && dispatch(setVisitorDevice('all'));
  }, [isSwitchOn, dispatch]);

  const info = "You can set in which kind of device (desktop, mobile or both) the popup will appear by this feature. Default is both."

  return (
    <section className="text-secondary w-96 relative">
      <h4 className="my-2 pl-1 font-semibold">Visitor Device</h4>
      <div className="absolute top-0 right-0 flex items-center gap-3">
        <Info
          info={info}
          inWhichComponent="VisitorDevice"
        />
        <RadioButton isSwitchOn={isSwitchOn} setIsSwitchOn={setIsSwitchOn} />
      </div>      <div className="mt-4 flex justify-between gap-4">
        <button
          className="flex-1 flex items-center justify-center gap-2 h-16 rounded-xl bg-gray-200"
          onClick={() => isSwitchOn && dispatch(setVisitorDevice('desktop'))}
        >
          <div
            className={`w-6 h-6 rounded-md border-2 grid place-items-center  ${visitorDevice === 'desktop' ? 'bg-prime-violet border-prime-violet': 'border-gray-400'}`}
          >
            {visitorDevice === 'desktop' && <HiCheck className="text-white text-xl" />}
          </div>
          <MdOutlineLaptopWindows className={`text-2xl ${visitorDevice === 'desktop' ? 'text-prime-violet' : 'text-gray-500'}`} />
          <span>Desktop</span>
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 h-16 rounded-xl bg-gray-200" onClick={() => isSwitchOn && dispatch(setVisitorDevice('mobile'))}>
          <div
            className={`w-6 h-6 rounded-md border-2 grid place-items-center ${visitorDevice === 'mobile' ? 'bg-prime-violet border-prime-violet': 'border-gray-400'}`}
          >
            {visitorDevice === 'mobile' && <HiCheck className="text-white text-xl" />}
          </div>
          <FaMobileAlt className={`text-lg ${visitorDevice === 'mobile' ? 'text-prime-violet' : 'text-gray-500'}`} />
          <span>Mobile</span>
        </button>
      </div>
    </section>
  );
};

export default VisitorDevice;
