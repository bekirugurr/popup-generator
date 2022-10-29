import React from "react";
interface Props {
  isSwitchOn: boolean;
  setIsSwitchOn: React.Dispatch<React.SetStateAction<boolean>>;
}

const RadioButton: React.FC<Props> = ({ isSwitchOn, setIsSwitchOn }) => {
  return (
    <button
      className={`w-10 h-5 px-px rounded-full flex justify-between items-center border ${isSwitchOn ? "bg-prime-violet border-prime-violet" : "bg-black border-black"}`}
      onClick={() => setIsSwitchOn(!isSwitchOn)}
    >
        <div className={`h-4 w-4 rounded-full ${isSwitchOn ? 'bg-prime-violet' : 'bg-gray-100'}`}></div>
        <div className={`h-4 w-4 rounded-full ${isSwitchOn ? 'bg-gray-100':'bg-black' }`}></div>
    </button>
  );
};

export default RadioButton;
