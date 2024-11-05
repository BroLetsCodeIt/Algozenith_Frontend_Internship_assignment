/* eslint-disable no-unused-vars */
import { Clock } from "lucide-react";
import { ChartNoAxesColumnIncreasing } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { useState } from "react";
import { CirclePlay } from 'lucide-react';
import Accordion from "../Accordion/Accordion";
import AccordionItem from "../Accordion/AccordionItem";

const ChapterPage = () => {

    const [percentCompleted  , setPercentCompleted] = useState(78);
    return (
        <>
       <Accordion>
          <AccordionItem/>
          <AccordionItem/>
          <AccordionItem/>
          <AccordionItem/>
       </Accordion>
       <Accordion>
          <AccordionItem/>
          <AccordionItem/>
          <AccordionItem/>
          <AccordionItem/>
       </Accordion>
       <Accordion>
          <AccordionItem/>
          <AccordionItem/>
          <AccordionItem/>
          <AccordionItem/>
       </Accordion>
        </>
    );
};

export default ChapterPage;
