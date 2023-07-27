import React from 'react'
import {useFormik} from "formik"
import {SignInSchema} from "../schemas/signinSchema"
import Swal from 'sweetalert2'
import validator from 'validator'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import '../Styles/signup.css'
// import DriverService from '../Services/DriverService'
import UserAuthService from '../Services/UserAuthService'
import {useDispatch} from "react-redux"
import { addDriver, addEmails, addDriverDetails } from '../Components/Stores/MasterSlice';
const SignInDriver = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const initialState = {
      email: "",
        password : "",
        // confirmPassword:"",
        // mobileNumber:"",
        // address:"",
    };

    const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialState,
      validationSchema: SignInSchema,
      onSubmit: (values, action) => {
        console.log(values);
        eventLogin();
        action.resetForm();
      }
    })

    const eventLogin = async () => {
      try {
        const response = await UserAuthService.loginDriverWithEmailAndPassword(values);
       console.log(response);
        var res = response.data.message;
        if (res === "Login Success !") {
          const response1 = await UserAuthService.getDriverByEmail(values.email)
          var res1 = response1.data;
          console.log(response1.data);
          let timerInterval;
          Swal.fire({
            title: "Successfully LoggedIn !",
            html: "Redirecting in <b></b> milliseconds.",
            timer: 3000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
              const b = Swal.getHtmlContainer().querySelector("b");
              timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft();
              }, 100);
            },
            willClose: () => {
              clearInterval(timerInterval);
            },
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log("I was closed by the timer");
            }
          });
          setTimeout(() => {
            const data = {
              email: values.email,
              password: values.password,
            };
  
            localStorage.setItem("details", JSON.stringify(data));
             dispatch(addDriver(data));
             dispatch(addDriverDetails(res1))
            navigate("/map2");
          }, 3000);
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${res}`,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };


  return (
    <div>
        <h1 id = "h1">DRIVER SIGNIN</h1>
   
    <div class = "container">

        <div className='registration'>
        <button style = {{marginLeft:"7px" , marginBottom:"23px"}} class = "ride" onClick={() => navigate("/signin")}><a class = "a" >passenger</a></button>
          <button style = {{marginLeft:"-16px" , marginBottom:"23px"}} class = "ride"><a class = "a" style= {{color:"#b818f3"}}>driver</a></button>
          <button style = {{marginLeft:"0px" , marginBottom:"23px"}} class = "ride"  onClick={() => navigate("/signinadmin")}><a class = "a" >admin</a></button>
            <form onSubmit = {handleSubmit} id='form'>


                <label> email:</label>
                <br></br>
                <input value = {values.email} onChange = {handleChange} onBlur ={handleBlur} name = "email" type = "email" style = {{}}/>
                {errors.email && touched.email ? <div> <p style ={{color : "red"}}>{errors.email}</p></div> : null}
                <br></br>
                <label> password:</label>
                <br></br>
                <input value = {values.password} onChange = {handleChange} onBlur ={handleBlur} name = "password" type = "password"  style = {{}}/>
                {errors.password && touched.password ? <div> <p style ={{color : "red"}}>{errors.password}</p></div> : null}
                <br></br>
                <button type = "submit" class = "btn">
                    log in
                </button>

            </form>
            <p style = {{    marginLeft: "60px", marginTop:"21px"}}>create account ? <button onClick = { () => navigate("/signupDriver")} class = "ride"><a class = "ab"style = {{marginTop:"10px" ,color:"blue"}}>sign up</a></button></p>
           
        </div>

       <div>
         <img id="pic1" src="/images/signin.png" alt="img" width="70%" />
         </div>
     </div> 
    </div>
  )
}
export default SignInDriver;
