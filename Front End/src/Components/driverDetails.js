import React from 'react'
import { useSelector } from 'react-redux'
import '../Styles/details.css'
export default function DriverDetails() {

    const {request} = useSelector((state) => state.master )
    const {requestDriver} = useSelector((state) => state.master )

  return (

    <div class = "aa">
        {request === "" ? (
        <div class = "bb">
          <h1 class = "cc">please wait for driver responce !!</h1>
        </div>
        ):(
        <div class = "bb">
          <h1>ride booked successfully ... please contact driver</h1>
        </div>
        )}
        <div class = "bb">
        <h1 class = "cc">Driver Name : {requestDriver.username}</h1>
        <h1 class = "cc">Driver rating : {requestDriver.rating}</h1>
        <h1 class = "cc">Driver phoneNumber: {requestDriver.phoneNumber}</h1>
        <h1 class = "cc">Driver location : {requestDriver.place}</h1> 
        </div>
    </div>
  )
}
