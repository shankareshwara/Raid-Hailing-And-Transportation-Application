import React from 'react'
import '../Styles/rating.css'
import{ useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteRequest } from './Stores/MasterSlice';
import { useSelector } from 'react-redux';
import FeedService from '../Services/FeedService';
const Rating = () => {
  const { driverDetails } = useSelector((state) => state.master);
  const [rating, setRating] = useState(0);
  const [feed, setFeed] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const handleRatingChange = (value) => {
    setRating(value);
  };

  const ride = async() => {
      const data = {
        email : driverDetails.email,
        feedback:feed
      }
        const response = await FeedService.saveFeed(data);
        // console.log(response);
        alert("thanks for your feedback");
        dispatch(deleteRequest());
        navigate("/");

  }

  return (
    <div>
         <h1 class = "a" style = {{textAlign : "center"}}>Rate Your Taxi Ride</h1>
    
    <div className="rating">
      {[1, 2, 3, 4, 5].map((value) => (
        <label key={value}>
          <input
            type="radio"
            name="rating"
            value={value}
            onClick={() => handleRatingChange(value)}
            required
          />
          <FaStar
            className="star-icon"
            color={value <= rating ? 'gold' : 'gray'}
          />
        </label>
      ))}
    </div>
    <textarea
        className="feedback"
        placeholder="Provide your feedback (optional)"
        rows={4}
        onChange={(e) => {setFeed(e.target.value)}}
        style={{marginLeft:'500px'}}
      ></textarea>
      <div style={{marginTop:'60px',marginLeft:'700px'}}>
      <button  class = "c" onClick = {ride}>Submit Rating</button>
      </div>
    </div>
  );
};

export default Rating;
