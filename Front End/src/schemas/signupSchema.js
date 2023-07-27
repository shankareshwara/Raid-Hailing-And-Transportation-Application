import * as Yup from "yup";
export const SignUpSchema = Yup.object({
    username : Yup.string().min(5).max(16).required("userName is required"),
    email : Yup.string().email().required("Email is required"),
    password : Yup.string().min(8).max(12).required("Password is required"),
    confirmPassword : Yup.string().oneOf([Yup.ref('password'),null],"password must match").required("confirm password is required"),
    phoneNumber : Yup.string().matches(/^[0-9]{10}$/ , "phone number is not valid").required("please enter phone number"),
    // address:Yup.string().min(15).required("please enter the address")

})
