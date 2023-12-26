import NavBar from "@/app/home/NavBar";
import React from "react";
import Image from "next/image";
import '../recipe.css';
import img1 from '../assest/mainimage.png'
import img2 from '../assest/image 2.png'
import img3 from '../assest/image 3.png'
import img4 from '../assest/image 4.png'
import img5 from '../assest/image 5.png'


const Recipedetails=()=>{
return(

<div className="MainRecip_Details">

    <NavBar/>

    <div className="MainPic_Recip">

        <div className="Primary_PicRecip">

            <Image src={img1} alt="" className="img1_PicRecip"></Image>
        </div>


        <div className="Secondery_PicRecip">
        <Image src={img2} alt="" className="img2_PicRecip"></Image>
        <Image src={img3} alt="" className="img3_PicRecip"></Image>
        <Image src={img4} alt="" className="img4_PicRecip"></Image>
        <Image src={img5} alt="" className="img5_PicRecip"></Image>

        </div>

    </div>

    <div className="MainText_Recip">

        <div className="Full_Details">

            <div className="All_Rating">
                <div className="Rating_With_Number"><span>4.5</span></div>
                <button className="Make_Rate">Rate</button>
            </div>

            <div className="Title_Recipe"> 
             <span>Cheesy Samosa Puffs</span> 
            </div> 

            <br/>

            <div className="Author_Date">
            <div className="Author_Recipe"><span>BY RACHEL GURJAR</span></div>
            <div className="Date_Recipe"><span>October 18, 2023</span></div>
           
            </div>

            <br/>

            <div className="Summary_Recipe">
                <span> Snacks are a crucial component of every Diwali party, and these
                       samosa puffs increase the fun factor, with light and crispy pastry
                       encasing a soft, cheesy interior. The cheddar cheese melts into the
                       spiced potato mash once baked. Serve with your choice of hot sauce or 
                       green chutney for an added punch, and this is sure to become one of
                       your favorite Diwali recipes.
                </span>
            </div>



            <div className="Full_Setps_Recipe">

                <div className="MakingSteps"><span>Making steps</span></div>
                <br/>

                <div className="steps">

                    <span>Step 1</span>
                    <br/>
                    <p>Place a rack in middle of oven; preheat to 400°. Place potatoes in a
                        medium saucepan and pour in cold water to cover by 1 . Season
                        generously with salt and bring to a boil. Reduce heat and simmer until 
                        potatoes are very tender, 25–30 minutes. Drain potatoes and let sit until
                         cool enough to handle.
                    </p>

                </div>

                <br/>

                <div className="steps">
                    <span>Step 2</span>
                    <br/>
                    <p>Peel potatoes, then place in a large bowl and mash with a potato masher or fork until mostly smooth with some pea-size pieces remaining.</p>
                </div>
                <br/>

                <div className="steps">
                    <span>Step 3</span>
                    <br/>
                    <p>Heat oil in a medium nonstick skillet over medium. Cook cumin seeds, mustard seeds, and asafetida, stirring, until fragrant, about 10 seconds. Add chile and ginger and cook, stirring, until softened, about 30 seconds. Stir in coriander, turmeric, and 1 Tbsp. plus 1½ tsp. Diamond Crystal or 2¾ tsp. Morton kosher salt; cook, stirring, until fragrant, about 1 minute. Add potatoes and mix until spiced oil is thoroughly incorporated. Return potato mixture to bowl and let cool.</p>
                </div>

                <br/>

                <div className="steps">
                    <span>Step 4</span>
                    <p>Stir cheese, cilantro, lime juice, garam masala, and sugar into potato mixture. Taste and season with more salt if needed.</p>
                </div>

                <br/>
            </div>

            <br/>

            
        </div>

        <div className="Ingredients">

            <div className="Title_Ingredients">
                <span>Ingredients</span>
            </div>

            <div className="Mian_Ingredients">

                <div className="Text_Ingredients"><span>1 lb. russet potatoes (about 2 large), scrubbed</span></div>
                <div className="Text_Ingredients"><span>1 Tbsp. plus 1½ tsp. Diamond Crystal or 2¾ tsp. Morton kosher salt, plus more</span></div>
                <div className="Text_Ingredients"><span>2 Tbsp. avocado oil or vegetable oil</span></div>
                <div className="Text_Ingredients"><span>½ tsp. cumin seeds</span></div>
                <div className="Text_Ingredients"><span>½ tsp. mustard seeds</span></div>
                <div className="Text_Ingredients"><span>⅛ tsp. asafetida</span></div>
                <div className="Text_Ingredients"><span>6 oz. cheddar, cut into ¼ cubes</span></div>
                <div className="Text_Ingredients"><span>½ tsp. ground turmeric</span></div>

            </div>

        </div>
    </div>

</div>
)
}

export default Recipedetails