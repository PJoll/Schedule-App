import React, { useState } from "react";
import { useParams } from "react-router-dom";

const BookUser = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { user } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email,fullName,message);
    setFullName("");
    setMessage("");
  };
  return(
    <div className="bookContainer">
        <h2 className="bookTitle">Book {user}</h2>
        <form onSubmit={handleSubmit} className="booking__form">
            <label htmlFor="fullName">Full Name</label>
                 <input
                id="fullName"
                name="fullName" 
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                />
            <label htmlFor="email">Email Address</label>
                <input
                id="email"
                name="email"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            <label htmlFor="message">Any Important Things we should Know?</label>
                <textarea
                rows={5}
                name="message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                />
                <label htmlfor="session">
                    Select your preffered session
                </label>
                <button className="bookingBtn">Book</button>
        </form>

    </div>
  );
};


export default BookUser;