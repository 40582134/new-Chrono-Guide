import React from "react";

const TopNavigation = ({ toggleSidebar }) => {
  return (
    <header className="header" id="header">
      <div className="header-left">
        <button
          className="hamburger-button show-below-1601"
          onClick={toggleSidebar}
        >
          <svg
            className="hamburger-icon"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            id="hamburger-icon"
          >
            <path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z" />
          </svg>
        </button>
      </div>
      <div className="header-center">
        <h1 id="site-title">Chrono Guide</h1>
      </div>
      <div className="header-right"></div>
    </header>
  );
};

export default TopNavigation;
