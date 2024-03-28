import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import mainBanner from "./assets/banners/mainBanner.png";
import charactersIcon from "./assets/banners/charactersIcon.png";
import skillsIcon from "./assets/banners/skillsIcon.png";
import equipmentIcon from "./assets/banners/equipmentIcon.png";
import relicsIcon from "./assets/banners/relicsIcon.png";
import consumablesIcon from "./assets/banners/consumablesIcon.png";

const Encyclopedia = () => {
  return (
    <main>
      <div className="encyclopedia">
        <Breadcrumbs location={location} />
        <div className="banner-image">
          <img src={mainBanner} alt="Banner" />
        </div>
        <div className="encyclopedia">
          <h2 className="encyclopedia-title">Encyclopedia</h2>
          <div className="encyclopedia-sections">
            <div className="encyclopedia-row">
              <Link
                to="/encyclopedia/characters"
                className="encyclopedia-section"
              >
                <img
                  src={charactersIcon}
                  alt="Characters Icon"
                  className="section-icon"
                />
                <span>Characters</span>
              </Link>
              <Link to="/encyclopedia/skills" className="encyclopedia-section">
                <img
                  src={skillsIcon}
                  alt="Skills Icon"
                  className="section-icon"
                />
                <span>Skills</span>
              </Link>
              <Link
                to="/encyclopedia/equipment"
                className="encyclopedia-section"
              >
                <img
                  src={equipmentIcon}
                  alt="Equipment Icon"
                  className="section-icon"
                />
                <span>Equipment</span>
              </Link>
            </div>
            <div className="encyclopedia-row">
              <Link to="/encyclopedia/relics" className="encyclopedia-section">
                <img
                  src={relicsIcon}
                  alt="Relics Icon"
                  className="section-icon"
                />
                <span>Relics</span>
              </Link>
              <Link
                to="/encyclopedia/consumables"
                className="encyclopedia-section"
              >
                <img
                  src={consumablesIcon}
                  alt="Consumables Icon"
                  className="section-icon"
                />
                <span>Consumables</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Encyclopedia;
