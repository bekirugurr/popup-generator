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

const ModalDefault = () => {
  const modalInfos = useSelector((state: RootState) => state.popUp);
  const [modalSize, setModalSize] = useState<SizeType>({
    outerDiv: "h-[15rem] w-[25rem] sm:h-[20.8rem] sm:w-[39rem]",
    innerDiv: "gap-1 px-5 sm:gap-2 sm:px-8",
    form: "gap-1 sm:gap-3",
  });
  const [isModalVisible, setIsModalVisible] = useState<string>("visible");
  const dispatch = useDispatch();

  useEffect(() => {
    const initialData: PopUpState = {
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
      ],
      visitorDevice: "all",
      howManySecondsAfter: 0,
      percentage: 0,
      trafficSource: "",
      browserLanguage: [],
      exitIntentTargeting: true,
      image: 'https://thumbsnap.com/i/E4UJGTGf.jpg',
      logo: "",
      infoComponent: 'none',
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
      className={` bg-white z-50 rounded-xl sm:rounded-3xl shadow-lg shadow-gray-200 border border-gray-300 flex overflow-hidden sm:ml-1 ${isModalVisible} ${modalSize.outerDiv}`}
    >
      <div
        className={`w-1/2  flex flex-col justify-center items-center gap-2 ${modalSize.innerDiv}`}
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
            className="text-sm border border-gray-400 rounded-lg py-1 sm:py-2 pl-2 w-full"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder={modalInfos.content[3][1]}
            className="text-sm border border-gray-400 rounded-lg py-1 sm:py-2 pl-2 w-full"
          />
          <button
            type="submit"
            className={`text-sm font-semibold border border-gray-400  rounded-lg py-1 sm:py-2 pl-2 w-full bg-[${
              modalInfos.color
            }] ${
              modalInfos.color == "#FFFFFF" || modalInfos.color == "#DDDDDD"
                ? "text-black"
                : "text-white"
            }`}
          >
            {modalInfos.content[4][1]}
          </button>
        </form>
        <p className="text-[10px] sm:text-xs text-[#777777]">{modalInfos.content[5][1]}</p>
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
            src="https://thumbsnap.com/i/E4UJGTGf.jpg"
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

export default ModalDefault;
