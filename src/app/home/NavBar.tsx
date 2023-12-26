import React  from "react"
import logo from './assest/Cookmate.png'
import Image from "next/image"
import { useRef } from "react"
import Link from "next/link"

const NavBar=()=>{

    
    return(
        <main className="flex justify-between align-middle">

            <div className="Logo">
                <Link href={'/'}><Image alt="" src={logo}></Image></Link>
            </div>

            <main className=" flex gap-5">
                <Link href={'/addnewrecipe'} className=" font-Montserrat font-semibold not-italic text-base transition active:bg-green-700 rounded-full p-5 transition" >Recent recipes</Link>
                <Link href={'opration/login'}  className=" font-Montserrat font-semibold not-italic text-base transition active:bg-green-700 rounded-full p-5 transition">Account</Link>
                <Link href={'opration/addnewrecipe'}  className=" font-Montserrat font-semibold not-italic text-base transition active:bg-green-700 rounded-full p-5 transition">Add new recipe</Link>
            </main>

            
        </main>
    )
}
export default NavBar