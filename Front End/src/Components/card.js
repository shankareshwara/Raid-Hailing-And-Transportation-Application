import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addRequestDriver, addrequest } from './Stores/MasterSlice';
import { useNavigate } from 'react-router-dom';
import { addStoreCard } from './Stores/MasterSlice';
export default function BasicCard() {
  const navigate = useNavigate()
  const {bookDriver} = useSelector((state) => state.master);
  const {ride} = useSelector((state) => state.master);
  console.log(bookDriver)
  console.log(ride)
  const dispatch = useDispatch();
  const payment = () => {
    navigate('/payment')
  }

  return (
    <div style = {{display:"flex"}}>

          {
            bookDriver.map((data)=>{

              const check = () => {
                dispatch(addRequestDriver(data));
                // dispatch(addrequest("request"));
              } 
             
            return(
            
              <div  className='hello' style = {{width:"auto" , margin:"30px"}} onClick = {payment}>

    <Card sx={{ maxWidth: 400}} >
      <CardContent >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Driver Details 
        </Typography>
        <Typography variant="h5" component="div">
            Name:   {data.username}
        </Typography>
        <Typography variant="h5" component="div">
            Rating:   {data.rating}
        </Typography>
        <Typography variant="h5" component="div">
            vehicleNumber:  {data.phoneNumber}
        </Typography>
        <Typography variant="h5" component="div">
            location:   {data.place}
        </Typography>

      </CardContent>

      <CardActions>
        <Button size="small" onClick = { check }>Request Ride</Button>
      </CardActions>
    </Card>
    </div>
                  )
                  })
            }
      
    </div>
  );
}