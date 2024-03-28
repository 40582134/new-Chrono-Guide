import React from "react";

const TopNavigation = ({ toggleSidebar }) => {
  return (
    <header className="flex justify-between items-center px-4 py-2" id="header">
      <div className="flex">
        <button
          className="block md:hidden focus:outline-none"
          onClick={toggleSidebar}
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            id="hamburger-icon"
          >
            <path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z" />
          </svg>
        </button>
      </div>
      <div className="flex justify-center flex-grow">
        <h1 id="site-title">Chrono Guide</h1>
      </div>
    </header>
  );
};

export default TopNavigation;
