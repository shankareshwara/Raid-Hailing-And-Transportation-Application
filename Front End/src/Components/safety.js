import React from 'react'
import img from "../videos/safety.mp4"
import pass from "../videos/pasengervideo.mp4"
import driv from "../videos/drivervideo.mp4"
import img1 from "../videos/protect.mp4"
import img2 from "../videos/umberla.mp4"
import img3 from "../videos/custservice.mp4"
import img4 from "../videos/rating.mp4"
import "../Styles/safety.css"
import NavbarUser from './navbar_user'
import Navbar from './Navbar'

export default function Safety() {
  return (
    <>
    {/* <Navbar /> */}
    <div class = " first">
        <div class = "left">
        <h1 class = "firsth1">safety for all</h1>
        <h3 style={{textAlign:"justify",marginTop:"20px",fontSize:"20px"}}>At Quik , the well-being of our customer is above everything else. We are constantly in pursuit of enhancing our safety measures to ensure every Quik is a pleasent and comfortable experiance</h3>
        </div>
        <div class = "right">
                    <video autoPlay loop muted>
                        <source src={img} type ='video/mp4' />
                    </video>
        </div>
    </div>
    <h1 class = "cover">Covers everyone</h1>
    <div class = "second">
        
        <div class = "pass">
        <video autoPlay loop muted>
                        <source src={pass} type ='video/mp4' />
                    </video>
        <h3 class = "r">For Customer</h3>
        <p>Every ride is tracked by Quik , with access to granular lattitudal and longitudinal data.</p>
        </div>
        <div class = "driv">
        <video autoPlay loop muted style = {{height : "450px"}}>
                        <source src={driv} type ='video/mp4' />
                    </video>
        <h3 class = "r">For Driver</h3>
        <p>From hiring to training to monitoring to ongoing checks, we take all necessary steps to ensure our captains safety</p>
        </div>
    </div>
    <div class = "third">
    <div class ="inn1">
        <div class = "a1">
        <video autoPlay loop muted>
                        <source src={img1} type ='video/mp4' />
                    </video>
        <h3 class="r" style={{
    fontSize: "32px"}}>Measure to ensure the well-being of both , our Driver and customer</h3>
        </div>
        <div class = "a2">
        <video autoPlay loop muted>
                        <source src={img2} type ='video/mp4' />
                    </video>
        <h5 class = "r">insurence</h5>
        <p>insurence can be claimed for any accident that occurs during the ride covering OPD treatement, hospitalisa-tion, and accidental benefit with a maximum sum insured of Rs. 5 lakhs.</p>
        </div>
        </div>
        <div class ="inn2">
        <div class = "a3">
        <video autoPlay loop muted style = {{width : "450px"}}>
                        <source src={img3} type ='video/mp4' />
                    </video>
        <h5 class = "r"> 24 X 7 Customer support</h5>
        <p>Both, out driver and customer con report any kind of issues to rapido through the 24*7 support features on the app post & during the ride.</p>
        </div>
        <div class = "a4">
        <video autoPlay loop muted>
                        <source src={img4} type ='video/mp4' />
                    </video>
        <h5 class = "r">Two-way Rating System</h5>
        <p>Post the ride, both parties can give a rating to each other and any rating below 3 is flagged from Quike's end. Quik reach out to them in 10 minutes to address their concern. The Captain is terminated immediately in case of any misconduct.</p>
        </div>
        </div>
        
    </div>
    </>
  )
}
