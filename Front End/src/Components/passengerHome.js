import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  SkeletonText,
  Text,
} from '@chakra-ui/react'
import { FaLocationArrow, FaTimes } from 'react-icons/fa'

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api'
import { useRef, useState , useEffect } from 'react'
import {useDispatch} from 'react-redux'
import {submit} from  '../features/ride'
import { useNavigate } from 'react-router-dom'
import NavbarUser from './navbar_user'
import Profile from './profile'
import '../Styles/passengerhome.css'
import RecipeReviewCard from './card'
import { useSelector } from 'react-redux'
import UserSerive from '../Services/userSerive'
import {addBookedDriver, addUserDetails ,addRideDetails  , addRide , addBookDriver, deleteBookDriver} from "../Components/Stores/MasterSlice"
import UserAuthService from '../Services/UserAuthService'
const center = { lat: 11.0168, lng: 76.9558 }


function Map() {

    const dispatch = useDispatch();
    const { Emails } = useSelector((state) => state.master);
    const {Token} = useSelector((state) => state.master );
    const {bookedDriverDetails} = useSelector((state) => state.master );
    const {userDetails} = useSelector((state) => state.master );
    const {ride} = useSelector((state) => state.master );
    console.log(ride)
    useEffect(() => {
      getData();
  }, []);

  const requestRide = () => {

    const val={
      email:userDetails.email,
      username:userDetails.username,
      pickup:pickup,
      destination:destination,
      distance:distance,
      fair:distance*20,
      phoneNumber:userDetails.phoneNumber,
      duration:duration
  }
  console.log(val);
  dispatch(addRideDetails(val));

  }
  const getData = async () => {
    try{
        const response = await UserSerive.getUserByEmail(Emails,Token);
        console.log("response", " ", response.data);
        dispatch(addUserDetails(response.data));
    }
    catch(error){
        console.log(error);
    }
}

  const initialState = {
    services: [
      {
        pickup: "kuniyamuthur",
        drop: "gandhipuram",
        distance: 10,
        duration: "30mins"
      },
      {
        pickup: "gandhipuram",
        drop: "ukkadam",
        distance: 6,
        duration: "20mins"
      },
      {
        pickup: "brooks",
        drop: "rs puram",
        distance: 8,
        duration: "25mins"
      },
      {
        pickup: "a",
        drop: "b",
        distance: 8,
        duration: "25mins"
      }
    ]
  };
  const [state, setState] = useState(initialState);
 const navigate = useNavigate('');

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  })
  
  const [map, setMap] = useState(/** @type google.maps.Map */ (null))
  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [distance, setDistance] = useState(0)
  const [driver , setDriver] = useState();
  const [duration, setDuration] = useState('')
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [fair, setFair] = useState(0)
  const[present , setPresent] = useState("false");
  const[mydata , setMyData] = useState([]);
  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef()

  if (!isLoaded) {
    return <SkeletonText />
  }
  
  async function calculateRoute() {
  const service = state.services.find(
    service => service.pickup === pickup && service.drop === destination
  );
// console.log(service)
  if (service) {
    setDistance(service.distance);
    setDuration(service.duration);
    // const amount = duration
    setFair(distance*10);
  } else {
    setDistance(null);
    setDuration("")
    setFair(0);
  }
  console.log(pickup);
  dispatch(addRide(""))
  
  
  
}
const searchDriver = async() =>{
  try{
      const  response = await UserAuthService.getDriverByPlace(pickup);
      setDriver(response.data.message)
      console.log(response.data)
      if(response.data.message === "success"){
        dispatch(deleteBookDriver());
        console.log(response.data.driver)
        dispatch(addBookDriver(response.data.driver));
        requestRide();
        setDriver("success")
        setPresent("true");
        navigate("/card");
        
      }
      else{
        console.log(response.data)
        setPresent("false");
        alert("sorry no driver found for your location !!!")

        
     }
    }
    catch(Error){
      console.log(Error);
    }

  }
  

  return (
<div>
{/* <NavbarUser />
<Profile/> */}
      <Flex
        position='relative'
        flexDirection='column'
        alignItems='center'
        h='100vh'
        w='100vw'
      >
        <Box position='absolute' left={0} top={0} h='100%' w='100%'>
          {/* Google Map Box */}
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: '100%', height: '100%' }}
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
            onLoad={map => setMap(map)}
          >
            <Marker position={center} />
            {directionsResponse && (
              <DirectionsRenderer directions={directionsResponse} />
            )}
          </GoogleMap>
        </Box>
        <Box
          p={4}
          borderRadius='lg'
          m={4}
          bgColor='white'
          shadow='base'
          minW='container.md'
          zIndex='1'
        >
          <HStack spacing={2} justifyContent='space-between'>
            <Box flexGrow={1}>
              <Autocomplete>
              <Input type='text' placeholder='Origin'   onChange = { (e) => { setPickup(e.target.value)}}/>
              </Autocomplete>
            </Box>
            <Box flexGrow={1}>
              <Autocomplete>
              <Input
              type='text'
              placeholder='Destination'
              
              onChange = { (e) => { setDestination(e.target.value)}}
              />
              </Autocomplete>
            </Box>
  
            <ButtonGroup>
            <Button colorScheme='blue' type='submit' onClick={calculateRoute}>
              Calculate Route
            </Button >
            <Button colorScheme='blue' type='submit' onClick = {searchDriver}>
              SearchDriver
            </Button >
              <IconButton
                aria-label='center back'
                icon={<FaTimes />}
                // onClick={clearRoute}
              />
            </ButtonGroup>
          </HStack>
          <HStack spacing={4} mt={4} justifyContent='space-between'>
            <Text>Distance: {distance} </Text>
            <Text>Duration: {duration} </Text>
            <Text>fair: {distance*20} </Text>
            <IconButton
              aria-label='center back'
              icon={<FaLocationArrow />}
              isRound
              onClick={() => {
                map.panTo(center)
                map.setZoom(15)
              }}
            />
          </HStack> 
        </Box>
      </Flex>
      {/* <div class = "home-div">
        {/* {present === "false" ?(
        null
        ):( */}
        {/* <div>
          <p>driverName:{bookedDriverDetails.username}</p>
          <p>driverrating: {bookedDriverDetails.rating}</p>
          {/* <p>drivervehicleNumber:</p> */}
          {/* <p>driverphoneNumber: {bookedDriverDetails.phoneNumber}</p>
          <button onClick = {requestRide}>request</button> */}
        {/* </div>  */}
        {/* )} */}
        {/* {ride == "True" ?(
        <div class = "rigt">
          <p> driver accepts your request</p>
          <button>payment</button>
        </div>
        ): ride === "false" ?(
          <div>
            <p>driver reject your request</p>
          </div>
        ): (
          null
        )} */}
      {/* </div> */}
      </div>
    )
  }
  export default Map;







