import Logo_Nav from "@/app/SharedComponent/Logo_Nav"
import React from "react"
import Image from "next/image"
import mainpic_reset from '../assest/mainpic_resetpassword.png'
import Link from "next/link"
import '../sharedstyle.css'

const ResetPassword=()=>{
return( 
         <div className="MainResetPassword">

            <Logo_Nav/>

            <div className="ResetPassword">

            <div className="MainInput_ResetPassword">

                   <div className="ResetPassword_Text">

                    <div className="Text1_ResetPassword"><span>Forgot Your Password?</span></div>
                    <div className="Text2_ResetPassword"><span>Don’t worry you can reset it easily, enter the email associated with your account to reset your password.</span></div>

                    </div>

            <form className="fromforget">
            <label className="label_password">Password</label>
            <input className="Input_Password" type="password" placeholder=""></input>
            <br/>
            <label className="label_Confirm_password">Confirm password</label>
            <input className="Input_Confirm_password" type="password" placeholder=""></input>
            <br/>
            <button className="btn_Forget">Send Reset Link</button>
            <br/>
            <Link href={'./'} className="Remember_Pass">Remember your password?</Link>
            </form>

<div className="Instructions">
    <div className="text1_instruction"><span>Instructions</span></div>
    
   <ul className="List_Instructions">

    <li>Password must be at least 8 characters long and include a mix of letters, numbers, and symbols.</li>
    
   </ul>

</div>

            </div>

                <div className="MianPic_ResetPassword">
                    <Image src={mainpic_reset} alt=""></Image>
                </div>
            </div>
         </div>
)
}
export default ResetPassword