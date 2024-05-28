import React, { useState } from "react";
import "./AddBook.css";
import axios from "axios";

export default function AddBook() {
  const [Data, setData] = useState({
    bookname: "",
    description: "",
    author: "",
    img: "",
    price: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });

    console.log(Data);
  };

  const submit = async (e) => {
    try {
      e.preventDefault();

      const response = await axios.post(
        "https://https-github-com-singhkhushi22.onrender.com/api/v1/add",
        Data
      );

      alert(response.data.message);

      console.log("Post request successful");
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="bookName" className="form-label">
            Book Name
          </label>
          <input
            type="text"
            className="form-control"
            id="bookName"
            aria-describedby="bookNameHelp"
            name="bookname"
            onChange={change}
            value={Data.bookname}
          />
          <div id="bookNameHelp" className="form-text">
            {" "}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={change}
            value={Data.description}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="authorName" className="form-label">
            Author Name
          </label>
          <input
            type="text"
            className="form-control"
            id="authorName"
            aria-describedby="authorNameHelp"
            name="author"
            onChange={change}
            value={Data.author}
          />
          <div id="authorNameHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="url"
            className="form-control"
            id="image"
            aria-describedby="imageHelp"
            name="image"
            onChange={change}
            value={Data.image}
          />
          <div id="imageHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            aria-describedby="priceHelp"
            name="price"
            onChange={change}
            value={Data.price}
          />
          <div id="priceHelp" className="form-text"></div>
        </div>
        <button type="submit" className="btn btn-primary" onClick={submit}>
          Submit
        </button>
      </form>
    </div>
  );
}
