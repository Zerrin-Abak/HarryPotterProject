import React from "react";
import axios from "axios";
import Character from "./Character";
import { useState, useEffect } from "react";

function Characters() {
  const [data, setData] = useState([]);

  const fetchCharacters = async () => {
    const response = await axios.get("http://localhost:4001/characters");
    setData(response.data);
  }
    
  useEffect(() => {
    fetchCharacters();
  },[]);
  
  return (
    <>
      <h1 className="characters-h1">Characters</h1>
      <div className="character-cards-div">
        {data.map((value, index) => {
          return <Character element={value} key={index} />;
        })}
      </div>
    </>
  );
}

export default Characters;
