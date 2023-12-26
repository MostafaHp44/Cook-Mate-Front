import React from "react"
import '../sharedstyle.css'
import Logo_Nav from "@/app/SharedComponent/Logo_Nav"

const Verify=()=>{

    return(
        <div className="MainVerify">

             <Logo_Nav/>

            <div className="Verify_Text">
                <div className="Text1_Verify"><span>Thank you for joining CookMate!</span></div>
                <br/>
                <div className="Text2_Verify"><span>A confirmation email has been sent to your inbox</span></div>
            </div>

            <button className="btn_Verify">Verify now</button>
        </div>
    )
}
export default Verify