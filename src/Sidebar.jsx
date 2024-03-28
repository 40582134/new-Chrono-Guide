import React from "react";
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
          <a href="/" className="py-2 px-4 flex items-center" id="nav-home">
            <div className="flex items-center">
              <img
                src={icons.homeIcon}
                alt="Home"
                className="w-4 h-4 mr-2 sidebar-svgs"
              />
              <span>Home</span>
            </div>
          </a>
        </li>
        <li className="separator">
          <hr className="plain-horizontal-divider" />
          <span className="">Game Content</span>
          <hr className="border-gray-700 mx-4 mt-2" />
        </li>
        <li>
          <a
            href="./news"
            className="py-2 px-4 flex items-center"
            id="subnav-news"
          >
            <div className="flex items-center">
              <img
                src={icons.newsIcon}
                alt="News"
                className="w-4 h-4 mr-2 sidebar-svgs"
              />
              News
            </div>
          </a>
        </li>
        <li>
          <a
            href="./guides"
            className="py-2 px-4 hover:bg-gray-800 flex items-center"
            id="subnav-guides"
          >
            <div className="flex items-center">
              <img
                src={icons.guideIcon}
                alt="Guides"
                className="w-4 h-4 mr-2 sidebar-svgs"
              />
              Guides
            </div>
          </a>
        </li>
        <li>
          <a
            href="./encyclopedia"
            className=" py-2 px-4 hover:bg-gray-800 flex items-center"
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
          </a>
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
            href="#"
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
            href="#"
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
