import React, { useEffect, useState } from "react";
import type { PopUpState } from "../../slices/popUpSlice";
import { setStateTogether } from "../../slices/popUpSlice";
import type { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import positionFunction from "../../utils/positionFunction";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Image from "next/image";

interface SizeType {
  outerDiv: string;
  badgeDiv: string;
  badge: string;
  defSVG: string;
  form: string;
}

const Modal4 = () => {
  const modalInfos = useSelector((state: RootState) => state.popUp);
  const [modalSize, setModalSize] = useState<SizeType>({
    outerDiv: "h-[32rem] w-[30rem] gap-5 px-16 ",
    badgeDiv: "h-24 w-24",
    badge: "h-[4rem] w-[3rem]",
    defSVG: "60",
    form: "gap-3",
  });
  const [isModalVisible, setIsModalVisible] = useState<string>("visible");
  const dispatch = useDispatch();

  useEffect(() => {
    const initialData: PopUpState = {
      numberOfSelectedTemplate: 4,
      size: "medium",
      position: { x: "center", y: "center" },
      color: "#7D4AEA",
      content: [
        ["Top title", "Delete your profile"],
        [
          "Explaination",
          "Your profile will be automatically deleted after 1 month.",
        ],
        [
          "Sub explaination",
          "You won’t be able to access to your profile after",
        ],
        ["Bolder part of sub explaination", "30.08.2021."],
        ["Top button", "Delete my profile"],
        ["Down button", "Cancel"],
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

  //! Alttaki kısım açık olursa kullanıcı modal'ın small, medium ve large hallerini deneme yaparken görebilecek. Ama bu yerleşimi bozduğu ve "task"ta istenmediği için yoruma aldım.
  // useEffect(() => {
  //   if (modalInfos.size == "large") {
  //     setModalSize({
  //       outerDiv: "h-[37rem] w-[34rem]  gap-6  px-16",
  //       badgeDiv: "h-32 w-32",
  //       badge: "h-[5rem] w-[4rem]",
  //       defSVG: "90",
  //       form: "gap-10",
  //     });
  //   } else if (modalInfos.size == "small") {
  //     setModalSize({
  //       outerDiv: "h-[26rem] w-[26rem] gap-3 px-8",
  //       badgeDiv: "h-24 w-24",
  //       badge: "h-[4rem] w-[3rem]",
  //       defSVG: "60",
  //       form: "gap-3",
  //     });
  //   } else {
  //     setModalSize({
  //       outerDiv: "h-[32rem] w-[30rem] gap-5  px-16",
  //       badgeDiv: "h-24 w-24",
  //       badge: "h-[4rem] w-[3rem]",
  //       defSVG: "60",
  //       form: "gap-6",
  //     });
  //   }
  // }, [modalInfos]);

  //! Burada yok ama kullanıcıya html döndürecek olan js dosyasına position ve size eklendi

  const handleDelete = () => {
    // setIsModalVisible('hidden')
  };

  return (
    <div
      className={` font-secondary bg-white z-50 rounded-3xl shadow-lg shadow-gray-200 border border-gray-300  overflow-hidden flex flex-col justify-center items-center text-center ml-8 ${isModalVisible} ${modalSize.outerDiv}`}
    >
      <div
        className={`${modalSize.badgeDiv} grid place-items-center rounded-full bg-[${modalInfos.color}]`}
      >
        {modalInfos.logo ? (
          <Image
            src={modalInfos.logo}
            alt="badge"
            className={`${modalSize.badge}`}
          />
        ) : (
          <svg
            width={modalSize.defSVG}
            height={modalSize.defSVG}
            viewBox="0 0 28 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 12V32H6V12H22ZM19 0H9L7 2H0V6H28V2H21L19 0ZM26 8H2V32C2.00317 33.0599 2.42561 34.0755 3.17507 34.8249C3.92453 35.5744 4.94011 35.9968 6 36H22C23.0599 35.9968 24.0755 35.5744 24.8249 34.8249C25.5744 34.0755 25.9968 33.0599 26 32V8Z"
              fill="white"
            />
          </svg>
        )}
      </div>
      <h2 className="font-bold text-3xl">
        {modalInfos.content[0] && modalInfos.content[0][1]}
      </h2>
      <h3 className="text-xl font-normal">
        {modalInfos.content[1] && modalInfos.content[1][1]}
      </h3>
      <p className="text-gray-500">
        {modalInfos.content[2] && modalInfos.content[2][1]}{" "}
        <span className="text-black font-medium">
          {modalInfos.content[3] && modalInfos.content[3][1]}
        </span>
      </p>
      <button
        className={`text-sm font-semibold border border-gray-400  rounded-lg py-3 w-full bg-[${
          modalInfos.color
        }] ${
          modalInfos.color == "#FFFFFF" || modalInfos.color == "#DDDDDD"
            ? "text-black"
            : "text-white"
        }`}
        onClick={() => handleDelete()}
      >
        {modalInfos.content[4] && modalInfos.content[4][1]}
      </button>

      <button
        className={`text-sm font-semibold border border-gray-400  rounded-lg py-3 w-full text-black hover:bg-[${modalInfos.color}]`}
      >
        {/* onClick={()=>setIsModalVisible('hidden')} */}
        {modalInfos.content[5] && modalInfos.content[5][1]}
      </button>

      <button className="absolute top-3 right-3 rounded-full">
        <IoIosCloseCircleOutline className="text-gray-600 text-4xl" />
        {/* onClick={()=>setIsModalVisible('hidden')} */}
      </button>
    </div>
  );
};

export default Modal4;
