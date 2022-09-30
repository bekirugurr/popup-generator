import Image from "next/image";
import React, { useEffect, useState } from "react";
import type { PopUpState } from "../../slices/popUpSlice";
import { setStateTogether } from "../../slices/popUpSlice";
import type { RootState } from "../../store";
import starShieldBadge from "../../assets/starShieldBadge.svg";
import { useSelector, useDispatch } from "react-redux";
import positionFunction from "../../utils/positionFunction";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface SizeType {
  outerDiv: string;
  badgeDiv: string;
  badge: string;
  form: string;
}

const Modal1 = () => {
  const modalInfos = useSelector((state: RootState) => state.popUp);
  const [modalSize, setModalSize] = useState<SizeType>({
    outerDiv: "h-[28rem] w-[30rem]",
    badgeDiv: 'h-24 w-24',
    badge:'h-[4rem] w-[3rem]',
    form: "gap-3",
  });
  const dispatch = useDispatch();
  const initialData: PopUpState = {
    numberOfSelectedTemplate: 1,
    size: "medium",
    position: { x: "center", y: "center" },
    color: "#7D4AEA",
    content: [
      ["Top title", "Security Code"],
      ["Explaination", "Join new adventure"],
      ["Placeholder for code", "Code"],
      ["Left button", "Cancel"],
      ["Right button", "Continue"],
    ],
    logo: starShieldBadge,
  };

  useEffect(() => {
    dispatch(setStateTogether(initialData));
  }, []);

  useEffect(() => {
    if (modalInfos.size == "large") {
      setModalSize({
        outerDiv: "h-[35rem] w-[37rem]  gap-10",
        badgeDiv: 'h-32 w-32',
        badge:'h-[5rem] w-[4rem]',
        form: "gap-10",
      });
    } else if (modalInfos.size == "small") {
      setModalSize({
        outerDiv: "h-[22rem] w-[24rem] gap-3",
        badgeDiv: 'h-24 w-24',
        badge:'h-[4rem] w-[3rem]',
        form: "gap-3",
      });
    } else {
      setModalSize({
        outerDiv: "h-[28rem] w-[30rem] gap-6 ",
        badgeDiv: 'h-24 w-24',
        badge:'h-[4rem] w-[3rem]',
        form: "gap-6",
      });
    }
  }, [modalInfos]);

  //! let eklenecek1= 'absolute' + positionFunction(modalInfos.position) //giderken en dıştaki divin className i içine eklenecek

  return (
    <div
      className={`${modalSize.outerDiv} font-secondary bg-white z-50 rounded-3xl shadow-lg shadow-gray-200 border border-gray-300  overflow-hidden flex flex-col justify-center items-center px-16`}
    >
      <div
        className={`${modalSize.badgeDiv} grid place-items-center rounded-full bg-[${modalInfos.color}]`}
      >
        <img src={modalInfos.logo} alt="badge" className={`${modalSize.badge}`} />
      </div>
      <h2 className="font-bold text-3xl">{modalInfos.content[0][1]}</h2>
      <h3 className="text-xl font-medium">{modalInfos.content[1][1]}</h3>
      <form className={`flex flex-col w-full  ${modalSize.form}`}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder={modalInfos.content[2][1]}
          className="text-sm border border-gray-400 rounded-lg py-3 pl-2 w-full"
        />
        <div className="flex gap-4">
          <button
            className={`text-sm font-semibold border border-gray-400  rounded-lg py-3 w-full text-black hover:bg-[${modalInfos.color}]`}
          >
            {modalInfos.content[3][1]}
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
            {modalInfos.content[4][1]}
          </button>
        </div>
      </form>

      <button className="absolute top-3 right-3 rounded-full">
        <IoIosCloseCircleOutline className="text-gray-600 text-4xl" />
      </button>
    </div>
  );
};

export default Modal1;
