import React, { useEffect, useState } from "react";
import "./Book.css";
import axios from "axios";
import BookSection from "../Components/BookSection";

function Book() {
  const [Data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://https-github-com-singhkhushi22.onrender.com/api/v1/getBooks"
        );
        setData(response.data.books);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="header">
        <h4>Books Section</h4>
      </div>
      <div className="fetch">
        {isLoading ? <p>Loading...</p> : <BookSection data={Data} />}
      </div>
    </div>
  );
}

export default Book;
