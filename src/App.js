import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header";
import AllNews from "./Components/AllNews";
import SearchBar from "./Components/SearchBar";

const App = () => {
  const [data, setData] = useState([]);

  const [userParams, setUserParams] = useState({
    q: "",
    safeSearch: "Off",
    textFormat: "Raw",
    freshness: "Day",
  });

  const options = {
    method: "GET",
    url: "https://bing-news-search1.p.rapidapi.com/news/search",
    params: userParams,
    headers: {
      "x-bingapis-sdk": "true",
      "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
      "x-rapidapi-key": "9d9f5230c8msh51ae62d2b6177b7p1d346ajsnf3d402759ebb",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.request(options).then(function (response) {
          let newsarray = response.data.value;
          setData(newsarray);
        });
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [userParams]);

  return (
    <div>
      <Header />
      <SearchBar setUserParams={setUserParams} />
      <AllNews news={data} />
    </div>
  );
};

export default App;
