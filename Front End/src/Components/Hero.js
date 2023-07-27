import React from 'react'
import Typewriter from 'typewriter-effect';
import '../Styles/hero.css';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-container'>
                <div style={{paddingTop:"150px",marginLeft:"100px"}}>
                    <h1 id="hero-text" style={{fontFamily:"'Titillium Web', sans-serif",color:"#fc3355",marginBottom:"60px"}}> <Typewriter
                        options={{
                            strings: ['Safety Ride','Good Ride Experiance','Make It Ease','Easy To Go'],
                            autoStart: true,
                            loop: true,
                            delay:50
                        }}
                    /></h1>
                </div>
            </div>
        </div>
    )
}

export default Hero