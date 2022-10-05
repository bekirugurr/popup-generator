import React, { useState, useEffect } from "react";
import { setWebhookURL, setStateTogether } from "../../slices/popUpSlice";
import type { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { HiCheck } from "react-icons/hi";
import { RiInformationLine } from "react-icons/ri";
import axios from "axios";

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
  webhookURL: string;
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
  webhookURL: "",
  logo: "",
  image: "",
};

const SettingsAndCode = () => {
  const [isSubmissionChecked, setIsSubmissionChecked] =
    useState<boolean>(false);
  const [isSendDataChecked, setIsSendDataChecked] = useState<boolean>(false);
  const [outPut, setOutPut] = useState<string>("");
  const dispatch = useDispatch();
  const allData = useSelector((state: RootState) => state.popUp);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    dispatch(setWebhookURL(target.value));
  };

  // https://hook.eu1.make.com/m2hs5h0yzgyoaz2pxj779r2onwcf7jr8
  const handleGetCode = () => {
    let time = new Date();
    if (isSubmissionChecked && isSendDataChecked && allData.webhookURL) {
      axios.post(allData.webhookURL, {
        allData: allData,
        time: time
      })
      .then(function (response) {
        let dataFromWebhook = JSON.parse(response.config.data).allData;
        console.log(dataFromWebhook)
        let logo = dataFromWebhook.logo ? `logo: "${dataFromWebhook.logo}",` : ""
        let image = dataFromWebhook.image ? `image: "${dataFromWebhook.image}",` : ""
        let content = ""
        dataFromWebhook.content.forEach((item:[string, string])=>{
          content = content + `['${item[0]}', '${item[1]}'], `
        })
        let languages = ""
        dataFromWebhook.browserLanguage.map((item:string) =>{
          languages = languages + `'${item}', `
        })

        let outPutString = `<script type="text/javascript" 
        src="https://cdn.jsdelivr.net/gh/bekirugurr/popup-generator/popups-as-vanilla-js/modal${dataFromWebhook.numberOfSelectedTemplate}.js">
        </script>
        <script> let popObj = {
          size: "${dataFromWebhook.size}", 
          position: {x: "${dataFromWebhook.position.x}", y: "${dataFromWebhook.position.y}"}, 
          color: "${dataFromWebhook.color}", 
          content: [${content}], 
          visitorDevice: "${dataFromWebhook.visitorDevice}", 
          howManySecondsAfter: ${dataFromWebhook.howManySecondsAfter}, 
          percentage: ${dataFromWebhook.percentage}, 
          trafficSource: "${dataFromWebhook.trafficSource}", 
          browserLanguage: [${languages}], 
          exitIntentTargeting: ${dataFromWebhook.exitIntentTargeting}, 
          webhookURL: "${dataFromWebhook.webhookURL}",
          ${logo} ${image}} 
          popUp${dataFromWebhook.numberOfSelectedTemplate}(popObj) 
          </script>`
        setOutPut(outPutString)
        dispatch(setStateTogether(initialState))
        console.log(allData)
      })
      .catch(function (error) {
        console.log(error);
      });
    } else {
      alert(
        "You must enter webhook URL, allow to send form data and click data by clicking both box to get embed code"
      );
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
        value={allData.webhookURL}
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
        <pre>
          <code className="text-white w-full font-secondary text-xs break-words">
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
