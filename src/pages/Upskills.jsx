import {useLocation } from "react-router-dom"
import UpskillHeader from "../components/Upskills/UpskillHeader"
import UpskillSidebar from "../components/Upskills/UpskillSidebar"



const Upskills = () => {
  const location = useLocation();
  console.log(location.pathname)
  return (
    <div className="w-full h-screen px-10 pt-10">
      <div className="border-2 border-gray-400/20 h-full rounded-md px-4 py-4">
       <UpskillHeader/>
       

       <UpskillSidebar />
       
      </div> 
    </div>
  )
}

export default Upskills
