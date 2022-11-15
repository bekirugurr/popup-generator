import React, { useEffect, useState } from "react";
import type { PopUpState } from "../../slices/popUpSlice";
import { setStateTogether } from "../../slices/popUpSlice";
import type { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import positionFunction from "../../utils/positionFunction";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface SizeType {
  outerDiv: string;
}

const Modal5 = () => {
  const modalInfos = useSelector((state: RootState) => state.popUp);
  const [modalSize, setModalSize] = useState<SizeType>({
    outerDiv: "h-[16rem] w-[25rem] gap-4 px-8 sm:h-[18rem] sm:w-[29rem] sm:gap-5 sm:px-14 ",
  });
  const [isModalVisible, setIsModalVisible] = useState<string>("visible");
  const dispatch = useDispatch();

  useEffect(() => {
    const initialData: PopUpState = {
      numberOfSelectedTemplate: 5,
      size: "medium",
      position: { x: "center", y: "center" },
      color: "#7D4AEA",
      content: [
        ["Top title", "The file is on it's way"],
        [
          "Explaination",
          "You’ll get an notified when the receiver has opened the email.",
        ],
        ["Button", "Go to dashboard"],
      ],
      visitorDevice: "all",
      howManySecondsAfter: 0,
      percentage: 0,
      trafficSource: "",
      browserLanguage: [],
      exitIntentTargeting: true,
      image: "",
      logo: "",
      infoComponent: 'none',
    };
    dispatch(setStateTogether(initialData));
  }, [dispatch]);

  //! Alttaki kısım açık olursa kullanıcı modal'ın small, medium ve large hallerini deneme yaparken görebilecek. Ama bu yerleşimi bozduğu ve "task"ta istenmediği için yoruma aldım.
  // useEffect(() => {
  //   if (modalInfos.size == "large") {
  //     setModalSize({
  //       outerDiv: "h-[22rem] w-[34rem]  gap-10  px-16",
  //     });
  //   } else if (modalInfos.size == "small") {
  //     setModalSize({
  //       outerDiv: "h-[15rem] w-[26rem] gap-3 px-8",
  //     });
  //   } else {
  //     setModalSize({
  //       outerDiv: "h-[18rem] w-[30rem] gap-5  px-16",
  //     });
  //   }
  // }, [modalInfos]);

  //! Burada yok ama kullanıcıya html döndürecek olan js dosyasına position ve size eklendi

  const handleClick = () => {
    // setIsModalVisible('hidden')
  };

  return (
    <div
      className={` font-secondary bg-white z-50 rounded-3xl shadow-lg shadow-gray-200 border border-gray-300  overflow-hidden flex flex-col justify-center items-center text-center relative ml-1 lg:ml-8 ${isModalVisible} ${modalSize.outerDiv}`}
    >
      <h2 className="font-bold text-3xl">
        {modalInfos.content[0] && modalInfos.content[0][1]}
      </h2>
      <h3 className="text-xl font-normal">
        {modalInfos.content[1] && modalInfos.content[1][1]}
      </h3>
      <button
        className={`text-sm font-semibold border border-gray-400  rounded-lg py-3 w-full bg-[${
          modalInfos.color
        }] ${
          modalInfos.color == "#FFFFFF" || modalInfos.color == "#DDDDDD"
            ? "text-black"
            : "text-white"
        }`}
        onClick={() => handleClick()}
      >
        {modalInfos.content[2] && modalInfos.content[2][1]}
      </button>

      <button className="absolute top-3 right-3 rounded-full">
        <IoIosCloseCircleOutline className="text-gray-600 text-4xl" />
        {/* onClick={()=>setIsModalVisible('hidden')} */}
      </button>
    </div>
  );
};

export default Modal5;
