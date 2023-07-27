import React from 'react';
import { useState } from 'react';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Registeration from './Components/Registration';
// import Login from './Components/login';
import { Routes, Route } from 'react-router-dom';

// import About from './Components/About';
import Customer_support from './Components/customer_support';
import About from './Components/about'
// import { Login } from '@mui/icons-material';
// import LoginDriver from './Components/loginDriver';
// import Login from './Components/loginPassenger';
import Map from './Components/passengerHome';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Footer from './Components/footer';
import Map2 from './Components/driverHome'
import Signup from './Components/signup';
import SignIn from './Components/signin';
import SignInDriver from './Components/signindriver';
import SignupDriver from './Components/signupdriver';
import Safety from './Components/safety';
import SignInAdmin from './Components/signinadmin';
import NewMap from './Components/newMap';
import UserProfile from './Components/userProfile';
import Legend from './Components/legend';
import Profile1 from './Components/profile1';
import BasicCard from './Components/card';
import DriverDetails from './Components/driverDetails';
import AdminHome from './Components/adminHome';
import Payment from './Components/payment';
import Rating from './Components/rating';
// import AdminHome from './Components/adminHome';

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <>
      <Navbar/>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/profile1" element={<Profile1 />} />
        <Route path="/profile" element={<Legend />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path = "/newMap" element = {<NewMap/>}/>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signinadmin" element={<SignInAdmin/>} />
        <Route path="/signinDriver" element={<SignInDriver/>} />
        <Route path="/signupDriver" element={<SignupDriver/>} />
        <Route path="/safety" element={<Safety/>} />
        <Route path="/card" element={<BasicCard/>} />
        <Route path="/details" element={<DriverDetails/>} />
        <Route path="/admin" element={<AdminHome/>}/>
        <Route path="/payment" element={<Payment/>}/>

        <Route path='/map' element={ <ChakraProvider theme ={theme}>
     <Map/>
     </ChakraProvider> } />
        <Route path="/map2" element={ <ChakraProvider theme ={theme}>
     <Map2/>
     </ChakraProvider> } />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/register" element={<Registeration/>} />
        <Route path="/about" element={<About />} />
        <Route path="/customer" element={<Customer_support/>} />
        <Route path="/rating" element={<Rating/>} />

      </Routes>
      {/* <Footer/> */}
    </>
  );
}

export default App;