import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import mainBanner from "./assets/banners/mainBanner.png";

const NewsArticlePage = () => {
  const { id } = useParams();
  const location = useLocation();

  // Retrieve the article data based on the id from your local file system
  // You can use libraries like 'fs' or 'fs-extra' to read the article data from files

  const articleTitle = "Dynamically Generated Article Title"; // Replace with the actual article title
  const articleContent = "Dynamically Generated Article Content"; // Replace with the actual article content

  return (
    <div>
      <Breadcrumbs location={location} />
      <div className="banner-image">
        <img src={mainBanner} alt="Banner" />
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">{articleTitle}</h1>
        <p className="text-gray-600">{articleContent}</p>
      </div>
    </div>
  );
};

export default NewsArticlePage;
