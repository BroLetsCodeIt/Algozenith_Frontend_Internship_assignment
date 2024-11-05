import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import Learn from './pages/Learn.jsx'
import Forums from './pages/Forums.jsx'
import Upskills from './pages/Upskills.jsx'
import Contest from './pages/Contest.jsx'
import LeaderBoard from './pages/LeaderBoard.jsx'
import Chapter1 from './components/Upskills/Chapter1.jsx'
import Chapter2 from './components/Upskills/Chapter2.jsx'
import Chapter3 from './components/Upskills/Chapter3.jsx'
import Chapter4 from './components/Upskills/Chapter4.jsx'
import Chapter5 from './components/Upskills/Chapter5.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [
      {
        path : "/",
        element : <Dashboard/>
      },
      {
        path : 'learn',
        element : <Learn/>
      },
      {
        path : "forums",
        element : <Forums/>
      },
      {
        path : "upskills",
        element : <Upskills/>,
        children : [
          {
            path : "chapter1",
            element : <Chapter1/>
          },
          {
            path : "chapter2",
            element : <Chapter2/>
          },
          {
            path : "chapter3",
            element : <Chapter3/>
          },
          {
            path : "chapter4",
            element : <Chapter4/>
          },
          {
            path : "chapter5",
            element : <Chapter5/>
          }
        ]
      },
      {
        path : "contest",
        element : <Contest/>
      },
      {
        path : 'leaderboard',
        element : <LeaderBoard/>
      }
    ]
  },
  {

  }

])



createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
