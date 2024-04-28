import React, { useState } from "react";
import Breadcrumbs from "../Breadcrumbs";
import mainBanner from "../assets/banners/mainBanner.png";
import ReactModal from "react-modal";
import RelicsEntry from "./gridEntries/RelicsEntry";
import RelicsModal from "./gridEntries/RelicsModal";
import relicsData from "./gridEntries/RelicsData";

const RelicsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  // Filter relics based on search term
  const filteredRelics = relicsData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="relics">
      <Breadcrumbs location={location} />
      <div className="banner-image">
        <img src={mainBanner} alt="Banner" />
      </div>
      <h2 className="relics-title">Relics</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search relics..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="relics-grid">
        {filteredRelics.map((item) => (
          <RelicsEntry
            key={item.id}
            relic={item}
            handleRelicClick={openModal}
          />
        ))}
      </div>
      <ReactModal
        isOpen={selectedItem !== null}
        onRequestClose={closeModal}
        contentLabel="Relic Details"
        className="relic-modal"
        overlayClassName="relic-modal-overlay"
      >
        {selectedItem && (
          <RelicsModal selectedItem={selectedItem} closeModal={closeModal} />
        )}
      </ReactModal>
    </div>
  );
};

export default RelicsPage;
