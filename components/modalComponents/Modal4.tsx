import React, { useEffect, useState } from "react";
import type { PopUpState } from "../../slices/popUpSlice";
import { setStateTogether } from "../../slices/popUpSlice";
import type { RootState } from "../../store";
import deleteIcon from "../../assets/deleteIcon.svg";
import { useSelector, useDispatch } from "react-redux";
import positionFunction from "../../utils/positionFunction";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface SizeType {
  outerDiv: string;
  badgeDiv: string;
  badge: string;
  form: string;
}

const Modal4 = () => {
  const modalInfos = useSelector((state: RootState) => state.popUp);
  const [modalSize, setModalSize] = useState<SizeType>({
    outerDiv: "h-[32rem] w-[30rem] gap-5 px-16 ",
    badgeDiv: 'h-24 w-24',
    badge:'h-[4rem] w-[3rem]',
    form: "gap-3",
  });
  const dispatch = useDispatch();
  const initialData: PopUpState = {
    numberOfSelectedTemplate: 4,
    size: "medium",
    position: { x: "center", y: "center" },
    color: "#7D4AEA",
    content: [
      ["Top title", "Delete your profile"],
      ["Explaination", "Your profile will be automatically deleted after 1 month."],
      ["Sub explaination", "You won’t be able to access to your profile after"],
      ["Bolder part of sub explaination", "30.08.2021."],
      ["Top button", "Delete my profile"],
      ["Down button", "Cancel"]
    ],
    logo: deleteIcon,
  };

  useEffect(() => {
    dispatch(setStateTogether(initialData));
  }, []);

  useEffect(() => {
    if (modalInfos.size == "large") {
      setModalSize({
        outerDiv: "h-[37rem] w-[34rem]  gap-6  px-16",
        badgeDiv: 'h-32 w-32',
        badge:'h-[5rem] w-[4rem]',
        form: "gap-10",
      });
    } else if (modalInfos.size == "small") {
      setModalSize({
        outerDiv: "h-[26rem] w-[26rem] gap-3 px-8",
        badgeDiv: 'h-24 w-24',
        badge:'h-[4rem] w-[3rem]',
        form: "gap-3",
      });
    } else {
      setModalSize({
        outerDiv: "h-[32rem] w-[30rem] gap-5  px-16",
        badgeDiv: 'h-24 w-24',
        badge:'h-[4rem] w-[3rem]',
        form: "gap-6",
      });
    }
  }, [modalInfos]);

  //! let eklenecek1= 'absolute' + positionFunction(modalInfos.position) //giderken en dıştaki divin className i içine eklenecek

  return (
    <div
      className={`${modalSize.outerDiv} font-secondary bg-white z-50 rounded-3xl shadow-lg shadow-gray-200 border border-gray-300  overflow-hidden flex flex-col justify-center items-center text-center`}
    >
      <div
        className={`${modalSize.badgeDiv} grid place-items-center rounded-full bg-[${modalInfos.color}]`}
      >
        <img src={modalInfos.logo} alt="badge" className={`${modalSize.badge}`} />
      </div>
      <h2 className="font-bold text-3xl">{modalInfos.content[0] && modalInfos.content[0][1]}</h2>
      <h3 className="text-xl font-normal">{modalInfos.content[1] && modalInfos.content[1][1]}</h3>
      <p className="text-gray-500">{modalInfos.content[2] && modalInfos.content[2][1]} <span className="text-black font-medium">{modalInfos.content[3] && modalInfos.content[3][1]}</span></p>
      <button
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

        <button
          className={`text-sm font-semibold border border-gray-400  rounded-lg py-3 w-full text-black hover:bg-[${modalInfos.color}]`}
        >
          {modalInfos.content[5] && modalInfos.content[5][1]}
        </button>


      <button className="absolute top-3 right-3 rounded-full">
        <IoIosCloseCircleOutline className="text-gray-600 text-4xl" />
      </button>
    </div>
  );
};

export default Modal4;
