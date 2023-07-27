import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addRequestDriver } from './Stores/MasterSlice';
import { useNavigate } from 'react-router-dom';
import { addStoreCard } from './Stores/MasterSlice';
import UserAuthService from '../Services/UserAuthService';
import { useState, useEffect } from 'react';
import "../Styles/adminHome.css"
import axios from 'axios';
export default function BasicCard() {
//   const navigate = useNavigate()
//   const {bookDriver} = useSelector((state) => state.master);
//   console.log(bookDriver)
//   const dispatch = useDispatch();

        
const[mydata,setMydata]=useState([]);
useEffect(()=>{
        axios
    .get("http://localhost:8080/auth/getRide")
    .then((response)=>{
        console.log(response.data)
        setMydata(response.data)
    })
});
  return (
    <div style = {{display:"flex"}}  class = "class">

          {
            mydata.map((data)=>{
             
            return(
            
              <div  className='hello' style = {{width:"auto" , margin:"30px"}}>

    <Card sx={{ maxWidth: 400}}>
      <CardContent >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Ride Details 
        </Typography>
        <Typography variant="h5" component="div">
            Driver Email: <p>{data.driveremail} </p>
        </Typography>
        <Typography variant="h5" component="div">
            Passenger Email:  <p>{data.passengeremail}</p>
        </Typography>
        <Typography variant="h5" component="div">
            Picked location:  <p>{data.pickup}</p>
        </Typography>
        <Typography variant="h5" component="div">
              Droped location: <p>{data.droplocation}</p>
        </Typography>
        <Typography variant="h5" component="div">
            Raid Fair: <p>{data.ridefair} </p>
        </Typography>
             
      </CardContent>
      {/* <CardActions>
        <Button size="small">Request Ride</Button>
      </CardActions> */}
    </Card>
    </div>
         )
        })
            }
      
    </div>
  );
}