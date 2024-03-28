import React, { useState, useEffect } from "react";
import Breadcrumbs from "../Breadcrumbs";
import mainBanner from "../assets/banners/mainBanner.png";
import ReactModal from "react-modal";
import consumables from "./gridEntries/ConsumablesData";

ReactModal.setAppElement("#root");

const Consumables = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [consumableImages, setConsumableImages] = useState({});

  const filteredConsumables = consumables.filter((consumable) =>
    consumable.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const loadImages = async () => {
      const images = await Promise.all(
        consumables.map(async (consumable) => {
          try {
            const imageModule = await import(`${consumable.image}`);
            return { [consumable.id]: imageModule.default };
          } catch (error) {
            console.error(`Failed to load image: ${consumable.image}`, error);
            return { [consumable.id]: null };
          }
        })
      );
      setConsumableImages(Object.assign({}, ...images));
    };

    loadImages();
  }, []);

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
        {filteredConsumables.map((consumable) => (
          <div
            key={consumable.id}
            className="consumable-item"
            onClick={() => openModal(consumable)}
          >
            <div className="consumable-image">
              {consumableImages[consumable.id] && (
                <img
                  src={consumableImages[consumable.id]}
                  alt={consumable.name}
                />
              )}
            </div>
          </div>
        ))}
      </div>
      <ReactModal
        isOpen={selectedItem !== null}
        onRequestClose={closeModal}
        contentLabel="Consumable Details"
        className="consumable-modal"
        overlayClassName="consumable-modal-overlay"
        appElement={document.getElementById("root")}
      >
        {selectedItem && (
          <div className="consumable-modal-content">
            <h4>{selectedItem.name}</h4>
            <p>{selectedItem.effect}</p>
            <p>{selectedItem.description}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        )}
      </ReactModal>
    </div>
  );
};

export default Consumables;
