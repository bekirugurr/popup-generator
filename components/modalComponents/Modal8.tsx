import React, { useEffect, useState } from "react";
import type { PopUpState } from "../../slices/popUpSlice";
import { setStateTogether } from "../../slices/popUpSlice";
import type { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface SizeType {
  outerDiv: string;
  form: string;
}

const Modal8 = () => {
  const modalInfos = useSelector((state: RootState) => state.popUp);
  const [modalSize, setModalSize] = useState<SizeType>({
    outerDiv: "h-[17rem] w-[29rem] gap-2 px-12 sm:h-[20.8rem] sm:w-[39rem]  sm:px-24",
    form: "gap-2 sm:gap-4",
  });
  const [isModalVisible, setIsModalVisible] = useState<string>("visible");
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const initialData: PopUpState = {
      numberOfSelectedTemplate: 8,
      size: "medium",
      position: { x: "center", y: "center" },
      color: "#7D4AEA",
      content: [
        ["Top title", "Subscribe to our newsletter"],
        ["Explaination", "Receive the flash news in your inbox."],
        ["Input placeholder", "Enter your email"],
        ["Checkbox label", "By subscribe this form I agree to Privacy Policy."],
        ["Submit button", "Sign up now"],
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

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    // setIsModalVisible('hidden')
  };
  let textColor =
    modalInfos.color === "#000000" ||
    modalInfos.color === "#7D4AEA" ||
    modalInfos.color === "#F37C34"
      ? "white"
      : "black";
  
  return (
    <div
      className={` font-secondary bg-[${modalInfos.color}] z-50 rounded-3xl shadow-lg shadow-gray-200 border border-gray-300  overflow-hidden flex flex-col justify-center items-center text-center relative ml-1 lg:ml-8 ${isModalVisible} ${modalSize.outerDiv} text-${textColor}`}
    >
      <h2 className="font-bold text-3xl pt-3">
        {modalInfos.content[0] && modalInfos.content[0][1]}
      </h2>
      <h3 className="text-xl font-normal sm:mb-4">
        {modalInfos.content[1] && modalInfos.content[1][1]}
      </h3>

      <form
        className={`flex flex-col w-full  ${modalSize.form}`}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          id="name"
          placeholder={modalInfos.content[2] && modalInfos.content[2][1]}
          className={`text-sm border border-${textColor} placeholder:text-${textColor} bg-[${modalInfos.color}] rounded-lg py-3 pl-2 w-full`}
        />

        <input
          type="radio"
          name="policyAccept"
          id="policyAccept"
          checked={!isChecked}
          className="hidden"
        />
        <label
          htmlFor="policyAccept"
          className="text-sm  flex items-center"
          onClick={() => setIsChecked(!isChecked)}
        >
          <div
            className={`w-5 h-5 ml-2 mr-3 rounded-full bg-[${modalInfos.color}] border border-${textColor} flex items-center justify-center`}
          >
            <div className={`w-3 h-3 rounded-full bg-${textColor} ${!isChecked && 'hidden'}`}></div>
          </div>
          {modalInfos.content[3] && modalInfos.content[3][1]}
        </label>

        <div className="flex gap-4 w-full justify-end">
          <button
            type="submit"
            className={`font-semibold border-2 border-${textColor}  rounded-lg py-1 sm:py-3 w-1/2 bg-white text-black`}
          >
            {modalInfos.content[4] && modalInfos.content[4][1]}
          </button>
        </div>
      </form>

      <button className="absolute top-3 right-3 rounded-full">
        <IoIosCloseCircleOutline className={`text-${textColor} text-4xl`} />
        {/* onClick={()=>setIsModalVisible('hidden')} */}
      </button>
    </div>
  );
};

export default Modal8;
