import React from 'react'
import {useFormik} from "formik"
import {SignUpSchema} from "../schemas/signupSchema"
import Swal from 'sweetalert2'
import validator from 'validator'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import '../Styles/signup.css'
// import UserService from "../Services/UserService"
import UserAuthService from '../Services/UserAuthService'
const Signup = () => {
    const navigate = useNavigate();
    const initialState = {
        username:"",
        email: "",
        password : "",
        confirmPassword:"",
        phoneNumber:"",
       
    };

    const { values, errors, handleBlur, handleChange,handleuserNameChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialState,
      validationSchema: SignUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        eventRegister();
        action.resetForm();
      }
    })

  const eventRegister = async () => {
    try {
        const response = await UserAuthService.saveUser(values);
        console.log(response);
        const target = "Error";
        const target1 = "Email Already Exists !!";

        if (response.data === target) {
            throw target;
        } else if (response.data === target1) {
            throw target1;
        } else {
            let timerInterval;
            Swal.fire({
                title: "Registered Successfully !!",
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
               
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log("I was closed by the timer");
                }
            });
            setTimeout(() => {
                navigate("/signin");
            }, 3000);
        }
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${error}`,
        });
        console.log(error);
    }
};




  return (
    <div>
      <h1 id = "h1">PASSANGER SIGNUP</h1>
    <div class = "container"  style = {{height : "auto"}}>

        <div className='registration'  style = {{marginTop:"42px"}}>

          <button style = {{marginLeft:"7px" , marginBottom:"23px"}} class = "ride" ><a class = "a" style ={{color:"#b818f3"}}>passenger</a></button>
          <button style = {{marginLeft:"-16px" , marginBottom:"23px"}} class = "ride" onClick={() => navigate("/signupdriver")}><a class = "a">driver</a></button>
          <button style = {{marginLeft:"0px" , marginBottom:"23px"}} class = "ride"  onClick={() => navigate("/signinadmin")}><a class = "a">admin</a></button>
            <form onSubmit = {handleSubmit} id='form'>

            <label> userName</label>
                <br></br>
                <input value = {values.username} onChange = {handleChange} onBlur ={handleBlur} name = "username" type = "text" style = {{}}/>
                {errors.username && touched.username ? <div> <p style ={{color : "red"}}>{errors.username}</p></div> : null}
                <br></br>

                <label> email: </label>
                <br></br>
                <input value = {values.email} onChange = {handleChange} onBlur ={handleBlur} name = "email" type = "email"   style = {{}}/>
                {errors.email && touched.email ? <div> <p style ={{color : "red"}}>{errors.email}</p></div> : null}
                <br></br>
                <label> password: </label>
                <br></br>
                <input value = {values.password} onChange = {handleChange} onBlur ={handleBlur} name = "password" type = "password"    style = {{}}/>
                {errors.password && touched.password ? <div> <p style ={{color : "red"}}>{errors.password}</p></div> : null}
                <br></br>
                <label> confirmPassword:</label>
                <br></br>
                <input value = {values.confirmPassword} onChange = {handleChange} onBlur ={handleBlur} name = "confirmPassword" type = "text"     style = {{}}/>
                {errors.confirmPassword && touched.confirmPassword ? <div> <p style ={{color : "red"}}>{errors.confirmPassword}</p></div> : null}
                <br></br>
                 <label> phoneNumber:</label>
                 <br></br>
                <input value = {values.phoneNumber} onChange = {handleChange} onBlur ={handleBlur} name = "phoneNumber" type = "text"    style = {{}}/>
                {errors.phoneNumber && touched.phoneNumber ? <div> <p style ={{color : "red"}}>{errors.phoneNumber}</p></div> : null}
                <br></br>
                <br></br>
                <button type = "submit" class = "btn">
                    sign up
                </button>

            </form>
            <p style = {{    marginLeft: "60px", marginTop:"21px"}}>already have an account? <button onClick = { () => navigate("/signin")} class = "ride"><a class = "ab"style = {{marginTop:"10px" ,color:"blue"}}>sign in </a></button></p>
        </div>
        <div>
        <img id="pic1" src="/images/signin.png" alt="img" width="70%" />
        </div>
    </div>
    </div>
  )

}

export default Signup;
















