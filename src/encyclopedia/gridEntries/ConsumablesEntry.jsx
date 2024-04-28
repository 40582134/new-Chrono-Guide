import React from "react";

const ConsumablesEntry = ({ consumable, handleConsumableClick }) => {
  return (
    <div
      key={consumable.id}
      className="consumable-item"
      onClick={() => handleConsumableClick(consumable)}
    >
      <div className="consumable-image">
        <img src={consumable.image} alt={consumable.name} />
      </div>
    </div>
  );
};

export default ConsumablesEntry;
