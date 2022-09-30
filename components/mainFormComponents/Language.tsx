import React, { useState, useEffect } from "react";
import RadioButton from "./RadioButton";
import { setBrowserLanguage } from "../../slices/popUpSlice";
import type { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { MultiSelect } from "react-multi-select-component";
import { IoMdCloseCircle } from "react-icons/io";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { BsFillCheckSquareFill, BsSquare  } from "react-icons/bs";
import { browser } from "process";

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
  }, [isSwitchOn]);

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
  return (
    <section className="text-secondary w-96 relative mt-12">
      <h4 className="my-2 pl-1 font-semibold">Browser Language</h4>
      <RadioButton isSwitchOn={isSwitchOn} setIsSwitchOn={setIsSwitchOn} />

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
        {browserLanguage != undefined && browserLanguage.length !== 0 ?<div className="h-9"></div> : <div className="h-9 flex items-center text-gray-600">You haven't select yet...</div> }
      </div>
    </section>
  );
};

export default Language;

/* const Language = () => {
    const [isSwitchOn, setIsSwitchOn] = useState<boolean>(true);
    const [selected, setSelected] = useState<any>([]);
    const browserLanguage = useSelector(
      (state: RootState) => state.popUp.browserLanguage
    );
    const dispatch = useDispatch();
    const options = [
      { label: "English", value: "English" },
      { label: "Turkish", value: "Turkish" },
      { label: "Spanish", value: "Spanish" },
      { label: "Arabic", value: "Arabic" },
      { label: "Portuguese", value: "Portuguese" },
      { label: "Japanese", value: "Japanese" },
      { label: "German", value: "German" },
      { label: "French", value: "French" },
      { label: "Italian", value: "Italian" },
    ];
  
    useEffect(() => {
      !isSwitchOn && dispatch(setBrowserLanguage([]));
      let langArr: LanguageItem[] = selected.map((item: LanguageItem) => item.value);
      dispatch(setBrowserLanguage(langArr));
    }, [selected]);
  
    const handleDelete = (e: any, item: LanguageItem) => {
      const langDictArr = selected.filter(
        (lang: LanguageItem) => item.value !== lang.value
      );
      setSelected(langDictArr);
    };
  
    console.log(browserLanguage);
    return (
      <section className="text-secondary w-96 relative mt-12">
        <h4 className="my-2 pl-1 font-semibold">Browser Language</h4>
        <RadioButton isSwitchOn={isSwitchOn} setIsSwitchOn={setIsSwitchOn} />
        <MultiSelect
          options={options}
          value={selected}
          onChange={setSelected}
          labelledBy="Select"
        />
        <div className="w-96 p-px mt-6 text-sm rounded-md border border-gray-400 flex gap-1 items-center flex-wrap">
          <div className="h-10"></div>
          {selected?.map((item: LanguageItem, index: number) => (
            <div
              key={index}
              className="border rounded py-1.5 px-1 mr-1 bg-gray-200 hover:bg-white hover:border-red-700 flex items-center hover:text-red-700"
            >
              <span className="text-black">{item.value}</span>
              <IoMdCloseCircle
                className="ml-2 text-xl"
                onClick={(e) => handleDelete(e, item)}
              />
            </div>
          ))}
        </div>
      </section>
    );
  }; */
