/* eslint-disable no-unused-vars */
import { ChevronUp, Clock } from "lucide-react";
import { ChartNoAxesColumnIncreasing } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

import { motion } from "framer-motion";

const Accordion = ({ children, active ,part , description, hours,level,videos}) => {
  const [percentCompleted, setPercentCompleted] = useState(78);
  const [visibile, setVisible] = useState(active);

  const handleDropDown = () => {
    setVisible(!visibile);
  };

  return (
    <div className="flex gap-2 flex-col">
      <div className="w-full border-t-4 border-x-4 rounded-md border-[#F2F7FF] px-4 pt-4 flex items-start justify-between ">
        {/* left */}
        <div className="flex items-start justify-between flex-col gap-4">
          <span className="font-light tracking-tighter">PART {part}</span>
          <h1 className="font-semibold tracking-tighter">
            {description}
          </h1>
        </div>
        {/* right */}
        <div className="flex flex-col items-end gap-4 ">
          <div className="flex gap-6 text-blue-900">
            <span className="flex items-center gap-3 text-blue-900 tracking-tighter">
              <Clock size={15} />
              {hours}
            </span>
            <span className="flex items-center gap-1 text-blue-900 tracking-tighter">
              <ChartNoAxesColumnIncreasing size={15} />
              {level}
            </span>
            <span>{videos}</span>
            <motion.span
              onClick={handleDropDown}
              className="transition ease-in-out delay-150 duration-500 cursor-pointer"
              animate={{
                ease: "linear",
                duration: 2,
              }}
            >
              {visibile ? <ChevronDown /> : <ChevronUp />}
            </motion.span>
          </div>
          <div>
            <span className="text-sm px-2 py-1 border-2 border-gray-300/20 rounded-md bg-[#F2F7FF] tracking-tighter">
              {`${percentCompleted}%`} Completed
            </span>
          </div>
        </div>
      </div>
      <div
        className={` bg-blue-300 h-1 rounded-bl-lg rounded-br-lg`}
        style={{ width: `${percentCompleted}%` }}
      />

      {/* dropdown  */}

      <motion.div
        className={twMerge("flex flex-col", visibile ? "visible" : "invisible")}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: visibile ? 1 : 0, height: visibile ? "auto" : 0 }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

Accordion.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  part : PropTypes.number,
  description : PropTypes.string , 
  hours : PropTypes.number , 
  level : PropTypes.string ,
  videos : PropTypes.array
};

export default Accordion;
