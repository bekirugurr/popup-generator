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
  innerDiv: string;
  form: string;
}

const Modal11 = () => {
  const modalInfos = useSelector((state: RootState) => state.popUp);
  const [modalSize, setModalSize] = useState<SizeType>({
    outerDiv: "h-[32rem] w-[25rem]  gap-5 px-12",
    innerDiv: "h-[10rem] w-[10rem]",
    form: "gap-3",
  });
  const [isModalVisible, setIsModalVisible] = useState<string>("visible");
  const dispatch = useDispatch();

  useEffect(() => {
    const initialData: PopUpState = {
      numberOfSelectedTemplate: 11,
      size: "medium",
      position: { x: "center", y: "center" },
      color: "#7D4AEA",
      content: [
        ["Top title", "Check your email"],
        ["Explaination", "Once you deletet your account, you’ll lose all data associatted with it."],
        ["Email input placeholder", "Enter your email"],
        ["Button content", "Sign Up"],
        ["Footnote", "Allready "],
        ["Underlined footnote", " have an account?"],
      ],
      visitorDevice: "all",
      howManySecondsAfter: 0,
      percentage: 0,
      trafficSource: "",
      browserLanguage: [],
      exitIntentTargeting: true,
      image: "https://thumbsnap.com/i/J6sWerZN.png",
      logo: "",
      infoComponent: 'none',
    };
    dispatch(setStateTogether(initialData));
  }, [dispatch]);

  //! Alttaki kısım açık olursa kullanıcı modal'ın small, medium ve large hallerini deneme yaparken görebilecek. Ama bu yerleşimi bozduğu ve "task"ta istenmediği için yoruma aldım.
  // useEffect(() => {
  //   if (modalInfos.size == "large") {
  //     setModalSize({
  //       outerDiv: "h-[37.5rem] w-[30rem]",
  //       innerDiv: "gap-6 px-8",
  //       badge: "h-[5rem] w-[4rem]",
  //       form: "gap-10",
  //     });
  //   } else if (modalInfos.size == "small") {
  //     setModalSize({
  //       outerDiv: "h-[26.5rem] w-[21.2rem]",
  //       innerDiv: "gap-2 px-12",
  //       badge: "h-[4rem] w-[3rem]",
  //       form: "gap-3",
  //     });
  //   } else {
  //     setModalSize({
  //       outerDiv: "h-[32.5rem] w-[26rem]",
  //       innerDiv: "gap-4 px-12",
  //       badge: "h-[4rem] w-[3rem]",
  //       form: "gap-6",
  //     });
  //   }
  // }, [modalInfos]);

  //! Burada yok ama kullanıcıya html döndürecek olan js dosyasına position ve size eklendi

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()
    // setIsModalVisible('hidden')
  };

  return (
    <div
      className={`font-secondary bg-white z-50 rounded-3xl shadow-lg shadow-gray-200 border border-gray-300  overflow-hidden  flex flex-col justify-center items-center relative ml-3 lg:ml-8 ${isModalVisible} ${modalSize.outerDiv} `}
    >
      <div className={`relative flex items-center justify-center ${modalSize.innerDiv}`}>
        <Image
          src={
            modalInfos.logo
              ? modalInfos.logo
              : "https://thumbsnap.com/i/J6sWerZN.png"
          }
          alt="upper image"
          layout="fill"
          className="w-full h-full absolute"
        />
        
      </div>
        <h2 className="font-bold text-3xl">{modalInfos.content[0] && modalInfos.content[0][1]}</h2>
        <p className="text-center">{modalInfos.content[1] && modalInfos.content[1][1]}</p>
        <form
          className={`flex flex-col w-full gap-3 ${modalSize.form}`}
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder={modalInfos.content[2] && modalInfos.content[2][1]}
            className="text-sm border border-gray-400 rounded-lg py-2 pl-2 w-full"
          />
          <button
            type="submit"
            className={`text-sm font-semibold border border-gray-400  rounded-lg py-2 pl-2 w-full bg-[${
              modalInfos.color
            }] ${
              modalInfos.color == "#FFFFFF" || modalInfos.color == "#DDDDDD"
                ? "text-black"
                : "text-white"
            }`}
          >
            {modalInfos.content[3] && modalInfos.content[3][1]}
          </button>
        <p className="text-xs pl-2 text-gray-800">
            {modalInfos.content[4] && modalInfos.content[4][1]}
            <span className="underline pl-1">{modalInfos.content[5] && modalInfos.content[5][1]}</span>
        </p>
        </form>
      

      <button className="absolute top-3 right-3 rounded-full">
        <IoIosCloseCircleOutline className="text-gray-500 text-4xl" />
        {/* onClick={()=>setIsModalVisible('hidden')} */}
      </button>
    </div>
  );
};

export default Modal11;
