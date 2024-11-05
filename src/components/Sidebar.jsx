import { LayoutDashboard as Dashboardimg } from "lucide-react";
import { Lightbulb as Learnimg } from "lucide-react";
import { UsersRound as Forumsimg } from "lucide-react";
import { Clipboard as Upskillsimg } from "lucide-react";
import { ChartNoAxesColumnIncreasing as Contestimg } from "lucide-react";
import { Star as Leaderboardimg } from "lucide-react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";


const SideBarItems = [
  {
    img: <Dashboardimg />,
    description: "Dashboard",
    url: "/",
  },
  {
    img: <Learnimg />,
    description: "Learn",
    url: "/learn",
  },
  {
    img: <Forumsimg />,
    description: "Forums",
    url: "/forums",
  },
  {
    img: <Upskillsimg />,
    description: "Upskills",
    url: "/upskills",
  },
  {
    img: <Contestimg />,
    description: "Contest",
    url: "/contest",
  },
  {
    img: <Leaderboardimg />,
    description: "Leaderboard",
    url: "/leaderboard",
  },
];

const Sidebar = ({ children, visible }) => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className=" min-w-48 h-screen  transition-all flex ]">
      <div className="flex flex-col gap-6  px-8 py-5 bg-gradient-to-b from-[#FFFFFF] to-[#D6F4FF">
        {SideBarItems.map((item, ind) => {
          return (
            <motion.span
              key={ind}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: ind * 0.1, duration: 0.3 }}
             
            >
              <Link
                key={ind}
                to={item.url}
                className={twMerge(
                  "flex gap-3 flex-row min-w-fit py-2 px-2 rounded-md",
                  item.url === location.pathname && "bg-[#D6F4FF]"
                )}
              >
                <span>{item.img}</span>
                {visible ? <h2>{item.description}</h2> : ""}
              </Link>
            </motion.span>
          );
        })}
      </div>
      <main className="flex-1">{children}</main>
    </div>
  );
};

Sidebar.propTypes = {
  children: PropTypes.node,
  visible: PropTypes.bool,
};

export default Sidebar;
