import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import mainBanner from "./assets/banners/mainBanner.png";

const Home = ({ isSidebarOpen }) => {
  return (
    <main
      className={`${isSidebarOpen ? "sidebar-open" : ""}`}
      id="main-content"
    >
      <Breadcrumbs location={location} />
      <div className="banner-image">
        <img src={mainBanner} alt="Banner" />
      </div>
      <h2 className="text-2xl font-bold mb-4" id="main-heading">
        What Chrono Guide Is For
      </h2>
      <p className="mb-4" id="description-1">
        Hey Visitor! This site is a little passion project aimed at synthesising
        all of Chrono Ark's content down into a sort of centralised database
        that you can navigate through in order to find any information you are
        looking for while jumping through the least amount of hoops. I'm
        starting with the Encyclopedia section, consisting of Characters,
        Skills, Consumables, and Relics. Later I'll expand the News and Guides
        section to be useful to you as well, but that's for later, for now, have
        fun playing around with the Encyclopedia.{" "}
      </p>

      <h2 className="text-2xl font-bold mb-4" id="main-heading-2">
        How To Use Chrono Guide
      </h2>
      <p className="mb-4" id="description-2">
        Currently, You can use this resource to find detailed descriptions of
        what anything in the encyclopedia does, and use the synergy tagging
        system to find all similar entries within their respective pages. The
        search bar lets you filter synergy tags too, alongside searching for
        entries by name or associated characters in the case of the skills page
        (eg: searching "Hein" will display all of Hein's skills). If you get
        lost just use the side navigation or the breadcrumbs at the top of every
        page to find your way around the website. Please enjoy your stay!
      </p>
    </main>
  );
};

export default Home;
