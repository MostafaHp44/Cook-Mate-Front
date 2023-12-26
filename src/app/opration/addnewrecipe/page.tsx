import NavBar from "@/app/home/NavBar"
import React from "react"
import '../recipe.css'
const addnewrecipe=()=>{
return(

<div className="Main_AddNewRecipe">


    <NavBar/>

    <div className="MainText_AddnewRecipe"><span>Share Your Recipe with the CookMate Community!</span></div>

    <div className="Add_New_Recipe">

      <form className="from_addnewrecipe">

        <div className="FirstRecipeDetails"><span>First Recipe Details</span></div>

        <label className="RecipeName">Recipe Name</label>
        <input type="text" className="MainInput_RecipeName" placeholder="Type your recipe name"></input>
        <br/>
        <label className="RecipeDescription">Recipe Description</label>
        <textarea className="MainInput_RecipeDescription"></textarea>
        <br/>
        <label className="Recipeingredients">Recipe ingredients</label>
        <br/>
        <input type="text" className="MainInput_Recipeingredients" placeholder="ingrediant 1"></input>
        <input type="text" className="MainInput_Recipeingredients" placeholder="ingrediant 2"></input>
        <input type="text" className="MainInput_Recipeingredients" placeholder="ingrediant 3"></input>
        <br/>
        <button className="Addnew_Ingrediant">Add new</button>


        <button className="Next">Next</button>




      </form>

     <div className="Add_PiccRipe">
        <label className="Recipeimages">Recipe images</label>
        <input type="image" className="MainInput_Add_Pic_Cripe"></input>
     </div>

    </div>

    

</div>
)
}

export default addnewrecipe