



import React from 'react';

import "./BookSection.css"

function BookSection({ data }) {
  console.log('Received data:', data);

  if (!Array.isArray(data)) {
    console.error('Data is not an array:', data);
    return <div>Error: Data is not an array</div>;
  }

  return (
    <div className='d-flex justify-content-around align-items-center flex-wrap my-3'>
      {data.map((item, index) => (
        <div key={index} className='card' style={{ width: "300px", height: "700px", backgroundColor: "orange", margin: "10px" }}>
          <div>
            <img
              style={{ width: "300px", height: "300px" }}
              className='fluid' src={item.image} alt="/" />
          </div>
          <div className=""> <h6 className="">Book: {item.bookname}</h6></div>
          <div className=""> <h6 className="">Description: {item.description}</h6></div>
          <div className=""> <h6 className="">Author: {item.author}</h6></div>
          <div className=""> <h6 className="">Price: Rs {item.price}</h6></div>
          <div className='btn'>
            <button className='update'>UPDATE</button>
            <button className='delete'>DELETE</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookSection;



