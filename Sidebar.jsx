import React from "react";
import { Link } from "react-router-dom";
import * as icons from "./assets/icons/icons.js";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <nav
      className={`w-64 flex-shrink-0 overflow-y-auto ${
        isSidebarOpen ? "open" : ""
      }`}
      id="sidebar"
    >
      <ul className={`py-4 ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <li>
          <Link to="/" className="py-2 px-4 flex items-center" id="nav-home">
            <div className="flex items-center">
              <img
                src={icons.homeIcon}
                alt="Home"
                className="w-4 h-4 mr-2 sidebar-svgs"
              />
              <span>Home</span>
            </div>
          </Link>
        </li>
        <li className="separator">
          <hr className="plain-horizontal-divider" />
          <span className="">Game Content</span>
          <hr className="border-gray-700 mx-4 mt-2" />
        </li>
        <li>
          <Link
            to="/guides"
            className="py-2 px-4 hover:bg-gray-800 flex items-center"
            id="subnav-guides"
          >
            <div className="flex items-center">
              <img
                src={icons.guideIcon}
                alt="Guides"
                className="w-4 h-4 mr-2 sidebar-svgs"
              />
              Site Guide
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/encyclopedia"
            className="py-2 px-4 hover:bg-gray-800 flex items-center"
            id="subnav-encyclopedia"
          >
            <div className="flex items-center">
              <img
                src={icons.encyclopediaIcon}
                alt="Encyclopedia"
                className="w-4 h-4 mr-2 sidebar-svgs"
              />
              Encyclopedia
            </div>
          </Link>
        </li>
      </ul>
      <ul className="py-4">
        <li className="separator">
          <hr className="border-gray-700 mx-4 mb-2" />
          <span className="px-4 text-gray-500">Extra Resources</span>
          <hr className="border-gray-700 mx-4 mt-2" />
        </li>
        <li>
          <a
            href="https://store.steampowered.com/app/1188930/Chrono_Ark/?l=english&curator_clanid=9730205"
            target="_blank"
            className="py-2 px-4 hover:bg-gray-800 flex items-center"
            id="nav-steam"
          >
            <div className="flex items-center">
              <img
                src={icons.steamIcon}
                alt="Steam Page"
                className="w-4 h-4 mr-2 sidebar-svgs"
              />
              Steam Page
            </div>
          </a>
        </li>
        <li>
          <a
            href="https://discord.gg/dhDWB4Xh"
            target="_blank"
            className="py-2 px-4 hover:bg-gray-800 flex items-center"
            id="nav-discord"
          >
            <div className="flex items-center">
              <img
                src={icons.discordIcon}
                alt="Fan Discord"
                className="w-4 h-4 mr-2 sidebar-svgs"
              />
              Fan Discord
            </div>
          </a>
        </li>
      </ul>
      <hr className="vertical-divider" />
    </nav>
  );
};

export default Sidebar;
