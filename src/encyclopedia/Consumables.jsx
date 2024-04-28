import React, { useState } from "react";
import Breadcrumbs from "../Breadcrumbs";
import mainBanner from "../assets/banners/mainBanner.png";
import ReactModal from "react-modal";
import ConsumablesEntry from "./gridEntries/ConsumablesEntry";
import ConsumablesModal from "./gridEntries/ConsumablesModal";
import consumablesData from "./gridEntries/ConsumablesData";

const ConsumablesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  // Filter consumables based on search term
  const filteredConsumables = consumablesData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="consumables">
      <Breadcrumbs location={location} />
      <div className="banner-image">
        <img src={mainBanner} alt="Banner" />
      </div>
      <h2 className="consumables-title">Consumables</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search consumables..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="consumables-grid">
        {filteredConsumables.map((item) => (
          <ConsumablesEntry
            key={item.id}
            consumable={item}
            handleConsumableClick={openModal}
          />
        ))}
      </div>
      <ReactModal
        isOpen={selectedItem !== null}
        onRequestClose={closeModal}
        contentLabel="Consumable Details"
        className="consumable-modal"
        overlayClassName="consumable-modal-overlay"
      >
        {selectedItem && (
          <ConsumablesModal
            selectedItem={selectedItem}
            closeModal={closeModal}
          />
        )}
      </ReactModal>
    </div>
  );
};

export default ConsumablesPage;
