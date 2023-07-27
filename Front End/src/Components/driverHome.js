import React, { Component } from 'react'
import { useState } from 'react';
// import * as mdb from 'mdb-ui-kit'; // lib
// import { Input } from 'mdb-ui-kit';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../Styles/driverHome.css'
import { height } from '@mui/system'
import { useSelector } from 'react-redux';
import { useDispatch} from 'react-redux';
import { addRide, addrequest, deleteBookDriver, deleteRideDetails, deleterRequestDriver,deleteRequest } from './Stores/MasterSlice';
import UserAuthService from '../Services/UserAuthService';
// import PassMain from './main';
// import Footer from './footer';
// import Nav from './nav';
function DriverHome() {
    const [ready,setReady]=useState('');
    const [location,setLocation]=useState('');
    const { rideDetails } = useSelector((state) => state.master);
    const { bookedDriverDetails } = useSelector((state) => state.master);
    const { driverDetails } = useSelector((state) => state.master);
    const { requestDriver} = useSelector((state) => state.master);
    const { request} = useSelector((state) => state.master);
    const[bool , setBool] = useState();
    const[otp , setOtp] = useState();
    // const {driverDetails} = useSelector((state) => state.master );
    console.log("Driver",driverDetails.username)
    console.log(requestDriver.username)
    console.log(rideDetails.username)

    const dispatch = useDispatch();

    const addReady=async()=>{

        const val={
            email:driverDetails.email,
            available:ready,
            place:location
        }
        console.log(val);
        const response = await UserAuthService.updateDriver(val);
        console.log(response);
        
    }
    const accept = () =>{
        setBool("true");
        dispatch(addRide("True"));
        dispatch(addrequest("ride details"))
        
        
    }
    const decline = () =>{
        setBool("false");
        dispatch(addRide("false"));
        
    }
    const check = async() => {
        console.log(rideDetails.email)
        console.log(otp)
        if(otp === rideDetails.email){
            const ride = {
                passengeremail:rideDetails.email,
                driveremail:driverDetails.email,
                pickup:rideDetails.pickup,
                droplocation:rideDetails.destination,
                ridefair:rideDetails.fair
            }
            const up = {
                email:driverDetails.email,
                available:"NO",
                place:location
            }
            const update = {
                email:driverDetails.email,
                fair:rideDetails.fair
            }

            const  response1 = await UserAuthService.addRide(ride);
            const response2 = await UserAuthService.updateDriver(up);
            // const response3 = await UserAuthService.driverRide(update);
            // console.log(response2.data);
            
            dispatch(addrequest("end"))
            alert("Ride starts !!!")
            setBool("end");

        }
    }
    const end = () => {
        dispatch(deleteBookDriver());
        dispatch(deleteRideDetails());
        dispatch(deleterRequestDriver());
        dispatch(addrequest("rating"))
        console.log(requestDriver.username);
        dispatch(deleteRequest());
        alert("get ready for next ride")
    }
    console.log(bool);
    const getData=async(e)=>{
        setReady=e.target.value;
        console.log(ready);
    }
    return ( 
        <>
        {/* <PassMain/> */}
        <div className='check'>
        <h4>Captain Are You Ready 🚕!!!</h4>
        <div class="form-check fh">
            <input class="form-check-input"  type="radio" onClick={ () =>{setReady("YES")}} name="flexRadioDefault" value='YES' id="flexRadioDefault1"/>
            <label class="form-check-label" for="flexRadioDefault1">
                Yes
            </label>
        </div>
        <div class="form-check fh">
            <input class="form-check-input" type="radio" onClick={() => {setReady("NO")}} name="flexRadioDefault" value='NO' id="flexRadioDefault2" checked/>
            <label class="form-check-label" for="flexRadioDefault2">
                No
            </label>
        </div>
        <div className='jk'>
            <h5 class = "jq">Driver Location:</h5>
            <input className='dj' name='location' onChange={(e)=>{setLocation(e.target.value)}} type='text' placeholder='Enter Location'/>
        </div>
        <button className='kj' onClick={addReady}>Submit</button>
        </div>
        {requestDriver.username === driverDetails.username ?(
        <div class = "m">
          <p class = "q">name:{rideDetails.username}</p>
          <p class = "q">pickup location:{rideDetails.pickup}</p>
          <p class = "q">drop location:{rideDetails.destination}</p>
          <p class = "q">distance:{rideDetails.distance}</p>
          <p class = "q">duration:{rideDetails.duration}</p>
          <p class = "q"> phoneNumber:{rideDetails.phoneNumber}</p>
          <p class = "q">fair:{rideDetails.fair}</p>
          {(request === "") ?(
            <span>
          <button onClick = {accept} class = "r">accept</button>
          <button onClick = {decline} class = "r">decline</button>
          </span>
          ):(
            <div>
            {request === "ride details" ?(
            <div>
            <input placeholder='enter otp' onChange = {(e) => {setOtp(e.target.value)}} class = "t"></input>
            <button onClick = {check} class = "r">start</button>
            </div>
            ):(
                <button onClick = {end} class = "r">end ride</button>
            )
            }
            </div>
          )
        }
        </div>
         ):(null)} 
        
        </>
     );
}

export default DriverHome;