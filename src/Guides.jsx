import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import mainBanner from "./assets/banners/mainBanner.png";

const Guides = () => {
  // Placeholder data for guides
  const guides = [
    {
      id: 1,
      title: "Chrono Arks Equipment Breakdown",
      image: "/path/to/equipment-guide.jpg",
    },
    { id: 2, title: "Guide 2", image: "/path/to/guide2.jpg" },
    { id: 3, title: "Guide 3", image: "/path/to/guide3.jpg" },
    // Add more guides...
  ];

  return (
    <main>
      <Breadcrumbs location={location} />
      <div className="banner-image">
        <img src={mainBanner} alt="Banner" />
      </div>
      <h2 className="guides-title">Guides</h2>
      <div className="guides-grid">
        {guides.map((guide) => (
          <div key={guide.id} className="guide-card">
            <div className="guide-image">
              <img src={guide.image} alt={guide.title} />
              <h3 className="guide-title">{guide.title}</h3>
            </div>
            <Link to={`/guides/${guide.id}`} className="guide-link">
              Read Guide
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Guides;
