import React from 'react'
import {useFormik} from "formik"
import {SignInSchema} from "../schemas/signinSchema"
import Swal from 'sweetalert2'
import validator from 'validator'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import '../Styles/signup.css'
import {useDispatch} from "react-redux"
import { addUser, addEmails, addUserDetails , addToken } from '../Components/Stores/MasterSlice';
import UserAuthService from '../Services/UserAuthService'
const SignIn = () => {

  const dispatch = useDispatch();

    const navigate = useNavigate();
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
      const response = await UserAuthService.loginUserWithEmailAndPassword(values);
      console.log(response);
      var token = response.data.accessToken;
      var userEmail = response.data.email;
      
      if (response.message != "Request failed with status code 400") {
        
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
          
          dispatch(addUser(values)); 
          dispatch(addEmails(userEmail));
          dispatch(addToken(token));
          navigate("/map");
        }, 3000);
      }
      else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Login failed",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
         <h1 id = "h1">PASSANGER SIGNIN</h1>
    <div class = "container">

        <div className='registration'>
        <button style = {{marginLeft:"7px" , marginBottom:"23px"}} class = "ride"><a class = "a" style= {{color:"#b818f3"}}>passenger</a></button>
          <button style = {{marginLeft:"-16px" , marginBottom:"23px"}} class = "ride" onClick={() => navigate("/signindriver")}><a class = "a">driver</a></button>
          <button style = {{marginLeft:"0px" , marginBottom:"23px"}} class = "ride" onClick={() => navigate("/signinadmin")}><a class = "a">admin</a></button>
            <form onSubmit = {handleSubmit} id='form'>


                <label> email:</label>
                <br></br>
                <input value = {values.email} onChange = {handleChange} onBlur ={handleBlur} name = "email" type = "email"   style = {{}}/>
                {errors.email && touched.email ? <div> <p style ={{color : "red"}}>{errors.email}</p></div> : null}
                <br></br>
                <label> password:</label>
                <br></br>
                <input value = {values.password} onChange = {handleChange} onBlur ={handleBlur} name = "password" type = "password"    style = {{}}/>
                {errors.password && touched.password ? <div> <p style ={{color : "red"}}>{errors.password}</p></div> : null}
                <br></br>
                <button type = "submit" class = "btn">
                    log in
                </button>

            </form>
            <p style = {{    marginLeft: "60px", marginTop:"21px"}}>create account ? <button onClick = { () => navigate("/signup")} class = "ride"><a class = "ab"style = {{marginTop:"10px" ,color:"blue"}}>sign up</a></button></p>
           
        </div>
        <div>
        <img id="pic1" src="/images/signin.png" alt="img" width="70%" />
        </div>
    </div>
    </div>
  )

}

export default SignIn;





















