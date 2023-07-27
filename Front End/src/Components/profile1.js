import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Paper } from "@mui/material";
import { FaCircleUser } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/legend.css";


const Profile1 = () => {
    const [isOpen, setOpen] = useState(false);

    const { driverDetails } = useSelector((state) => state.master);

    useEffect(() => {
        AOS.init();
    }, []);

    console.log(driverDetails);

    return (
        <motion.div
            initial={{opasity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{duration:1}}
            >

            <div className="profile-root">
                <div style={{ display:"flex",margin:"0 auto"}}>
                    <div
                        style={{ display: "flex", justifyContent: "center", width: "50%" }}
                    >
                        <motion.div
                            layout
                            transition={{ layout: { duration: 1 }, type: "spring" }}
                            className="card"
                            onClick={() => setOpen(!isOpen)}
                        >
                            <Paper elevation={16}>
                                <motion.h1 layout="position" id="profile-head">
                                    <FaCircleUser size={40} />
                                </motion.h1>

                                {isOpen && (
                                    <motion.div>
                                        <div className="profile-card-content">
                                            <div
                                                style={{
                                                    display: "grid",
                                                    gridTemplateColumns: "1fr 1fr",
                                                    gridGap: "20px",
                                                    margin: "20px",
                                                }}
                                            >
                                                <div className="profile-field">
                                                    <h2>Email ID</h2>
                                                </div>
                                                <div className="profile-value">
                                                    <h2>{driverDetails.email}</h2>
                                                </div>
                                                <div>
                                                    <h2 className="profile-field">Username</h2>
                                                </div>
                                                <div className="profile-value">
                                                    <h2>{driverDetails.username}</h2>
                                                </div> 
                                                <div className="profile-field">
                                                    <h2>Phone Number</h2>
                                                </div>
                                                <div className="profile-value">
                                                    <h2>{driverDetails.phoneNumber}</h2>
                                                </div>
                                                <div className="profile-field">
                                                    <h2>Total Ride</h2>
                                                </div>
                                                <div className="profile-value">
                                                    <h2>{driverDetails.totalRide}</h2>
                                                </div>
                                                <div className="profile-field">
                                                    <h2>Total Earnings</h2>
                                                </div>
                                                <div className="profile-value">
                                                    <h2>{driverDetails.totalEarnings}</h2>
                                                </div>
                                                <div className="profile-field">
                                                    <h2>rating</h2>
                                                </div>
                                                <div className="profile-value">
                                                    <h2>{driverDetails.rating}</h2>
                                                </div>
                                            
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </Paper>
                        </motion.div>

                    </div>
                    <div style={{width:"50%",display:"grid",placeItems:"center"}}>
                        <div data-aos="zoom-in-up" data-aos-duration="3000">
                            <h1 style={{ color: "white", fontSize: "60px", textAlign: "center", marginTop: "30px" }}>
                                Get a closer look at your profile
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Profile1;