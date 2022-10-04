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

const Modal6 = () => {
  const modalInfos = useSelector((state: RootState) => state.popUp);
  const [modalSize, setModalSize] = useState<SizeType>({
    outerDiv: "h-[28rem] w-[30rem] gap-6 ",
    badgeDiv: "h-24 w-24",
    badge: "100",
    form: "gap-3",
  });
  const [isModalVisible, setIsModalVisible] = useState<string>("visible");
  const dispatch = useDispatch();

  useEffect(() => {
    const initialData: PopUpState = {
      numberOfSelectedTemplate: 6,
      size: "medium",
      position: { x: "center", y: "center" },
      color: "#7D4AEA",
      content: [
        ["Top title", "Join our mail list"],
        ["Explaination", "Save up to 30% of your next order"],
        ["Placeholder for code", "Enter your email"],
        ["Left button", "Later"],
        ["Right button", "Join now"],
      ],
      visitorDevice: "all",
      howManySecondsAfter: 0,
      percentage: 0,
      trafficSource: "",
      browserLanguage: [],
      exitIntentTargeting: true,
      webhookURL: "",
      image: "",
      logo: ""
    };
    dispatch(setStateTogether(initialData));
  }, [dispatch]);

  //! Alttaki kısım açık olursa kullanıcı modal'ın small, medium ve large hallerini deneme yaparken görebilecek. Ama bu yerleşimi bozduğu ve "task"ta istenmediği için yoruma aldım.
  // useEffect(() => {
  //   if (modalInfos.size == "large") {
  //     setModalSize({
  //       outerDiv: "h-[35rem] w-[37rem]  gap-10",
  //       badgeDiv: "h-32 w-32",
  //       badge: "120",
  //       form: "gap-10",
  //     });
  //   } else if (modalInfos.size == "small") {
  //     setModalSize({
  //       outerDiv: "h-[22rem] w-[24rem] gap-1",
  //       badgeDiv: "h-24 w-24",
  //       badge: "80",
  //       form: "gap-3",
  //     });
  //   } else {
  //     setModalSize({
  //       outerDiv: "h-[28rem] w-[30rem] gap-6 ",
  //       badgeDiv: "h-24 w-24",
  //       badge: "100",
  //       form: "gap-6",
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
      className={` font-secondary bg-white z-50 rounded-3xl shadow-lg shadow-gray-200 border border-gray-300  overflow-hidden flex flex-col justify-center items-center px-16 text-center  ${isModalVisible} ${modalSize.outerDiv}`}
    >
      <div
        className={`${modalSize.badgeDiv} grid place-items-center rounded-full`}
      >
        <svg
          width={`${modalSize.badge}`}
          height={`${modalSize.badge}`}
          viewBox="0 0 90 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M80.984 32.76C79.627 28.388 83.937 20.948 81.402 17.308C78.847 13.632 70.74 15.638 67.227 12.962C63.75 10.313 63.082 1.60701 58.904 0.18801C54.874 -1.18199 49.463 5.40401 44.996 5.40401C40.529 5.40401 35.122 -1.18199 31.091 0.18801C26.914 1.60801 26.246 10.313 22.769 12.962C19.256 15.637 11.149 13.63 8.594 17.308C6.062 20.948 10.372 28.388 9.016 32.76C7.707 36.98 0 40.324 0 45C0 49.676 7.707 53.021 9.016 57.241C10.372 61.615 6.062 69.053 8.593 72.693C11.149 76.369 19.256 74.363 22.768 77.039C26.246 79.688 26.913 88.394 31.091 89.813C35.122 91.183 40.532 84.596 45 84.596C49.468 84.596 54.878 91.183 58.908 89.813C63.086 88.393 63.753 79.688 67.231 77.039C70.744 74.363 78.849 76.369 81.406 72.693C83.937 69.052 79.627 61.614 80.984 57.241C82.293 53.021 90 49.677 90 45C90 40.323 82.293 36.98 80.984 32.76ZM23.852 33.375C23.852 27.851 27.635 23.928 32.982 23.928C38.347 23.928 42.082 27.851 42.082 33.375C42.082 38.942 38.294 42.865 32.982 42.865C27.635 42.864 23.852 38.941 23.852 33.375ZM35.829 65.502H29.929L53.529 24.502H59.429L35.829 65.502ZM57.052 66.072C51.752 66.072 47.96 62.192 47.96 56.666C47.96 51.14 51.748 47.266 57.052 47.266C62.356 47.266 66.152 51.146 66.152 56.666C66.152 62.186 62.36 66.071 57.052 66.071V66.072Z"
            fill={modalInfos.color}
          />
        </svg>
      </div>
      <h2 className="font-bold text-3xl">
        {modalInfos.content[0] && modalInfos.content[0][1]}
      </h2>
      <h3 className="text-xl font-medium">
        {modalInfos.content[1] && modalInfos.content[1][1]}
      </h3>
      <form
        className={`flex flex-col w-full  ${modalSize.form}`}
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="email"
          id="email"
          placeholder={modalInfos.content[2] && modalInfos.content[2][1]}
          className="text-sm border border-gray-400 rounded-lg py-3 pl-2 w-full"
        />
        <div className="flex gap-4">
          <button
            className={`text-sm font-semibold border border-gray-400  rounded-lg py-3 w-full text-black hover:bg-[${modalInfos.color}]`}
          >
            {/* onClick={()=>setIsModalVisible('hidden')} */}
            {modalInfos.content[3] && modalInfos.content[3][1]}
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
            {modalInfos.content[4] && modalInfos.content[4][1]}
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

export default Modal6;
