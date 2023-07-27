import React from 'react';
// import { useForm } from 'react-hook-form';

import { useNavigate } from 'react-router-dom';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import {auth} from './firebase';

export default function Registeration(props) {

    // const navigate = useNavigate();

    // const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // const onSubmit = data => {
    //     console.log(data)
//-------------------------------------------------------------------------------------------------------
        // try{
        //     const user = createUserWithEmailAndPassword(auth, email, pass);
        // }
        // catch(error){
        //     console.log(error.message)
        // }
 //----------------------------------------------------------------------------------------------------------       
    // };

    // console.log(watch('username'));

    return (
        <>
        <h1> hello</h1>
        </>
        // <div className='container'>
        //     <div className="register">
        //         <div className="col-1">
        //             <h2><center>Sign In</center></h2>
        //             <span><center>register and enjoy the service</center></span>

        //             <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
        //                 <input type="text" {...register("email")} placeholder='email' />
        //                 <input type="text" {...register("password")} placeholder='password' />
        //                 <input type="text" {...register("confirmpwd")} placeholder='confirm password' />
        //                 <input type="text" {...register("mobile", { required: true, maxLength: 10 })} placeholder='mobile number' />
        //                 {errors.mobile?.type === "required" && <p style={{ color: "red" }}>"Mobile Number is required"</p>}
        //                 {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
        //                 <input type="text" {...register("Address")} placeholder='address' />


        //                 <button className='btn'>Sign In</button>
                        
        //                 <button className='link-btn' onClick={() => navigate('/login')}>already you have an account?go to login</button>
        //             </form>


        //         </div>
        //         <div className="col-2">
        //             <img src="/images/regimg.png" alt="img" />
        //         </div>
        //     </div>
        // </div>
    )
}