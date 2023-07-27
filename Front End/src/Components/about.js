import React from 'react'
import AboutHero from './about_hero'
import '../Styles/about.css'
import NavbarUser from './navbar_user'
import Navbar from './Navbar'
const About = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <AboutHero />
      <div className='main'>
      <div className='about'>
        <div style={{marginBottom:"25px"}}>
          <h1><span style= {{color :"#fc3355" , fontSize :"43px"}}>R</span>ELIABILITY</h1>
          <p style={{textAlign:"justify",marginTop:"20px",fontSize:"20px"}}>
            One of the most crucial qualities of a reliable taxi booking service is the ability to provide timely
            and dependable transportation. Customers rely on taxis to arrive on time and reach their destinations
            promptly. A quality taxi booking service ensures that drivers are punctual, vehicles are well-maintained,
            and customers can trust that their transportation needs will be met consistently.
          </p>
        </div>
        <div>
          <h1><span style= {{color :"#fc3355" , fontSize :"43px"}}>S</span>AFETY</h1>
          <p style={{textAlign:"justify",marginTop:"20px",fontSize:"20px"}}>
          Safety is paramount when it comes to taxi services. A high-quality taxi booking service prioritizes the safety of
           its passengers by thoroughly vetting and training its drivers. Background checks, driver screening, and adherence
            to safety regulations are essential aspects of a reputable service. Additionally, well-maintained vehicles with 
            regular safety inspections contribute to a safe and secure journey for passengers.
          </p>
        </div>
      </div>
      <div className='about1'>
        <div style={{marginBottom:"30px"}}>
          <h1><span style= {{color :"#fc3355" , fontSize :"43px"}}>P</span>ROFESSIONALISM </h1>
          <p style={{textAlign:"justify",marginTop:"20px",fontSize:"20px"}}>
          Professionalism is a key quality that sets apart an excellent taxi booking service. From the moment a customer books
           a taxi until they reach their destination, professionalism should be evident at every step. Professional drivers display
            courteous behavior, maintain cleanliness in their vehicles, and possess excellent customer service skills. Clear communication
             and respectful interactions with passengers are essential for a high-quality experience.
          </p>
        </div>
        <div>
          <h1><span style= {{color :"#fc3355" , fontSize :"43px"}}>C</span>ONVENIANCE AND EASE TO USE </h1>
          <p style={{textAlign:"justify",marginTop:"20px",fontSize:"20px"}}>
          A top-quality taxi booking service prioritizes convenience and ease of use for its customers. This includes having a
           user-friendly mobile app or website that allows seamless and quick booking, clear fare estimates, and easy payment options.
            The ability to track the ride in real-time, receive notifications, and communicate with the driver adds to the overall
             convenience and positive experience of using the service.
          </p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About