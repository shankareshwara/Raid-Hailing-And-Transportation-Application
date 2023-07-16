import React from 'react'
import {useFormik} from "formik"
import {SignInSchema} from "../schemas/signinSchema"
import Swal from 'sweetalert2'
import validator from 'validator'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import '../Styles/signup.css'

const SignInDriver = () => {
    const navigate = useNavigate();
    const initialState = {userNameemail: "",
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
        eventSignIp();
        action.resetForm();
      }
    })

  const eventSignIp = () => {
    console.log("success")
    console.log("success");
    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: 'successfully logged in',
      showConfirmButton: false,
      timer: 1500
    })
    setTimeout(() => {
      navigate("/")
    }, 3000)
  }


  return (
    <div>
        <h1 id = "h1">DRIVER SIGNIN</h1>
   
    <div class = "container">

        <div className='registration'>
        <button style = {{marginLeft:"40px" , marginBottom:"23px"}} class = "ride" onClick={() => navigate("/signin")}><a class = "a" >passanger</a></button>
          <button style = {{marginLeft:"30px" , marginBottom:"23px"}} class = "ride"><a class = "a" style= {{color:"#b818f3"}}>driver</a></button>
         
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
