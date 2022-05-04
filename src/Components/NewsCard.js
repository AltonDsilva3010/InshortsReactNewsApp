import React from "react";
import "./NewsCard.css";

let imagecard = "https://demofree.sirv.com/nope-not-here.jpg";

const NewsCard = ({ image, name, url, description }) => {
  try {
    if (image.thumbnail.contentUrl == undefined) {
      console.log(1);
    }
    imagecard = image.thumbnail.contentUrl;
  } catch (error) {
    console.log(error.message);
  }

  return (
    <div className="newsarticle-container">
      <h1 className="news-title">{name}</h1>
      <img src={imagecard} alt={name} className="news-image"></img>
      <p className="news-desc">{description}</p>
      <p className="news-url">
        <a href={url} target="_blank">
          Read More...
        </a>
      </p>
    </div>
  );
};

export default NewsCard;
