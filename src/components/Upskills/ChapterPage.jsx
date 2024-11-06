/* eslint-disable no-unused-vars */
import { Clock } from "lucide-react";
import { ChartNoAxesColumnIncreasing } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { CirclePlay } from "lucide-react";
import Accordion from "../Accordion/Accordion";
import AccordionItem from "../Accordion/AccordionItem";


const AccordionProps = [
   {
     active: false,
     part: 1,
     description: "Introduction to Competitive Programming",
     hours: "03:00:00",
     level: "Easy",
     videos: [
       {
         videoNo: 1,
         videoDescription: "asdf",
         videohours: "10:00",
       },
       {
         videoNo: 2,
         videoDescription: "asdf",
         videohours: "10:00",
       },
     ],
 
   },
   {
     active: true,
     part: 1,
     description: "Arrays & Strings",
     hours: "03:00:00",
     level: "Medium",
     videos: [
       {
         videoNo: 1,
         videoDescription: "asdf",
         videohours: "10:00",
       },
       {
         videoNo: 2,
         videoDescription: "asdf",
         videohours: "10:00",
       },
       {
         videoNo: 2,
         videoDescription: "asdf",
         videohours: "10:00",
       },
     ],
 
   },
  
 ];


const ChapterPage = () => {
  const [percentCompleted, setPercentCompleted] = useState(78);
  return (
   <>
   {AccordionProps.map((value, index) => {
     return (
       <Accordion
         active={value.active}
         part={value.part}
         description={value.description}
         hours={value.hours}
         level={value.level}
         videos={value.videos.length}
         key={index}
       >
         {value.videos.map((value, index) => {
           return (
             <AccordionItem
               key={index}
               videoNo={value.videoNo}
               videoDescription={value.videoDescription}
               videohours={value.videohours}
             />
           );
         })}
       </Accordion>
     );
   })}
 </>
  );
};

export default ChapterPage;
