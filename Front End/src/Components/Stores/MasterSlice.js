import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: null,
  Emails: null,
  Token: null,
  userDetails: null,
  loggedInUser: null,
  drivers:null,
  driverEmails:null,
  driverDetails:{
    userName:"",
    email:"",
    password:"",
    phoneNumber:0,
    totalRide:0,
    totalEarnings:0,
    available:"NO",
    place:"NULL",
    rating:1

  },
  loggedInUser:null,
  // bookedDriverDetails:{
    // username:"",
    // rating:"",
    // phoneNumber:"",
  // },
  rideDetails:[{
    email:"",
    username:"",
      pickup:"",
      destination:"",
      distance:"",
      fair:"",
      phoneNumber:"",
      duration:""
  }],
  ride:"",

  bookDriver: [],
  requestDriver:{
    username:"",
    rating:"",
    phoneNumber:"",
  },
  storeCard : null,
  request : "",
  rating:""

};

const masterSlice = createSlice({
  name: "Master",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    addUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    deleteUser: (state, action) => {
      state.users = [];
    },
    addEmails: (state, action) => {
      console.log(action);
      state.Emails = action.payload;
    },
    deleteUserEmails: (state, action) => {
      state.Emails = null;
    },
    addToken: (state, action) => {
      state.Token = action.payload;
    },
    deleteToken: (state, action) => {
      state.Token = null;
    },
    deleteUserDetails: (state, action) => {
      state.userDetails = null;
    },


    addDriver: (state, action) => {
      state.drivers.push(action.payload);
    },
    addDriverDetails: (state, action) => {
      state.driverDetails = action.payload;
    },
    deleteDriver: (state, action) => {
      state.drivers = [];
    },
    addDriverEmails: (state, action) => {
      console.log(action);
      state.driverEmails = action.payload;
    },
    deleteDriverEmails: (state, action) => {
      state.driverEmails = null;
    },
    deleteDriverDetails: (state, action) => {
      state.driverDetails = {
        userName:"",
        email:"",
        password:"",
        phoneNumber:0,
        totalRide:0,
        totalEarnings:0,
        available:"NO",
        place:"NULL",
        rating:1
    
      };
      
    },
    addRequestDriver: (state, action) => {
        state.requestDriver = action.payload
    },
    // addBookedDriver: (state , action) => {
    //   state.bookedDriverDetails = action.payload;
    // },

    addRideDetails: (state , action) =>{
      state.rideDetails = action.payload;
    },
    // deleteBookedDriver: (state , action) => {
    //   state.bookedDriverDetails = {
    //     username:"",
    //     rating:"",
    //     phoneNumber:""
    //   };
    // },
    
    deleteRideDetails: (state , action) =>{

      state.rideDetails = [{
        email:"",
        username:"",
          pickup:"",
          destination:"",
          distance:"",
          fair:"",
          phoneNumber:"",
          duration:""
      }];
    },
    addRide :(state , action) => {
      state.ride = action.payload;
    },
    addBookDriver :(state , action) => {
      state.bookDriver = action.payload;
    },
    deleteBookDriver :(state , action) => {
      state.bookDriver = [];
    },
    addStoreCard: (state , action) =>{
      state.storeCard = action.payload;
    },
    deleterRequestDriver: (state , action) =>{
      state.requestDriver = {
        username:"",
        rating:"",
        phoneNumber:"",
      };
    },
    addrequest: (state , action) =>{
      state.request = action.payload;
    },
    deleteRequest: (state , action) =>{
      state.request = "";
    },
   addRating: (state , action) =>{
      state.request = action.payload;
    },
    deleteRating: (state , action) =>{
      state.request = "";
    },

  },
});

export const {
  
  addUser,
  deleteUser,
  addUserDetails,
  deleteUserDetails,
  addEmails,
  deleteUserEmails,
  addToken,
  deleteToken,

  addDriver,
  deleteDriver,
  addDriverDetails,
  deleteDriverDetails,
  addDriverEmails,
  deleteDriverEmails,
  addBookedDriver,
  addRideDetails,
  deleteBookedDriver,
  deleteRideDetails,
  addBookDriver,
  deleteBookDriver,
  addRide,
  addRequestDriver,
  addStoreCard,
  deleterRequestDriver,
  addrequest,
  deleteRequest,
  addRating,
  deleteRating
} = masterSlice.actions;

export default masterSlice.reducer;