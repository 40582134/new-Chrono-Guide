import React, { useState } from "react";
import renderTermExplanationsGlobal from "./HoveredTerms";

const EquipmentModal = ({ selectedItem, closeModal }) => {
  const [hoveredTerm, setHoveredTerm] = useState(null);

  const handleMouseEnter = (term) => {
    setHoveredTerm(term);
  };

  const handleMouseLeave = () => {
    setHoveredTerm(null);
  };
  const renderDetails = () => {
    const validEntries = Object.entries(selectedItem).filter(
      ([key]) =>
        key !== "id" &&
        key !== "name" &&
        key !== "image" &&
        key !== "type" &&
        key !== "stats01" &&
        key !== "stats02" &&
        key !== "stats03" &&
        key !== "stats04" &&
        key !== "stats05" &&
        key !== "stats06" &&
        key !== "stats07" &&
        key !== "effect01" &&
        key !== "effect02" &&
        key !== "effect03" &&
        key !== "elaboration01" &&
        key !== "elaboration02" &&
        key !== "elaboration03"
    );

    if (validEntries.length === 0) {
      return null;
    }

    return (
      <p className="hoverable-skills-details">
        {validEntries.map(([key, value], index) => (
          <React.Fragment key={key}>
            <span
              className="tooltip"
              onMouseEnter={() => handleMouseEnter(key)}
              onMouseLeave={() => handleMouseLeave()}
            >
              {value}
              {hoveredTerm === key && (
                <span className="tooltiptext">
                  {renderTermExplanationsGlobal(key)}
                </span>
              )}
            </span>
            {index < validEntries.length - 1 && " || "}
          </React.Fragment>
        ))}
      </p>
    );
  };

  return (
    <div className="equipment-modal-content">
      <div className="equipment-modal-image">
        <img
          className="equipment-modal-image-p"
          src={selectedItem.image}
          alt={selectedItem.name}
        />
      </div>
      <h4>{selectedItem.name}</h4>
      <p className="targetting-modal">{selectedItem.type}</p>
      {renderDetails()}
      <p className="skill-stats">{selectedItem.stats01}</p>
      <p className="skill-stats">{selectedItem.stats02}</p>
      <p className="skill-stats">{selectedItem.stats03}</p>
      <p className="skill-stats">{selectedItem.stats04}</p>
      <p className="skill-stats">{selectedItem.stats05}</p>
      <p className="skill-stats">{selectedItem.stats06}</p>
      <p className="skill-stats">{selectedItem.stats07}</p>
      <br />
      {selectedItem.effect01 && (
        <p className="modal-effect-text">
          <span className="bullet01">•</span> {selectedItem.effect01}
        </p>
      )}
      {selectedItem.elaboration01 && (
        <p className="modal-elaboration-text">
          <span className="bullet02">-</span> {selectedItem.elaboration01}
        </p>
      )}
      {selectedItem.effect02 && (
        <p className="modal-effect-text">
          <span className="bullet01">•</span> {selectedItem.effect02}
        </p>
      )}
      {selectedItem.elaboration02 && (
        <p className="modal-elaboration-text">
          <span className="bullet02">-</span> {selectedItem.elaboration02}
        </p>
      )}
      {selectedItem.effect03 && (
        <p className="modal-effect-text">
          <span className="bullet01">•</span> {selectedItem.effect03}
        </p>
      )}
      {selectedItem.elaboration03 && (
        <p className="modal-elaboration-text">
          <span className="bullet02">-</span> {selectedItem.elaboration03}
        </p>
      )}
      <p>{selectedItem.description01}</p>
      <p>{selectedItem.description02}</p>
      <p>{selectedItem.description03}</p>
      <button onClick={closeModal}>Close</button>
    </div>
  );
};

export default EquipmentModal;
