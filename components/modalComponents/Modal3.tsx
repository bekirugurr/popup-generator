import Image from "next/image";
import React, { useEffect, useState } from "react";
import type { PopUpState } from "../../slices/popUpSlice";
import { setStateTogether } from "../../slices/popUpSlice";
import type { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import positionFunction from "../../utils/positionFunction";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface SizeType {
  outerDiv: string;
  badgeDiv: string;
  badge: string;
  form: string;
}

const Modal3 = () => {
  const modalInfos = useSelector((state: RootState) => state.popUp);
  const [modalSize, setModalSize] = useState<SizeType>({
    outerDiv: "h-[32.5rem] w-[26rem] gap-6",
    badgeDiv: "h-24 w-24",
    badge: "h-[4rem] w-[3rem]",
    form: "gap-3",
  });
  const [colorState, setColorState] = useState<{
    text: string;
    accent: string;
  }>({ text: "text-[#7D4AEA]", accent: "accent-[#7D4AEA]" });
  const [whichIsChecked, setWhichIsChecked] = useState<number>(0);
  const [isModalVisible, setIsModalVisible] = useState<string>("visible");
  const dispatch = useDispatch();

  useEffect(() => {
    const initialData: PopUpState = {
      numberOfSelectedTemplate: 3,
      size: "medium",
      position: { x: "center", y: "center" },
      color: "#7D4AEA",
      content: [
        ["Category title", "Plans"],
        ["Top Title", "Choose best for you"],
        ["Explaination", "Only pay for the capacity that you use."],
        ["Option 1", "Starter"],
        ["Option footer 1", "1 free (then $15 per meember / month)"],
        ["Option 2", "Pro"],
        ["Option footer 2", "$19 per member/month"],
        ["Option 3", "Business"],
        ["Option footer 3", "$29 per member/month"],
        ["Left button", "Cancel"],
        ["Right button", "Continue"],
      ],
      visitorDevice: "all",
      howManySecondsAfter: 0,
      percentage: 0,
      trafficSource: "",
      browserLanguage: [],
      exitIntentTargeting: true,
      image: "",
      logo: ""
    };
    dispatch(setStateTogether(initialData));
  }, [dispatch]);

  useEffect(() => {
    //! Alttaki kısım açık olursa kullanıcı modal'ın small, medium ve large hallerini deneme yaparken görebilecek. Ama bu yerleşimi bozduğu ve "task"ta istenmediği için yoruma aldım.
    // if (modalInfos.size == "large") {
    //   setModalSize({
    //     outerDiv: "h-[37.5rem] w-[30rem]  gap-10",
    //     badgeDiv: "h-32 w-32",
    //     badge: "h-[5rem] w-[4rem]",
    //     form: "gap-10",
    //   });
    // } else if (modalInfos.size == "small") {
    //   setModalSize({
    //     outerDiv: "h-[27.5rem] w-[22rem] gap-4",
    //     badgeDiv: "h-24 w-24",
    //     badge: "h-[4rem] w-[3rem]",
    //     form: "gap-3",
    //   });
    // } else {
    //   setModalSize({
    //     outerDiv: "h-[32.5rem] w-[26rem] gap-6 pb-4",
    //     badgeDiv: "h-24 w-24",
    //     badge: "h-[4rem] w-[3rem]",
    //     form: "gap-6",
    //   });
    // }
    if (modalInfos.color === "#000000") {
      setColorState({ text: `text-[#000000]`, accent: `accent-[#000000]` });
    } else if (modalInfos.color === "#7D4AEA") {
      setColorState({ text: `text-[#7D4AEA]`, accent: `accent-[#7D4AEA]` });
    } else if (modalInfos.color === "#F37C34") {
      setColorState({ text: `text-[#F37C34]`, accent: `accent-[#F37C34]` });
    } else if (modalInfos.color === "#DDDDDD") {
      setColorState({ text: `text-[#959090]`, accent: `accent-[#959090]` });
    } else {
      setColorState({ text: `text-[#000000]`, accent: `accent-[#000000]` });
    }
  }, [modalInfos]);

  //! Burada yok ama kullanıcıya html döndürecek olan js dosyasına position ve size eklendi

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    // setIsModalVisible('hidden')
  };

  return (
    <div
      className={` font-secondary bg-white z-50 rounded-3xl shadow-lg shadow-gray-200 border border-gray-300  overflow-hidden flex flex-col justify-center items-center px-6 ml-8 ${isModalVisible} ${modalSize.outerDiv}`}
    >
      <h3
        className={`font-lg font-medium text-center text-lg ${colorState.text}`}
      >
        {modalInfos.content[0] && modalInfos.content[0][1].toUpperCase()}
      </h3>
      <h2 className="text-center  font-bold text-3xl">
        {modalInfos.content[1] && modalInfos.content[1][1]}
      </h2>
      <h3 className="text-center  text-xl font-normal">
        {modalInfos.content[2] && modalInfos.content[2][1]}
      </h3>
      <form
        className={` px-4 flex flex-col w-full  ${modalSize.form}`}
        onSubmit={handleSubmit}
      >
        {modalInfos.content[8] &&
          [
            [modalInfos.content[3], modalInfos.content[4]],
            [modalInfos.content[5], modalInfos.content[6]],
            [modalInfos.content[7], modalInfos.content[8]],
          ].map((item, index) => (
            <div key={index}>
              <label
                htmlFor={item[0][0]}
                className="flex items-center font-semibold"
              >
                <input
                  type="radio"
                  name="campaign"
                  id={item[0][0]}
                  className={`mr-3 w-6 h-6 ${colorState.accent}`}
                  checked={whichIsChecked == index}
                  onChange={()=> setWhichIsChecked(index)}

                />
                {item[0][1]}
              </label>
              <div className="ml-9 text-xs">{item[1][1]}</div>
            </div>
          ))}

        <div className="flex gap-4">
          <button
            className={`text-sm font-semibold border border-gray-400  rounded-lg py-3 w-full text-black hover:bg-[${modalInfos.color}]`}
          >
            {/* onClick={()=>setIsModalVisible('hidden')} */}
            {modalInfos.content[9] && modalInfos.content[9][1]}
          </button>
          <button
            type="submit"
            className={`text-sm font-semibold border border-gray-400  rounded-lg py-3 w-full bg-[${
              modalInfos.color
            }] ${
              modalInfos.color == "#FFFFFF" || modalInfos.color == "#DDDDDD"
                ? "text-black"
                : "text-white"
            }`}
          >
            {modalInfos.content[10] && modalInfos.content[10][1]}
          </button>
        </div>
      </form>

      <button className="absolute top-3 right-3 rounded-full">
        <IoIosCloseCircleOutline className="text-gray-600 text-4xl" />
        {/* onClick={()=>setIsModalVisible('hidden')} */}
      </button>
    </div>
  );
};

export default Modal3;
