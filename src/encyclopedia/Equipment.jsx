import React, { useState } from "react";
import Breadcrumbs from "../Breadcrumbs";
import mainBanner from "../assets/banners/mainBanner.png";
import ReactModal from "react-modal";
import EquipmentEntry from "./gridEntries/EquipmentEntry";
import EquipmentModal from "./gridEntries/EquipmentModal";
import equipmentData from "./gridEntries/EquipmentData";

const EquipmentPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  // Filter equipment based on search term
  const filteredEquipment = equipmentData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="equipment">
      <Breadcrumbs location={location} />
      <div className="banner-image">
        <img src={mainBanner} alt="Banner" />
      </div>
      <h2 className="equipment-title">Equipment</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search equipment..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="equipment-grid">
        {filteredEquipment.map((item) => (
          <EquipmentEntry
            key={item.id}
            equipment={item}
            handleEquipmentClick={openModal}
          />
        ))}
      </div>
      <ReactModal
        isOpen={selectedItem !== null}
        onRequestClose={closeModal}
        contentLabel="Equipment Details"
        className="equipment-modal"
        overlayClassName="equipment-modal-overlay"
      >
        {selectedItem && (
          <EquipmentModal selectedItem={selectedItem} closeModal={closeModal} />
        )}
      </ReactModal>
    </div>
  );
};

export default EquipmentPage;
