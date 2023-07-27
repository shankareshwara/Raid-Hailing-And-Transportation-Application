import React from 'react'
import Typewriter from 'typewriter-effect';
import '../Styles/about_hero.css';

const AboutHero = () => {
    return (
        <div className='about-hero'>
            <div className='about-hero-container'>
                <div style={{paddingTop:"150px",marginLeft:"100px"}}>
                    <h1 id="about-hero-text" style={{fontFamily:"'Titillium Web', sans-serif",color:"#fc3355",marginBottom:"60px"}}> <Typewriter
                        options={{
                            strings: ["WHAT'S GREAT ABOUT IT?",],
                            autoStart: true,
                            loop: true,
                            delay:50
                        }}
                    /></h1>
                    <h1 style={{fontSize:"38px",marginLeft:"-36px"}}>
                    "Your Ride, Your Way. Book<span style = {{color:"#fc3355"}}> A Cab With Just A Few  </span>Taps And Enjoy The Journey."
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default AboutHero