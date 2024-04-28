import React from "react";

const RelicsEntry = ({ relic, handleRelicClick }) => {
  return (
    <div
      key={relic.id}
      className="relic-item"
      onClick={() => handleRelicClick(relic)}
    >
      <div className="relic-image">
        <img src={relic.image} alt={relic.name} />
      </div>
    </div>
  );
};

export default RelicsEntry;
