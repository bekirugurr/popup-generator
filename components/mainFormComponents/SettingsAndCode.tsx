import React, { useState, useEffect } from "react";
import { setWebhookURL } from "../../slices/popUpSlice";
import type { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { HiCheck } from "react-icons/hi";
import { RiInformationLine } from "react-icons/ri";

const SettingsAndCode = () => {
  const [isSubmissionChecked, setIsSubmissionChecked] =
    useState<boolean>(false);
  const [isSendDataChecked, setIsSendDataChecked] = useState<boolean>(false);
  const webhookURL = useSelector((state: RootState) => state.popUp.webhookURL);
  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    dispatch(setWebhookURL(target.value));
  };

  const handleGetCode = () => {
    if (isSubmissionChecked && isSendDataChecked) {
      console.log("Here is your popup code");
    }
  };

  return (
    <section className="w-96  mt-5">
      <h4 className="mb-4 pl-1 font-semibold text-lg ">Webhook to Send data</h4>
      <h5 className=" pl-1 mb-1 ">Enter youe Webhook URL</h5>
      <p className=" pl-1 text-sm">
        You can create a simple one with <b>make.com</b>
      </p>
      <input
        type="text"
        className="w-96 h-9 pl-2 text-sm rounded-lg border border-gray-500 focus:outline-prime-violet mt-3 mb-5"
        value={webhookURL}
        onChange={(e) => handleChange(e)}
        placeholder="Your Webhook URL"
      />
      <div>
        <div className="flex gap-3 items-center mb-2">
          <button
            className={`w-6 h-6 rounded-md border-2 grid place-items-center ${
              isSubmissionChecked
                ? "bg-prime-violet border-prime-violet"
                : "border-gray-400"
            }`}
            onClick={() => setIsSubmissionChecked(!isSubmissionChecked)}
          >
            {isSubmissionChecked && <HiCheck className="text-white text-xl" />}
          </button>
          <p className="text-sm"> Send form submissions</p>
        </div>
        <div className="flex gap-3 items-center ">
          <button
            className={`w-6 h-6 rounded-md border-2 grid place-items-center ${
              isSendDataChecked
                ? "bg-prime-violet border-prime-violet"
                : "border-gray-400"
            }`}
            onClick={() => setIsSendDataChecked(!isSendDataChecked)}
          >
            {isSendDataChecked && <HiCheck className="text-white text-xl" />}
          </button>
          <p className="text-sm"> Send click data</p>
        </div>
      </div>
      <button
        className="w-48 h-16 mt-14 mb-8 rounded-xl text-lg text-white bg-prime-violet font-medium hover:bg-violet-500"
        onClick={handleGetCode}
      >
        Get your Code
      </button>
      <div className="w-96 min-h-[16rem] bg-black/75 rounded-lg p-3 flex flex-col justify-between">
        <p className="text-white w-full font-secondary">uea</p>
        <button className="rounded-full text-white font-md bg-prime-violet py-1.5 px-7 text-center self-end hover:bg-violet-500">
          Copy the code
        </button>
      </div>
      <div className="w-96 flex gap-3 mt-2">
        <RiInformationLine className="text-3xl" />
        <p className="text-xs pt-1.5">
          Copy and paste the embed code above just before the closing{" "}
          {"</body>"} tag of your website template file.
        </p>
      </div>
    </section>
  );
};

export default SettingsAndCode;
