import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import Book from './Book';

function Books() {
    const [data, setData] = useState([]);
    const fetchBooks = async () => {
        const response = await axios.get("http://localhost:4000/books");
        setData(response.data);
    }

    useEffect(() => {
        fetchBooks();
    },[]);

  return (
    <>
    <h1 className="characters-h1">Books</h1>
    <div className="character-cards-div">
      {data.map((value, index) => {
        return <Book element={value} index={index} />;
      })}
    </div>
  </>
  )
}

export default Books