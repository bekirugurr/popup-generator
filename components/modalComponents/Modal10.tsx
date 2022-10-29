import Image from "next/image";
import React, { useEffect, useState } from "react";
import type { PopUpState } from "../../slices/popUpSlice";
import { setStateTogether } from "../../slices/popUpSlice";
import type { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { IoMdClose } from "react-icons/io";

interface SizeType {
  outerDiv: string;
  innerDiv: string;
  form: string;
}

const Modal10 = () => {
  const modalInfos = useSelector((state: RootState) => state.popUp);
  const [modalSize, setModalSize] = useState<SizeType>({
    outerDiv: "h-[23rem] w-[39rem]",
    innerDiv: "gap-5 px-8",
    form: "gap-4",
  });
  const [isModalVisible, setIsModalVisible] = useState<string>("visible");
  const dispatch = useDispatch();

  useEffect(() => {
    const initialData: PopUpState = {
      numberOfSelectedTemplate: 10,
      size: "medium",
      position: { x: "center", y: "center" },
      color: "#7D4AEA",
      content: [
        ["Top title", "Sign Up"],
        ["Sub title", "Join new adventure"],
        ["Name input placeholder", "Enter your name"],
        ["Email input placeholder", "Enter your email"],
        ["Button content", "Sign Up"],
        ["Footnote  left", "Forgot password"],
        ["Footnote right", "Login"],
      ],
      visitorDevice: "all",
      howManySecondsAfter: 0,
      percentage: 0,
      trafficSource: "",
      browserLanguage: [],
      exitIntentTargeting: true,
      image: 'https://thumbsnap.com/i/ffkXAzBs.png',
      logo: ""
    };
    dispatch(setStateTogether(initialData));
  }, [dispatch]);

  //! Alttaki kısım açık olursa kullanıcı modal'ın small, medium ve large hallerini deneme yaparken görebilecek. Ama bu yerleşimi bozduğu ve "task"ta istenmediği için yoruma aldım.
  // useEffect(() => {
  //   if (modalInfos.size == "large") {
  //     setModalSize({
  //       outerDiv: "h-[30rem] w-[57rem]",
  //       innerDiv: "gap-7 px-12",
  //       form: "gap-7",
  //     });
  //   } else if (modalInfos.size == "small") {
  //     setModalSize({
  //       outerDiv: "h-[16rem] w-[30rem]",
  //       innerDiv: "gap-1 px-4",
  //       form: "gap-2",
  //     });
  //   } else {
  //     setModalSize({
  //       outerDiv: "h-[20.8rem] w-[39rem]",
  //       innerDiv: "gap-2 px-8",
  //       form: "gap-3",
  //     });
  //   }
  // }, [modalInfos]);

  //! Burada yok ama kullanıcıya html döndürecek olan js dosyasına position ve size eklendi

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    // setIsModalVisible('hidden')
  };

  return (
    <div
      className={` bg-white z-50 rounded-3xl shadow-lg shadow-gray-200 border border-gray-300 flex overflow-hidden ${isModalVisible} ${modalSize.outerDiv}`}
    >
      <div
        className={`w-1/2  flex flex-col justify-center items-start gap-2 px-8 ${modalSize.innerDiv}`}
      >
        <h2 className="font-semibold text-3xl">{modalInfos.content[0][1]}</h2>
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
            {modalInfos.content[4] && modalInfos.content[4][1]}
          </button>
        <div className="text-xs text-gray-800 flex justify-between w-full">
            <a className="hover:text-rose-600" href="#">{modalInfos.content[5] && modalInfos.content[5][1]}</a>
            <a className="hover:text-rose-600" href="#">{modalInfos.content[6] && modalInfos.content[6][1]}</a>
        </div>
        </form>
      </div>
      <div className="w-1/2 relative">
        {modalInfos.image ? (
          <Image
            src={modalInfos.image}
            alt="popup image"
            layout='fill'
            className="w-full h-full"

          />
        ) : (
          <Image
            src="https://thumbsnap.com/i/ffkXAzBs.png"
            alt="popup image"
            layout='fill'
            className="w-full h-full"
          />
        )}
        <button className="absolute top-3 right-3 bg-gray-400 p-1 rounded-full">
          {/* onClick={()=>setIsModalVisible('hidden')} */}
          <IoMdClose className="text-white text-lg" />
        </button>
      </div>
    </div>
  );
};

export default Modal10;
