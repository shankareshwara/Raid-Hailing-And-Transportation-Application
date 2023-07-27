import React from 'react'
import "../Styles/profile.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate("");
  return (
    <div class="dropdown">
    <button class="dropbtn"><AccountCircleIcon/></button>
    <div class="dropdown-content">
      <button ><a>profile</a></button>
      <button><a>logout</a></button>
    </div>
  </div>
  )
}
