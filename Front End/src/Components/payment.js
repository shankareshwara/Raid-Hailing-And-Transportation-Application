import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import imgs from "../videos/payment.jpg"
export default function Payment() {
const { rideDetails } = useSelector((state) => state.master);
  const [phone, setPhone] = useState("");
  const [email, setemail] = useState("");
  const [prizeDetails, setPrizeDetails] = useState("");
  const navigate = useNavigate('');
  function handleclick() {
    if ( phone && email && prizeDetails) {
      // All required fields are filled, proceed with navigation
      if(prizeDetails != rideDetails.fair){
          alert("please pay " + rideDetails.fair);
      }
      else{
      navigate("/details");
      }
    } else {
      // Some required fields are empty, show an alert or handle the case as needed
      alert("Please fill in all the required fields.");
    }
  }
  return (
    <>
      <style>
        {`
        .flip-box1 {
          background-color: transparent;
          width: 700px;
          height: 200px;
          perspective: 1000px;
          margin-left: 29rem;
          margin-top: 10rem;
          height: 38rem;
        }

        .flip-box1-inner1 {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }

        .flip-box1:hover .flip-box1-inner1 {
          transform: rotateX(180deg);
        }

        .flip-box1-front1,
        .flip-box1-back1 {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }

        .flip-box1-front1 {
          background-color: #1d1c1c;
          color: rgb(247, 239, 242);
          font-family: 'Times New Roman', Times, serif;
        }

        .flip-box1-back1 {
          background-color: rgb(15, 15, 16);
          color: white;
          transform: rotateX(180deg);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 20px; /* Adjust this value to increase/decrease the gap */
        }

        .flip-box1-back1 input {
          width: 300px;
          padding: 8px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 4px;
          color: white;
          background-color: transparent;
          /* Add the following to make the placeholder visible */
          ::placeholder {
            color: rgba(255, 255, 255, 0.6);
          }
        }
      `}
      </style>
      
      <div className="flip-box1">
        <div className="flip-box1-inner1">
          <div className="flip-box1-front1">
            <h1 style={{ color: "pink" ,marginBottom:50}}>PAYMENT</h1>
            <div className="img2">
              
            </div>
          </div>
          <div className="flip-box1-back1">
            <input
              type="text"
              placeholder="phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              placeholder="emailid"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              type="text"
              placeholder="amount"
              value={prizeDetails}
              onChange={(e) => setPrizeDetails(e.target.value)}
            />
            <button onClick={handleclick} style={{width:100,height:50,marginLeft:20,marginTop:50}}>PAY</button>
          </div>
        </div>
      </div>
    </>
  );
}