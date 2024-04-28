import React, { useState } from "react";
import renderTermExplanationsGlobal from "./HoveredTerms";

const ConsumablesModal = ({ selectedItem, closeModal }) => {
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
        key !== "targetting" &&
        key !== "duration" &&
        key !== "cost" &&
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
    <div className="consumable-modal-content">
      <div className="consumable-modal-image">
        <img
          className="consumable-modal-image-p"
          src={selectedItem.image}
          alt={selectedItem.name}
        />
      </div>
      <h4>{selectedItem.name}</h4>
      <p className="targetting-modal">{selectedItem.targetting}</p>
      {renderDetails()}
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
      <p>
        {selectedItem.castEffectLine01 &&
          selectedItem.castEffectLine01.split(" ").map((word, index) => (
            <React.Fragment key={index}>
              {selectedItem.hasOwnProperty(word) ? (
                <span
                  className="tooltip"
                  onMouseEnter={() => handleMouseEnter(word)}
                  onMouseLeave={handleMouseLeave}
                >
                  {word}
                  {hoveredTerm === word && (
                    <span className="tooltiptext">
                      {renderTermExplanationsGlobal(word)}
                    </span>
                  )}
                </span>
              ) : (
                word
              )}{" "}
            </React.Fragment>
          ))}
      </p>
      <p>
        {selectedItem.castEffectLine02 &&
          selectedItem.castEffectLine02.split(" ").map((word, index) => (
            <React.Fragment key={index}>
              {selectedItem.hasOwnProperty(word) ? (
                <span
                  className="tooltip"
                  onMouseEnter={() => handleMouseEnter(word)}
                  onMouseLeave={handleMouseLeave}
                >
                  {word}
                  {hoveredTerm === word && (
                    <span className="tooltiptext">
                      {renderTermExplanationsGlobal(word)}
                    </span>
                  )}
                </span>
              ) : (
                word
              )}{" "}
            </React.Fragment>
          ))}
      </p>
      <button onClick={closeModal}>Close</button>
    </div>
  );
};

export default ConsumablesModal;
