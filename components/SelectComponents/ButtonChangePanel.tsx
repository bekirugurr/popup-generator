import React from 'react'

interface Props {
    numberOfPanel: number;
    setNumberOfPanel: React.Dispatch<React.SetStateAction<number>>;
  }

const ButtonChangePanel: React.FC<Props> = ({numberOfPanel, setNumberOfPanel}) => {
  return (
    <div className="h-12 bg-zinc-200 flex gap-1 rounded-xl p-1 w-[8.5rem]">
    <button
      className={`font-semibold rounded-lg flex items-center px-4 ${
        numberOfPanel === 1 ? "bg-white" : "bg-zinc-200 text-zinc-500"
      }`}
      onClick={() => setNumberOfPanel(1)}
    >
      1
    </button>
    <button
      className={`font-semibold rounded-lg flex items-center px-4 ${
        numberOfPanel === 2 ? "bg-white" : "bg-zinc-200 text-zinc-500"
      }`}
      onClick={() => setNumberOfPanel(2)}
    >
      2
    </button>
    <button
      className={`font-semibold rounded-lg flex items-center px-4 ${
        numberOfPanel === 3 ? "bg-white" : "bg-zinc-200 text-zinc-500"
      }`}
      onClick={() => setNumberOfPanel(3)}
    >
      3
    </button>
  </div>
  )
}

export default ButtonChangePanel