import React from "react"
import Image from "next/image"
import mainpic_forgetpassword from '../assest/mainpic_forgetpassword.png'
import Link from "next/link"
import Logo_Nav from "@/app/SharedComponent/Logo_Nav"
import '../sharedstyle.css'


const ForgetPassword=()=>{
return(

    <div className="MainForgetPassword">

       <Logo_Nav/>

        <div className="ForgetPassword">

            <div className="MainInput_Forget">

                <div className="ForgetPassword_Text">

                    <div className="Text1_ForgetPassword"><span>Forgot Your Password?</span></div>
                    <div className="Text2_ForgetPassword"><span>Don’t worry you can reset it easily, enter the email associated with your account to reset your password.</span></div>

                </div>

                <form className="fromforget">
                <label className="label_mail">Email Address</label>
                <input className="Input_Mail" type="text" placeholder="Type your email address"></input>
                <br/>
                <button className="btn_Forget">Send Reset Link</button>
                <br/>
                <Link href={'./'} className="Remember_Pass">Remember your password?</Link>
                </form>

                <div className="Instructions">
                    <div className="text1_instruction"><span>Instructions</span></div>
                    
                   <ul className="List_Instructions">

                    <li>An email with instructions to reset your password will be sent to the provided email address.</li>
                    <br/>
                    <li>If you dont receive an email within a few minutes, please check your spam folder.</li>

                   </ul>

                </div>
                
            </div>

            <div className="MainPic_Forget">

            <div className="Reset_Page"><Image src={mainpic_forgetpassword} alt="" className="pic_forget"></Image></div>

            </div>
            
        </div>

    </div>
)
}
export default ForgetPassword