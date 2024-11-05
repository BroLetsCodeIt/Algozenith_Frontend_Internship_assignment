import { Outlet, useLocation } from "react-router-dom"

import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import { useState } from "react";



const App = () => {
  const location = useLocation();
  console.log(location.pathname);

  // not using useContext , because there is only state.
  // TODO : if there are more state. then make use of useContext.

  const [visible , setVisible ] = useState(true); 
  const handleVisible = () => {
       setVisible(!visible);
  }
 
  return (
    <>
      <div>
        <Header handleVisible={handleVisible}/>
        <Sidebar visible={visible}>
       
            <Outlet/>
          
        </Sidebar>
      </div>
    </>
  )
}

export default App
