import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ location }) => {
  const pathnames = location.pathname
    .split("/")
    .filter((x) => x && x !== "Chrono-Guide-Vercel-Patch-P"); // Filter out empty strings and the repository name

  const capitalizeWords = (str) => {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  };

  return (
    <nav className="breadcrumb">
      <ul className="breadcrumb-list">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
          {pathnames.length > 0 && (
            <span className="breadcrumb-arrow">&rarr;</span>
          )}
        </li>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <li className="breadcrumb-item" key={to}>
              {last ? (
                <span>{capitalizeWords(value)}</span>
              ) : (
                <>
                  <Link to={to}>{capitalizeWords(value)}</Link>
                  <span className="breadcrumb-arrow">&rarr;</span>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
