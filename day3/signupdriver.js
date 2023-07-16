import React from 'react'
import {useFormik} from "formik"
import {SignUpSchemaDriver} from "../schemas/signupShemeDriver"
import Swal from 'sweetalert2'
import validator from 'validator'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import '../Styles/signup.css'

const SignupDriver = () => {
    const navigate = useNavigate();
    const initialState = {userNameemail: "",
        password : "",
        confirmPassword:"",
        phoneNumber:"",
        adharNumber:"",
        vehicleNumber:"",
        rcNumber:"",
        lisenceNumber:"",

    };

    const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialState,
      validationSchema: SignUpSchemaDriver,
      onSubmit: (values, action) => {
        console.log(values);
        eventSignUp();
        action.resetForm();
      }
    })

  const eventSignUp = () => {
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
        <h1 id = "h1">DRIVER SIGNUP</h1>
    <div class = "container" style = {{height : "auto"}}>

        <div className='registration' style = {{marginTop:"42px"}}>
          <button style = {{marginLeft:"40px" , marginBottom:"23px"}} class = "ride" onClick={() => navigate("/signup")}><a class = "a">passanger</a></button>
          <button style = {{marginLeft:"30px" , marginBottom:"23px"}} class = "ride" ><a class = "a" style= {{color:"#b818f3"}}>driver</a></button>
         
            <form onSubmit = {handleSubmit} id='form'>

            <label> userName:</label>
                <br></br>
                <input value = {values.userName} onChange = {handleChange} onBlur ={handleBlur} name = "userName" type = "text"   style = {{}}/>
                {errors.userName && touched.userName ? <div> <p style ={{color : "red"}}>{errors.userName}</p></div> : null}
                <br></br>

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
                <label> confirmPassword:</label>
                <br></br>
                <input value = {values.confirmPassword} onChange = {handleChange} onBlur ={handleBlur} name = "confirmPassword" type = "text"   style = {{}}/>
                {errors.confirmPassword && touched.confirmPassword ? <div> <p style ={{color : "red"}}>{errors.confirmPassword}</p></div> : null}
                <br></br>
                 <label> phoneNumber:</label>
                 <br></br>
                <input value = {values.phoneNumber} onChange = {handleChange} onBlur ={handleBlur} name = "phoneNumber" type = "text"    style = {{}}/>
                {errors.phoneNumber && touched.phoneNumber ? <div> <p style ={{color : "red"}}>{errors.phoneNumber}</p></div> : null}
                <br></br>

                
                <label> adharNumber</label>
                <br></br>
                <input value = {values.adharNumber} onChange = {handleChange} onBlur ={handleBlur} name = "adharNumber" type = "text"    style = {{}}/>
                {errors.adharNumber && touched.adharNumber ? <div> <p style ={{color : "red"}}>{errors.adharNumber}</p></div> : null}
                <br></br>

                <label> vehicleNumber:</label>
                <br></br>
                <input value = {values.vehicleNumber} onChange = {handleChange} onBlur ={handleBlur} name = "vehicleNumber" type = "text"   placeholder = '"Enter email' style = {{}}/>
                {errors.vehicleNumber && touched.vehicleNumber ? <div> <p style ={{color : "red"}}>{errors.vehicleNumber}</p></div> : null}
                <br></br>

                <label> rcNumber:</label>
                <br></br>
                <input value = {values.rcNumber} onChange = {handleChange} onBlur ={handleBlur} name = "rcNumber" type = "text"   placeholder = '"Enter email' style = {{}}/>
                {errors.rcNumber && touched.rcNumber ? <div> <p style ={{color : "red"}}>{errors.rcNumber}</p></div> : null}
                <br></br>

                <label> lisenceNumber:</label>
                <br></br>
                <input value = {values.lisenceNumber} onChange = {handleChange} onBlur ={handleBlur} name = "lisenceNumber" type = "text"   placeholder = '"Enter email' style = {{}}/>
                {errors.lisenceNumber && touched.lisenceNumber ? <div> <p style ={{color : "red"}}>{errors.lisenceNumber}</p></div> : null}
                <br></br>
                <br></br>
                <button type = "submit" class = "btn">
                    log in
                </button>

            </form>
            <p style = {{    marginLeft: "60px", marginTop:"21px"}}>already have an account? <button onClick = { () => navigate("/signinDriver")} class = "ride"><a class = "ab"style = {{marginTop:"10px" ,color:"blue"}}>sign in </a></button></p>
        </div>
        <div>
        <img id="pic1" src="/images/signin.png" alt="img" width="70%" />
        </div>
    </div>
    </div>
  )

}

export default SignupDriver;
