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

const Modal9 = () => {
  const modalInfos = useSelector((state: RootState) => state.popUp);
  const [modalSize, setModalSize] = useState<SizeType>({
    outerDiv: "h-[32.5rem] w-[26rem] ",
    innerDiv: "gap-4 px-12",
    form: "gap-3",
  });
  const [isModalVisible, setIsModalVisible] = useState<string>("visible");
  const dispatch = useDispatch();

  useEffect(() => {
    const initialData: PopUpState = {
      numberOfSelectedTemplate: 9,
      size: "medium",
      position: { x: "center", y: "center" },
      color: "#7D4AEA",
      content: [
        ["Top title", "Hello stranger"],
        ["Sub title", "Sign up now and get 30% discount"],
        ["Name input placeholder", "Enter Full name"],
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
      image: "https://thumbsnap.com/i/F8QxftDb.jpg",
      logo: "https://thumbsnap.com/i/RDd8v24o.jpg",
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
      className={`font-secondary bg-white z-50 rounded-3xl shadow-lg shadow-gray-200 border border-gray-300  overflow-hidden relative ml-8 ${isModalVisible} ${modalSize.outerDiv} `}
    >
      <div className="w-full h-2/5 relative flex items-center justify-center">
        <Image
          src={
            modalInfos.image
              ? modalInfos.image
              : "https://thumbsnap.com/i/F8QxftDb.jpg"
          }
          alt="upper image"
          layout="fill"
          className="w-full h-full absolute"
        />
        <div className="pt-6">
        <Image
          src={
            modalInfos.logo
              ? modalInfos.logo
              : "https://thumbsnap.com/i/RDd8v24o.jpg"
          }
          alt="upper image"
          height="150px"
          width="200px"
          className=" z-40 rounded-xl "
        /></div>
      </div>

      <div
        className={` h-3/5 flex flex-col justify-center items-center gap-2 px-8 ${modalSize.innerDiv}`}
      >
        <h2 className="font-bold text-3xl">{modalInfos.content[0][1]}</h2>
        <p>{modalInfos.content[1][1]}</p>
        <form
          className={`flex flex-col w-full gap-3 ${modalSize.form}`}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            id="name"
            placeholder={modalInfos.content[2][1]}
            className="text-sm border border-gray-400 rounded-lg py-2 pl-2 w-full"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder={modalInfos.content[3][1]}
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
            {modalInfos.content[4][1]}
          </button>
        <p className="text-xs pl-2 text-gray-800">
            {modalInfos.content[5] && modalInfos.content[5][1]}
            <span className="underline pl-1">{modalInfos.content[6] && modalInfos.content[6][1]}</span>
        </p>
        </form>
      </div>

      <button className="absolute top-3 right-3 rounded-full">
        <IoIosCloseCircleOutline className="text-gray-300 text-4xl" />
        {/* onClick={()=>setIsModalVisible('hidden')} */}
      </button>
    </div>
  );
};

export default Modal9;
