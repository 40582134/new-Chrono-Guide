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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        enim ullam natus accusantium ut expedita molestias earum impedit in
        dicta et nobis neque odio voluptates adipisci aliquid reprehenderit
        dolorem maxime esse ex corporis est ad officia temporibus quis vero.
        Iusto alias sit reprehenderit ut consectetur.
      </p>

      <h2 className="text-2xl font-bold mb-4" id="main-heading-2">
        How To Use Chrono Guide
      </h2>
      <p className="mb-4" id="description-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        assumenda atque eos ad suscipit voluptas voluptatum ut nesciunt est
        maxime dolorem in dicta accusamus enim vero. Ipsam natus earum impedit
        quaerat rerum eius at reprehenderit ut consectetur unde quos neque
        eligendi fugit aliquam accusantium repellat vero. Aliquid minus at
        officia et corporis autem.
      </p>
    </main>
  );
};

export default Home;
