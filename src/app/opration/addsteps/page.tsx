import Image from "next/image"
import React from "react"
import '../recipe.css'
import NavBar from "@/app/home/NavBar"



const addsteps=()=>{
return(
<div className="MainAddSteps">

    <NavBar/>

    <div className="MainText_AddSteps">
        <span>Share Your Recipe with the CookMate Community!</span>
    </div>

    <div className="Add_Steps">

        <form className="formaddsteps">

          <div className="Second_add_RecipeSteps"><span>Second add Recipe Steps</span></div>
          <label className="Label_Steps">Step 1</label>
          <textarea className="MainInputSteps"> </textarea>
          <br/>
          <label className="Label_Steps">Step 2</label>
          <textarea className="MainInputSteps"> </textarea>
          <br/>
          <label className="Label_Steps">Step 3</label>
          <textarea className="MainInputSteps"> </textarea>
          <br/>
          <button className="Addnew_Ingrediant">Add new</button>
          <button className="Next">Save</button>

        </form>

    



       
    </div> 

    
</div>
)
}
export default addsteps
