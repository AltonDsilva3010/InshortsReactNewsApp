import React from "react";
import NewsCard from "./NewsCard";
import "./AllNews.css";

const AllNews = ({ news }) => {
  if (!news) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div className="news-container">
        {news.map((newsarticle) => {
          return <NewsCard {...newsarticle} />;
        })}
      </div>
    );
  }
};

export default AllNews;
