import React from "react"
import mainpic_register from '../assest/mainpic_register.png'
import Image from "next/image";
import Link from "next/link";
import Logo_Nav from "@/app/SharedComponent/Logo_Nav";
import '../sharedstyle.css'




const Register=()=>{
return(
    <div className="MainRegister">

      <Logo_Nav/>

    <div className="Register">
        
      <div className="MainInput_Register">
        <div className="Register_Text">
           <div className="Text1_Register"><span>Join the CookMate Community!</span></div>
           <br/>
            <div className="Text2_Register"><span>Create your account</span></div>
        </div>
        <form className="formregister">
            <label className="label_user">Username</label>
            <input className="Input_User" type="text" placeholder="Type your email address"></input>
            <br/>
            <label className="label_mail">Email Address</label>
            <input className="Input_Mail" type="text" placeholder="Type your email address"></input>
            <br/>
            <label className="label_password">Password</label>
            <input className="Input_Password" type="password" placeholder=""></input>
            <br/>
            <label className="label_Confirm_password">Confirm password</label>
            <input className="Input_Confirm_password" type="password" placeholder=""></input>
            <br/>
            <div  className="Terms">By signing up, you agree to our Terms and Conditions.</div>
            <br/>
            <button className="Create_new">Create new </button>
            <br/>
            <Link href={'/opration/login'} className="New_SignUp">Already have an account?</Link>
        </form>
       

     </div>

      <div className="MainPic_Register">
            <Image src={mainpic_register} alt="" className="pic_register"></Image>
      </div>

    </div>
  


   </div>
)
}
export default Register