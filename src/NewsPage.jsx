import React from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import mainBanner from "./assets/banners/mainBanner.png";

const NewsPage = () => {
  const location = useLocation();

  // Placeholder data for news articles
  const newsArticles = [
    { id: 1, title: "Article 1", excerpt: "Lorem ipsum dolor sit amet..." },
    { id: 2, title: "Article 2", excerpt: "Lorem ipsum dolor sit amet..." },
    // Add more articles...
  ];

  return (
    <div>
      <Breadcrumbs location={location} />
      <div className="banner-image">
        <img src={mainBanner} alt="Banner" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {newsArticles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold mb-2">{article.title}</h2>
            <p className="text-gray-600 mb-4">{article.excerpt}</p>
            <Link
              to={`/news/${article.id}`}
              className="text-blue-500 hover:underline"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
