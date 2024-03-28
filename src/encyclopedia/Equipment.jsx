import React, { useState } from "react";
import Breadcrumbs from "../Breadcrumbs";
import mainBanner from "../assets/banners/mainBanner.png";
import ReactModal from "react-modal";

const Equipment = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  // Placeholder data for equipment
  const equipment = [
    {
      id: 1,
      name: "Sword of Valor",
      image: "/path/to/sword.jpg",
      effect: "Increases attack speed by 10%",
      description: "A legendary sword wielded by heroes.",
    },
    {
      id: 2,
      name: "Helmet of Wisdom",
      image: "/path/to/helmet.jpg",
      effect: "Increases magic resistance by 25%",
      description: "A enchanted helmet that enhances the wearer's wisdom.",
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
    // Add more equipment...
  ];

  // Filter equipment based on search term
  const filteredEquipment = equipment.filter((item) =>
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
          <div
            key={item.id}
            className="equipment-item"
            onClick={() => openModal(item)}
          >
            <div className="equipment-image">
              <img src={item.image} alt={item.name} />
            </div>
          </div>
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
          <div className="equipment-modal-content">
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

export default Equipment;
