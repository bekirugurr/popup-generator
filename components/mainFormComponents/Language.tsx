import React, { useState, useEffect } from "react";
import RadioButton from "./Common/RadioButton";
import { setBrowserLanguage } from "../../slices/popUpSlice";
import type { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { IoMdCloseCircle } from "react-icons/io";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { BsFillCheckSquareFill, BsSquare  } from "react-icons/bs";
import Info from "./Common/Info";

interface LanguageItem {
  label: string;
  value: string;
}

const Language = () => {
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(true);
  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);
  const browserLanguage = useSelector(
    (state: RootState) => state.popUp.browserLanguage
  );
  const dispatch = useDispatch();

  useEffect(() => {
    !isSwitchOn && dispatch(setBrowserLanguage([]));
  }, [isSwitchOn, dispatch]);

  const languages: string[] = [
    "English",
    "Turkish",
    "Spanish",
    "Arabic",
    "Portuguese",
    "Japanese",
    "German",
    "French",
    "Italian",
  ];

  const handleDelete = (e: any, item: string) => {
    const langArr = browserLanguage?.filter((lang: string) => item !== lang);
    langArr
      ? dispatch(setBrowserLanguage(langArr))
      : dispatch(setBrowserLanguage([]));
  };
  const handleClick = (e:any, lang:string) => {
    e.preventDefault()
    if (browserLanguage != undefined &&  browserLanguage.includes(lang)) {
        const newLangArr: string[] = browserLanguage.filter((item)=>item != lang)
        dispatch(setBrowserLanguage(newLangArr))
    } else if(browserLanguage != undefined){
        const newLangArr: string[] = [...browserLanguage, lang]
        dispatch(setBrowserLanguage(newLangArr))
    } else{
        dispatch(setBrowserLanguage([lang]))
    }
  }

  const info = "You can allow to the popup to appear in your site for users who have certain browser languages by this feature. Default is all browser languages. "
  return (
    <section className="text-secondary w-96 relative mt-12">
      <h4 className="my-2 pl-1 font-semibold">Browser Language</h4>
      <div className="absolute top-0 right-0 flex items-center gap-3">
        <Info
          info={info}
          inWhichComponent="Language"
        />
        <RadioButton isSwitchOn={isSwitchOn} setIsSwitchOn={setIsSwitchOn} />
      </div>
      <div className="relative">
        <div
          className={`w-96 h-11 px-2 mt-6 text-sm rounded-md border border-gray-400 flex gap-1 items-center justify-between text-gray-600 ${isOptionsOpen && 'border-2 border-blue-400'}`}
          onClick={() => setIsOptionsOpen(!isOptionsOpen)}
        >
          <span>Select languages...</span>
          {isOptionsOpen ? (
            <FiChevronUp className="text-2xl" />
          ) : (
            <FiChevronDown className="text-2xl" />
          )}
        </div>
        {isOptionsOpen && (
          <div className="absolute w-96 h-[16rem] -bottom-[16.1rem] rounded-lg border border-gray-400 overflow-y-auto bg-white z-50" onMouseLeave={()=>setIsOptionsOpen(false)}>
            {languages.map((lang, index) => (
              <button key={index} className='hover:bg-gray-200 flex items-center px-3 py-1.5 gap-3 w-full' onClick={(e)=>handleClick(e,lang)}>
                {browserLanguage != undefined && browserLanguage.includes(lang) ? <BsFillCheckSquareFill className="text-prime-violet"/> : <BsSquare/> }
                <div>{lang}</div> 
                </button>
            ))}
          </div>
        )}
      </div>

      <div className="w-96 mt-6 text-sm rounded-md border border-gray-400 flex gap-1 items-center flex-wrap pl-1 py-0.5" >

        {browserLanguage?.map((lang: string, index: number) => (
          <div
            key={index}
            className="border rounded py-1.5 px-1 mr-1 bg-gray-200 hover:bg-white hover:border-red-700 flex items-center hover:text-red-700"
            
          >
            <span className="text-black">{lang}</span>
            <IoMdCloseCircle
              className="ml-2 text-xl"
              onClick={(e) => handleDelete(e, lang)}
            />
          </div>
        ))}        
        {browserLanguage != undefined && browserLanguage.length !== 0 ?<div className="h-9"></div> : <div className="h-9 flex items-center text-gray-600">You have not select yet...</div> }
      </div>
    </section>
  );
};

export default Language;
