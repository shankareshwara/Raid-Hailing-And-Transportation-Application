import React, { useEffect } from "react";
import '../Styles/homepage.css';
import Hero from "./Hero";
import Navbar from "./Navbar";
// import userSerive from "../Services/userSerive";
import {addUserDetails} from "../Components/Stores/MasterSlice"
import { useDispatch, useSelector } from "react-redux";
// import UserSerive from "../Services/userSerive";
import UserSerive from "../Services/userSerive";
import Footer from "./footer";

const Home = () => {

    const dispatch = useDispatch();
    const { Emails } = useSelector((state) => state.master);
    const {Token} = useSelector((state) => state.master );

    useEffect(() => {
        getData();
    }, []);


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

    return (
        <> 
            <Hero />
            <div className="home">
                <div className="pg1">
                    <div id="rightpic1">
                        <img id="pic" src="/images/homebottom.png" alt="img" width="100%" />
                    </div>
                    <div id="leftpic1">
                        <h1 style={{ marginBottom: "30px", fontSize: "45px", paddingRight: "13%", color:"#fc3355"}} class = "content">Cab Vibe</h1>
                        <h3 style={{ textAlign: "justify" , fontFamily: "Poppins"}} class = "content"><span style= {{color :"#fc3355" , fontSize :"43px"}}>W</span>elcome to our Quik app, the ultimate solution for all your transportation needs! Whether you're 
                        commuting to work, exploring a new city, or simply need a ride, our taxi booking app is here to make your journey effortless and enjoyable.
                       With our Quik , you can say goodbye to the hassle of traditional taxi services and embrace the convenience of modern technology. Our user-friendly
                        interface and robust features ensure a seamless experience from start to finish.</h3>
                    </div>
                </div>
               

            </div>
        <Footer/>
        </>

    );
}

export default Home;