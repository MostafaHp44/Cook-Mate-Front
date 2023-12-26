import React from "react"
import Image from "next/image"
import logo from './assest/Cookmate.png'
import './Logo_Nav.css'
import Link from "next/link"

const Logo_Nav=()=>{
    return(
   
      <div className="GenralLogo">  <Link href={'/'}><Image src={logo} alt="" className="Size_Genral_Logo"></Image></Link></div>
    )
}

export default Logo_Nav