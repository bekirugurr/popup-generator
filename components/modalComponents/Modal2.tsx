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
  badge: string;
  form: string;
}

const Modal2 = () => {
  const modalInfos = useSelector((state: RootState) => state.popUp);
  const [modalSize, setModalSize] = useState<SizeType>({
    outerDiv: "h-[32.5rem] w-[25rem]",
    innerDiv: "gap-4 px-12",
    badge: "h-[4rem] w-[3rem]",
    form: "gap-6",
  });
  const [isModalVisible, setIsModalVisible] = useState<string>("visible");
  const dispatch = useDispatch();

  useEffect(() => {
    const initialData: PopUpState = {
      numberOfSelectedTemplate: 2,
      size: "medium",
      position: { x: "center", y: "center" },
      color: "#7D4AEA",
      content: [
        ["Title", "Install local now"],
        ["Explaination", "We’ve gone native, try it!"],
        ["Upper button", "Continue"],
        ["Down button", "Not now"],
      ],
      visitorDevice: "all",
      howManySecondsAfter: 0,
      percentage: 0,
      trafficSource: "",
      browserLanguage: [],
      exitIntentTargeting: true,
      image: "https://www.softlanding.ca/wp-content/uploads/2020/04/WM-2.jpg",
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

  const handleClick = () => {
    // setIsModalVisible('hidden')
  };

  return (
    <div
      className={`font-secondary bg-white z-50 rounded-3xl shadow-lg shadow-gray-200 border border-gray-300  overflow-hidden sm:ml-2 lg:ml-8 relative ${isModalVisible} ${modalSize.outerDiv} `}
    >
      <div className="w-full h-1/2 relative">
        <Image
          src={
            modalInfos.image
              ? modalInfos.image
              : "https://www.softlanding.ca/wp-content/uploads/2020/04/WM-2.jpg"
          }
          alt="upper image"
          layout="fill"
          className="w-full h-full"
        />
      </div>

      <div
        className={`w-ful h-1/2 flex flex-col justify-center items-center ${modalSize.innerDiv}`}
      >
        <h2 className="font-bold text-3xl">
          {modalInfos.content[0] && modalInfos.content[0][1]}
        </h2>
        <h3 className="text-xl font-medium">
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

        <button
          className={`text-sm font-semibold border border-gray-400  rounded-lg py-3 w-full text-black hover:bg-[${modalInfos.color}]`}
        >
          {/* onClick={()=>setIsModalVisible('hidden')} */}
          {modalInfos.content[3] && modalInfos.content[3][1]}
        </button>
      </div>

      <button className="absolute top-3 right-3 rounded-full">
        <IoIosCloseCircleOutline className="text-gray-600 text-4xl" />
        {/* onClick={()=>setIsModalVisible('hidden')} */}
      </button>
    </div>
  );
};

export default Modal2;
