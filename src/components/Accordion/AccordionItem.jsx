
import { CirclePlay, Clock } from "lucide-react"

import PropTypes from "prop-types"

const AccordionItem = ({videoNo , videoDescription , videohours}) => {
  return (
    <div className="flex items-center justify-between px-4 py-4 border-b-2 border-gray-200/60 rounded-b-md transition-all">
            <div className="flex items-center justify-between gap-4">
                <CirclePlay size={20}/>
                <span>Video {videoNo} -</span>
                <span>{videoDescription}</span>
            </div>
            <div className="flex items-center justify-between gap-4">
               <Clock size={20}/>
               <span>{videohours}</span>
            </div>
        </div>
  )
}

AccordionItem.propTypes = {
  videoNo : PropTypes.number ,
  videoDescription : PropTypes.string ,
  videohours : PropTypes.number
}

export default AccordionItem
