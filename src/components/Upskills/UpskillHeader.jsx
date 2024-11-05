import { Calendar } from 'lucide-react';
import { BriefcaseBusiness } from 'lucide-react';

import { CircleAlert } from 'lucide-react';



const UpskillHeader = () => {
  return (
    <div className="flex w-full items-center justify-between">
          <div className='flex items-center gap-4 border-t-1 border-x-1 border-gray-200 px-4 py-2 rounded-md bg-gradient-to-b from-[#F2F7FF] to-[#FFFFFF]'> 
            <span className='flex gap-3 items-center justify-between'>
                <Calendar size={20}/>
                <p className='tracking-tighter'>Mentor Sessions</p>
            </span>  
            <span className='flex gap-3 items-center justify-between border-2 border-b-20 border-gray-200 px-2 py-1 rounded-md border-b-[#BCCBE2]'>
                <BriefcaseBusiness size={20}/>
                <p className='font-semibold tracking-tighter'>Learning Material</p>  
            </span>
          </div>    
          <div className='flex items-center justify-between gap-4 border-2 border-[#BCCBE2]/30 px-2 py-1 rounded-md'>
             <CircleAlert/>
             <p className='font-semibold tracking-tighter'>How it Works</p>
          </div>
    </div>
  )
}

export default UpskillHeader
