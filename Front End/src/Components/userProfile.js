
// import UserService from "../Services/UserService"
// import {useSelector} from 'react-redux'

import '../Styles/userProfile.css'
import React, { useState } from 'react';

const UserProfile = () => {
  // const login = useSelector( state => state.login.values)
 
// const [user, setUser] = useState([]);
// const [divHeight, setDivHeight] = useState('2px');
// const [divWidth, setDivWidth] = useState('2px');

// const handleClick = () => {
//   // Change the height of the div here
//   const newHeight = divHeight === '100px' ? '200px' : '100px';
//   setDivHeight(newHeight);
//   const newWidth = divHeight === '100px' ? '200px' : '100px';
//   setDivWidth(newWidth);
//   // const response = await UserService.getUserByEmail();
//   // setUser(response.data);
//   };

  return (
    <div
      // style={{ height: divHeight, width: divWidth, border: '1px solid black' }}
      // onClick={handleClick}
    >
     {/* <p>email:{login.email}</p> */}
     <h1>helloo</h1>
     
    </div>
  );
};

export default UserProfile;
