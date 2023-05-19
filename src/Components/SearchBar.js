import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ setUserParams }) => {
  const [newList, setNewList] = useState({
    q: "",
    safeSearch: "Off",
    textFormat: "Raw",
    freshness: "Day",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserParams(newList);
    console.log(newList);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-contents">
        {/* <label htmlFor="topic">Enter Topic</label> */}
        {/* <br /> */}
        <input
          id="topic"
          type="text"
          value={newList.q}
          className="input-field"
          placeholder="Search Here..."
          onChange={(e) => setNewList({ ...newList, q: e.target.value })}
        ></input>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
