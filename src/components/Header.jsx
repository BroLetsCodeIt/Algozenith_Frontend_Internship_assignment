import { AlignJustify } from 'lucide-react';
import { Bell } from 'lucide-react';
import { CircleUser } from 'lucide-react';
// import { useState } from 'react';

import PropTypes from 'prop-types';

const Header = ({handleVisible}) => {
   
  // const [open , setOpen]  = useState(true); 
  console.log(open); 
  return (
    <div className="w-full px-10  py-5 flex items-center justify-between">
       <div className='flex gap-4'>
         {/* it will recive a function from props , on clicking we will invoke that function  */}
         <AlignJustify onClick={()=>{handleVisible()}} className='cursor-pointer'/>
         <h1>Algozenith</h1>
       </div>
       <div className="flex gap-4 items-center justify-center">
          <Bell/>
          <CircleUser/>
       </div>
    </div>
  )
}


Header.propTypes = {
   handleVisible : PropTypes.func
}

export default Header
