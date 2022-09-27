import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import accordionData from "../../assets/accordionData.json"

const Accordion = () => {
  const [whichDivOpen, setWhichDivOpen] = useState<number>(100);
  let data: string[][];
  data = accordionData.context

  return (
    <section>
      <h2 className="text-4xl font-semibold text-center my-12">
        Frequently Asked Questions
      </h2>
      <ul className="border-t-2 border-gray-200" >
        {data.map((item:string[], index:number) => (
          <AccordionItem key={index} index={index} item={item} whichDivOpen={whichDivOpen} setWhichDivOpen={setWhichDivOpen}/>
        ))}
      </ul>
    </section>
  );
};

export default Accordion;
