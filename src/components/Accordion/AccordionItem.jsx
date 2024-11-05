import { CirclePlay, Clock } from "lucide-react"

const AccordionItem = () => {
  return (
    <div className="flex items-center justify-between px-4 py-4 border-b-2 border-gray-200/60 rounded-b-md transition-all">
            <div className="flex items-center justify-between gap-4">
                <CirclePlay size={20}/>
                <span>Video 1</span>
            </div>
            <div className="flex items-center justify-between gap-4">
               <Clock size={20}/>
               <span>10:00</span>
            </div>
        </div>
  )
}

export default AccordionItem
