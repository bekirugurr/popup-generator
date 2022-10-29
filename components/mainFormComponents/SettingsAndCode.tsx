import React, { useState, useEffect } from "react";
import { setStateTogether } from "../../slices/popUpSlice";
import type { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { HiCheck } from "react-icons/hi";
import { RiInformationLine } from "react-icons/ri";

export interface PopUpState {
  numberOfSelectedTemplate: number;
  size: "small" | "medium" | "large";
  position: { x: "left" | "center" | "right"; y: "top" | "center" | "bottom" };
  color: string;
  logo?: string;
  content: [string, string][];
  image?: string;
  visitorDevice: "desktop" | "mobile" | "all";
  howManySecondsAfter: number;
  percentage: number;
  trafficSource: string;
  browserLanguage: string[];
  exitIntentTargeting: boolean;
  infoComponent : string;
}

const initialState: PopUpState = {
  numberOfSelectedTemplate: 0,
  size: "medium",
  position: { x: "center", y: "center" },
  color: "#F37C34",
  content: [
    ["Top title", "Sign Up"],
    ["Sub title", "Join new adventure"],
    ["Name input placeholder", "Enter your name"],
    ["Email input placeholder", "Enter your email"],
    ["Button content", "Sign Up"],
    ["Footnote", "By signing up, you agree to private policy"],
    ["Top title", "Sign Up"],
    ["Sub title", "Join new adventure"],
    ["Name input placeholder", "Enter your name"],
    ["Email input placeholder", "Enter your email"],
    ["Button content", "Sign Up"],
    ["Footnote", "By signing up, you agree to private policy"],
  ],
  visitorDevice: "all",
  howManySecondsAfter: 0,
  percentage: 0,
  trafficSource: "",
  browserLanguage: [],
  exitIntentTargeting: false,
  logo: "",
  image: "",
  infoComponent: 'none',
};

const SettingsAndCode = () => {
  const [isSubmissionChecked, setIsSubmissionChecked] =
    useState<boolean>(false);
  const [isSendDataChecked, setIsSendDataChecked] = useState<boolean>(false);
  const [outPut, setOutPut] = useState<string>("");
  const dispatch = useDispatch();
  const allData = useSelector((state: RootState) => state.popUp);

  const handleGetCode = () => {
    let time = new Date();
    if (isSubmissionChecked && isSendDataChecked) {
      let logo = allData.logo ? `logo: "${allData.logo}",` : ""
      let image = allData.image ? `image: "${allData.image}",` : ""
      let content = ""
      allData.content.forEach((item:[string, string])=>{
        content = content + `['${item[0]}', '${item[1]}'], `
      })
      let languages = ""
      allData.browserLanguage.map((item:string) =>{
        languages = languages + `'${item}', `
      })

      let outPutString = `<script type="text/javascript" 
      src="https://cdn.jsdelivr.net/gh/bekirugurr/popup-generator/popups-as-vanilla-js/modal${allData.numberOfSelectedTemplate}.js">
      </script>
      <script> let popObj = {
        size: "${allData.size}", 
        position: {x: "${allData.position.x}", y: "${allData.position.y}"}, 
        color: "${allData.color}", 
        content: [${content}], 
        visitorDevice: "${allData.visitorDevice}", 
        howManySecondsAfter: ${allData.howManySecondsAfter}, 
        percentage: ${allData.percentage}, 
        trafficSource: "${allData.trafficSource}", 
        browserLanguage: [${languages}], 
        exitIntentTargeting: ${allData.exitIntentTargeting}, 
        ${logo} ${image}} 
        popUp${allData.numberOfSelectedTemplate}(popObj) 
        </script>`
      setOutPut(outPutString)
      dispatch(setStateTogether(initialState))
    } else {
      alert(
        "You must allow to send form data and click data by clicking both box to get embed code"
      );
    }
  };

  return (
    <section className="w-96  mt-5">
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
        className="w-48 h-16 mt-6 mb-8 rounded-xl text-lg text-white bg-prime-violet font-medium hover:bg-violet-500"
        onClick={handleGetCode}
      >
        Get your Code
      </button>
      <div className="w-96 min-h-[16rem] bg-black/75 rounded-lg p-3 flex flex-col justify-between">
        <pre>
          <code className="text-white w-full font-secondary text-xs break-words whitespace-pre-line">
            {outPut}
          </code>
        </pre>
        <button className="rounded-full text-white font-md bg-prime-violet py-1.5 px-7 text-center self-end hover:bg-violet-500" onClick={()=>{navigator.clipboard.writeText(outPut)}}>
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
