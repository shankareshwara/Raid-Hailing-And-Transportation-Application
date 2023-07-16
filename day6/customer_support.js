import React from 'react'
import Customerbottom from './customerbottom'
import '../Styles/customersupport.css';
const Customer_support = () => {
    return (
        <div>
            <div id='head-trans'>
                <h1 style={{ textAlign: "center", marginTop: "50px", fontStyle: "font-family: 'Titillium Web', sans-serif", fontSize: "40px" }}>
                <span style= {{color :"#fc3355" , fontSize :"43px"}}>W</span>elcome to our taxi booking app customer care! We're here to provide you with the best travel experience. How can we assist you today?</h1>
                <h3 style={{ marginTop: "50px", marginBottom: "60px", textAlign: "justify", marginLeft: "50px", marginRight: "50px" }}>You can reach our customer support team through various channels, such as phone, email, or live chat, depending on your convenience. We are available 24/7, ensuring that assistance is just a call or message away. At our taxi booking app customer support, we value your feedback and take it seriously. Your input helps us continuously improve our services and enhance your overall experience. We aim to build long-term relationships with our customers by delivering reliable, responsive, and personalized support.</h3>
            </div>


            <div style={{ minHeight: "80vh", backgroundAttachment: "fixed" }}>
                <Customerbottom />
            </div>
            <div className='cus' >
                <h1 style={{ textAlign: "center", fontStyle: "font-family: 'Titillium Web', sans-serif", fontSize: "35px" }} >Customer satisfaction is our top priority</h1>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <div  id="img-padding" style={{width:"30%"}}>
                        <img src='/images/message.png' width="60%" />
                        <h3>Integrated live chat!</h3>
                    </div>
                    <div id="img-padding">
                        <img src='/images/mail.png' width="60%" />
                        <h3>Email us!</h3>
                    </div>
                    <div id="img-padding">
                        <img src='/images/customer-service.png' width="60%" />
                        <h3>Built-in phone support!</h3>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Customer_support