import React from "react";

const EquipmentEntry = ({ equipment, handleEquipmentClick }) => {
  return (
    <div
      key={equipment.id}
      className="equipment-item"
      onClick={() => handleEquipmentClick(equipment)}
    >
      <div className="equipment-image">
        <img src={equipment.image} alt={equipment.name} />
      </div>
    </div>
  );
};

export default EquipmentEntry;
