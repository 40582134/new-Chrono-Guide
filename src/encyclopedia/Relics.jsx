import React, { useState } from "react";
import Breadcrumbs from "../Breadcrumbs";
import mainBanner from "../assets/banners/mainBanner.png";
import ReactModal from "react-modal";

const Relics = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  // Placeholder data for relics
  const relics = [
    {
      id: 1,
      name: "Amulet of Power",
      image: "/path/to/amulet.jpg",
      effect: "Increases attack power by 20%",
      description: "A powerful amulet imbued with ancient magic.",
    },
    {
      id: 2,
      name: "Ring of Protection",
      image: "/path/to/ring.jpg",
      effect: "Reduces incoming damage by 15%",
      description: "A enchanted ring that provides enhanced protection.",
    },
    {
      id: 3,
      name: "Strength Elixir",
      image: "/path/to/strength-elixir.jpg",
      effect: "Increases strength by 10% for 30 seconds",
      description:
        "A powerful concoction that temporarily increases the user's strength by 10% for 30 seconds.",
    },
    {
      id: 4,
      name: "Strength Elixir",
      image: "/path/to/strength-elixir.jpg",
      effect: "Increases strength by 10% for 30 seconds",
      description:
        "A powerful concoction that temporarily increases the user's strength by 10% for 30 seconds.",
    },
    {
      id: 5,
      name: "Strength Elixir",
      image: "/path/to/strength-elixir.jpg",
      effect: "Increases strength by 10% for 30 seconds",
      description:
        "A powerful concoction that temporarily increases the user's strength by 10% for 30 seconds.",
    },
    // Add more relics...
  ];

  // Filter relics based on search term
  const filteredRelics = relics.filter((relic) =>
    relic.name.toLowerCase().includes(searchTerm.toLowerCase())
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
        {filteredRelics.map((relic) => (
          <div
            key={relic.id}
            className="relic-item"
            onClick={() => openModal(relic)}
          >
            <div className="relic-image">
              <img src={relic.image} alt={relic.name} />
            </div>
          </div>
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
          <div className="relic-modal-content">
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

export default Relics;
