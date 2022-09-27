import React, { useState } from "react";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  const [whichDivOpen, setWhichDivOpen] = useState<number>(100);
  let accordionContext: string[][];
  accordionContext = [
    [
      "How do I pay for the essentials or premium plan?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet soluta distinctio sint laboriosam libero! Excepturi hic reprehenderit eveniet amet error fugit maxime eum est tempore, debitis, ipsa quisquam officiis unde?",
    ],
    [
      "Can I cancel my essentials or premium plan subscription at my time?",
      "You can pay with a credit card or via net banking (if you’re in United States). We willrenew your subscription automatically at the end of every billing cycle. You can paywith a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.",
    ],
    [
      "How do I pay for the essentials or premium plan?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet soluta distinctio sint laboriosam libero! Excepturi hic reprehenderit eveniet amet error fugit maxime eum est tempore, debitis, ipsa quisquam officiis unde?",
    ],
    [
      "We need to add new users to our team, how will that be billed?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet soluta distinctio sint laboriosam libero! Excepturi hic reprehenderit eveniet amet error fugit maxime eum est tempore, debitis, ipsa quisquam officiis unde?",
    ],
    [
      "How do I pay for the essentials or premium plan?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet soluta distinctio sint laboriosam libero! Excepturi hic reprehenderit eveniet amet error fugit maxime eum est tempore, debitis, ipsa quisquam officiis unde?",
    ],
    [
      "Can I cancel my essentials or premium plan subscription at my time?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet soluta distinctio sint laboriosam libero! Excepturi hic reprehenderit eveniet amet error fugit maxime eum est tempore, debitis, ipsa quisquam officiis unde?",
    ],
  ];

  return (
    <section>
      <h2 className="text-4xl font-semibold text-center my-12">
        Frequently Asked Questions
      </h2>
      <ul className="border-t-2 border-gray-200" >
        {accordionContext.map((item, index) => (
          <AccordionItem key={index} index={index} item={item} whichDivOpen={whichDivOpen} setWhichDivOpen={setWhichDivOpen}/>
        ))}
      </ul>
    </section>
  );
};

export default Accordion;
