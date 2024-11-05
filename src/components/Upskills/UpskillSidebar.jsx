import { Clock } from "lucide-react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { twMerge } from "tailwind-merge"
import Chapter1 from "./Chapter1"
import Chapter2 from "./Chapter2"
import Chapter3 from "./Chapter3"
import Chapter4 from "./Chapter4"
import Chapter5 from "./Chapter5"

import ChapterPage from "./ChapterPage"


const SideBarItems = [
 
  { 
      description : "Chapter 1",
      url : '/upskills/chapter1',  
  },
  { 
      description : "Chapter 2",
      url : '/upskills/chapter2',  
  },
  { 
      description : "Chapter 3",
      url : '/upskills/chapter3',  
  },
  { 
      description : "Chapter 4",
      url : '/upskills/chapter4',  
  },
  { 
      description : "Chapter 5",
      url : '/upskills/chapter5',  
  },

]


const Chapterss = [
  {
    pathname : '/upskills',
    component : <ChapterPage/>
  },
  {
    pathname : '/upskills/chapter1' ,
    component  : <Chapter1/>
  },
  {
    pathname : '/upskills/chapter2',
    component : <Chapter2 />
  },
  {
    pathname : '/upskills/chapter3',
    component : <Chapter3 />
  },
  {
    pathname : '/upskills/chapter4',
    component : <Chapter4 />
  },
  {
    pathname : '/upskills/chapter5',
    component : <Chapter5/>
  }
]

const UpskillSidebar = () => {
  return (
    <div className="flex pt-10 gap-4 flex-row">
       <div className="flex flex-col items-start gap-4 border-t-1 border-x-1 border-gray-200 px-2 py-2 rounded-md bg-gradient-to-b from-[#F2F7FF] to-[#FFFFFF]  min-w-fit">
        {SideBarItems.map((item,ind)=>{
            return(
             <Link key={ind}  to={item.url} className={twMerge('flex gap-6 flex-row min-w-fit py-2 px-8 items-start rounded-md', item.url === location.pathname  && 'bg-gradient-to-b from-[#F2F7FF] to-[#FFFFFF] tracking-tighter transition-all font-semibold')}>
                <h2>{item.description}</h2> 
                {item.url === location.pathname && <span className="flex items-center gap-3 font-light text-blue-800"><Clock size={15}/>03:00:00</span>}
             </Link>
            )
        })}
       </div>

       <main className="flex-1">
       {
         Chapterss.map((chapter) => {
           return(
             <>
                {location.pathname === `${chapter.pathname}` && chapter.component}
              </>
            )
          })
        }
       </main>

    
    </div>
  )
}

UpskillSidebar.propTypes = {
  children : PropTypes.node
}

export default UpskillSidebar
