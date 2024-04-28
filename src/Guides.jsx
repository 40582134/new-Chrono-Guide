import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import mainBanner from "./assets/banners/mainBanner.png";
import guideVid1 from "./assets/guideVids/guide-Vid-1.mp4";
import guideVid2 from "./assets/guideVids/guide-Vid-2.mp4";
import guideVid3 from "./assets/guideVids/guide-Vid-3.mp4";
import guideVid4 from "./assets/guideVids/guide-Vid-4.mp4";
import guideVid5 from "./assets/guideVids/guide-Vid-5.mp4";
import guideVid6 from "./assets/guideVids/guide-Vid-6.mp4";
import guideVid7 from "./assets/guideVids/guide-Vid-7.mp4";
import guideVid8a from "./assets/guideVids/guide-Vid-8a.mp4";
import guideVid8b from "./assets/guideVids/guide-Vid-8b.mp4";

const Guides = ({ isSidebarOpen }) => {
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
        How To Use Chrono Guide
      </h2>
      <ol>
        <li>
          <p className="mb-4" id="description-1">
            You can access the guide resources in the encyclopedia. In here, you
            will find the game's Characters, Skills, Equipment, Relics, and
            Consumables.
          </p>
          <video className="guide-vid" src={guideVid1} controls></video>
        </li>
        <li>
          <p className="mb-4" id="description-2">
            Going into any of these will show you a similar layout. There will
            be a search bar, content grid, and in the characters/skills pages, a
            content section that pops up displaying the content of any clicked
            grid entry.
          </p>
          <video className="guide-vid" src={guideVid2} controls></video>
        </li>
        <li>
          <p className="mb-4" id="description-3">
            In the other pages, the content is displayed on a modal instead when
            clicked on.
          </p>
          <video className="guide-vid" src={guideVid3} controls></video>
        </li>
        <li>
          <p className="mb-4" id="description-4">
            Every page's grid entries feature hoverable terms. These are orange
            terms that elaborate upon concepts that users may seek to understand
            whenever they are hovered over with a mouse, or clicked on with a
            touch system in the case of phones and tablets.
          </p>
          <video className="guide-vid" src={guideVid4} controls></video>
        </li>
        <li>
          <p className="mb-4" id="description-5">
            The Skills and Character grids are searchable via 2 key means.
            Firstly, there are synergies, which are little buttons that function
            as filters. Once clicked, every grid entry that does not feature
            that synergy is filtered out. Multiple synergies can be active at
            one time and their active status is denoted by their purple
            coloration. To cancel active synergies, simply click on them again
            anywhere on the page you see them, which will either be in the
            skill/character description sections, the dynamic active synergy
            section beneath the search bar, and within the grid entry cards
            themselves.
          </p>
          <video className="guide-vid" src={guideVid5} controls></video>
        </li>
        <li>
          <p className="mb-4" id="description-6">
            The second filtration search method is present in all grid pages,
            and comes in the form of a search bar. This search bar dynamically
            filters the grid based on whether the written content matches the
            grid entry names and corresponding characters in the case of skills.
            This search bar can also be used to search and activate synergies
            via search and click.
          </p>
          <video className="guide-vid" src={guideVid6} controls></video>
        </li>
        <li>
          <p className="mb-4" id="description-7">
            Don't forget that the skills page has many more entries than meets
            the eye. Please navigate through pages using the arrows in the
            bottom right of the page, or type in a number into the white box if
            you prefer.
          </p>
          <video className="guide-vid" src={guideVid7} controls></video>
        </li>
        <li>
          <p className="mb-4" id="description-8">
            Even though this website was made with desktop users primarily in
            mind, if you feel like navigating the website in a more mobile form
            factor, Chrono Guide still has you covered.
          </p>
          <video className="guide-vid" src={guideVid8a} controls></video>
          <video className="guide-vid" src={guideVid8b} controls></video>
        </li>
        <li>
          <p className="mb-4" id="description-9">
            Please enjoy your stay!
          </p>
        </li>
      </ol>
    </main>
  );
};

export default Guides;
