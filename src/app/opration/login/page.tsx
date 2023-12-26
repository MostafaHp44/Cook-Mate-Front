'use client'

import React from "react";
import Image from "next/image";
import mainpic_login from '../assest/mainpic_login.png'
import { useState, useRef } from 'react';
import Link from "next/link";
import Logo_Nav from "@/app/SharedComponent/Logo_Nav";
import '../sharedstyle.css'








const Login=()=>{

   
   

    return(

       <div className="MainLogin">

        <Logo_Nav/>

        <div className="Login">
            
          <div className="MainInput_Login">

            <div className="Login_Text">
               <div className="Text1_Login"><span>Welcome to CookMate!</span></div>
               <br/>
                <div className="Text2_Login"><span>Sign in to your account</span></div>
            </div>

            <form className="formlogin">
                <label className="label_mail">Email Address</label>
                <input className="Input_Mail" type="text" placeholder="Type your email address"></input>
                <br/>
                <label className="label_password">Password</label>
                <input className="Input_Password" type="password" placeholder=""></input>
                <br/>
                <Link href={'Forgetpassword'} className="Forget_Password">Forgot your password?</Link>
                <br/>
                <button className="SignUp">Sign in now </button>
                <br/>
                <Link href={'Register'} className="New_SignUp">New to CookMate?</Link>
            </form>
           

         </div>

          <div className="MainPic_Login">
                <Image src={mainpic_login} alt="" className="pic_login"></Image>
          </div>

        </div>
      


       </div>
        )
}




export default Login