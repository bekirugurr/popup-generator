import React, { useState } from "react";
import templateImageArray from "../utils/templatesAsImages.js";
import ButtonChangePanel from "./SelectComponents/ButtonChangePanel";
import SelectItem from "./SelectComponents/SelectItem";
import { useSelector } from 'react-redux'
import type { RootState } from '../store'


const SelectPanel = () => {
  const [numberOfPanel, setNumberOfPanel] = useState<number>(1);
  const numberOfSelectedTemplate = useSelector((state:RootState)=>state.popUp.numberOfSelectedTemplate)

  const templatesArrayToShow =
    numberOfPanel === 1
      ? templateImageArray.slice(0, 12)
      : numberOfPanel === 2
      ? templateImageArray.slice(12, 24)
      : templateImageArray.slice(24);

  return (
    <section className="px-32  pt-12 pb-8">
      <h2 className="text-4xl mb-4"> Model Card Generator</h2>
      <p className="md:w-1/2  ">
        Measure your return on email marketing efforts easier and faster by
        using thebest online tools. Popupsmart is ready to help you build an
        efficient email list!
      </p>
      <div className="flex items-center py-8">
        <div className="rounded-full bg-zinc-300 w-8 h-8 flex items-center justify-center font-semibold">
          1
        </div>
        <h3 className="text-xl font-semibold pl-4">Choose your template</h3>
      </div>

      <div className="grid grid-cols-4 grid-flow-row gap-5 mb-6">
      {templatesArrayToShow.map((item, index)=>(
      <SelectItem  key={index} templateNum={item[1]} image={item[0]}/>
      ))}
      </div>
      <ButtonChangePanel
        numberOfPanel={numberOfPanel}
        setNumberOfPanel={setNumberOfPanel}
      />
    </section>
  );
};

export default SelectPanel;
