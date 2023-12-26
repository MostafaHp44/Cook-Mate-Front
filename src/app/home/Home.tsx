import React from "react"
import NavBar from "./NavBar"
import Image from "next/image"
import pop_food from './assest/popfood.png'
import './Home.css'
import SearchIcon from '@mui/icons-material/Search';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import foodone from './assest/Image.png'
import foodetwo from './assest/food1.png'
import { Rating } from '@mantine/core';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  /** Put your mantine theme override here */
});






const Homee=()=>{

    return(
        <MantineProvider theme={theme}>

        
        <main className=" grid">

            <NavBar/>

             <div className="MainHome">
                
              <section className="SecOne">

                  <div className="Main_View">

                       <div className="Main_Text_Input">

                          <div className="MainText">
         <span className="GreatingUser">Hello User</span>
         <br/>
         <span className="StatusText">What are you cooking today?</span>
         <br/>
    
                          </div>
                          <br/>
                          <div className="MainInput">

<select className="SearchWord">
  <option value="Recipe name" className="KeyWordSearch">Recipe name</option>
  <option value="Recipe name" className="KeyWordSearch">Recipe name</option>
  <option value="Recipe name" className="KeyWordSearch">Recipe name</option>
  <option value="Recipe name" className="KeyWordSearch">Recipe name</option>
</select>

<input  type="text"  placeholder="Search for new Recipes" className="SearchInput"></input>

<div className="SearchLogo">{}
</div>

                          </div>
                       </div>

                      <div className="Pop_Food">
                         <Image src={pop_food} alt="" className="Pop_Food" ></Image>
                          <div className="Tilte_Pop_Food"><span>Shrimp Chicken Andouille Jambalaya</span></div>
                          <div className="Rating_Pop_Food"><Rating defaultValue={2} count={1}/><span>4.5</span></div></div>

                </div>

              </section>

              <section className="SecTwo">

                <div className="Filter">

    <div className="TypeFilter">

        <button className="All">All Recipes</button>
        <button className="TF">Arabian</button>
        <button className="TF">Asian</button>
        <button className="TF">Italian</button>
        <button className="TF">Indian</button>
        <button className="TF">Chinese</button>


    </div>

    <div className="FilterBy">
        <button className="FB">Filter By</button>
    </div>
    
                </div>

                <div className="Cardsof_Food">
    
   <div className="Card_Food">
    
    <div className="veiw_food">
        <Image src ={foodone} alt="" className="imgfood"></Image>
        <div className="ratingfood">
         <div> 
          
             </div> <Rating defaultValue={2} count={2} /> <span> 4.5</span>
        </div>
    </div>

    <div className="Tilteof_food">
        <span>Classic Greek Salad</span>
    </div>

    <div className="TimeText">
                <span>Time</span>
    </div>

    <div className="detailsof_food">

        <div className="Time">

        

           <div className="TimeNumber">
                <span>15 Mins</span>
           </div>

        </div>
      
           <div className="SaveIt">
       
           </div>
    </div>
   </div>


   <div className="Card_Food">
    
    <div className="veiw_food">
        <Image src ={foodone} alt="" className="imgfood"></Image>
        <div className="ratingfood">
         <div> 
          
             </div> <Rating defaultValue={2} count={2} /> <span> 4.5</span>
        </div>
    </div>

    <div className="Tilteof_food">
        <span>Classic Greek Salad</span>
    </div>

    <div className="TimeText">
                <span>Time</span>
    </div>

    <div className="detailsof_food">

        <div className="Time">

        

           <div className="TimeNumber">
                <span>15 Mins</span>
           </div>

        </div>
      
           <div className="SaveIt">
       
           </div>
    </div>
   </div>

   <div className="Card_Food">
    
    <div className="veiw_food">
        <Image src ={foodone} alt="" className="imgfood"></Image>
        <div className="ratingfood">
         <div> 
          
             </div> <Rating defaultValue={2} count={2} /> <span> 4.5</span>
        </div>
    </div>

    <div className="Tilteof_food">
        <span>Classic Greek Salad</span>
    </div>

    <div className="TimeText">
                <span>Time</span>
    </div>

    <div className="detailsof_food">

        <div className="Time">

        

           <div className="TimeNumber">
                <span>15 Mins</span>
           </div>

        </div>
      
           <div className="SaveIt">
       
           </div>
    </div>
   </div>

   <div className="Card_Food">
    
    <div className="veiw_food">
        <Image src ={foodone} alt="" className="imgfood"></Image>
        <div className="ratingfood">
         <div> 
          
             </div> <Rating defaultValue={2} count={2} /> <span> 4.5</span>
        </div>
    </div>

    <div className="Tilteof_food">
        <span>Classic Greek Salad</span>
    </div>

    <div className="TimeText">
                <span>Time</span>
    </div>

    <div className="detailsof_food">

        <div className="Time">

        

           <div className="TimeNumber">
                <span>15 Mins</span>
           </div>

        </div>
      
           <div className="SaveIt">
       
           </div>
    </div>
   </div>

   <div className="Card_Food">
    
    <div className="veiw_food">
        <Image src ={foodone} alt="" className="imgfood"></Image>
        <div className="ratingfood">
         <div> 
          
             </div> <Rating defaultValue={2} count={2} /> <span> 4.5</span>
        </div>
    </div>

    <div className="Tilteof_food">
        <span>Classic Greek Salad</span>
    </div>

    <div className="TimeText">
                <span>Time</span>
    </div>

    <div className="detailsof_food">

        <div className="Time">

        

           <div className="TimeNumber">
                <span>15 Mins</span>
           </div>

        </div>
      
           <div className="SaveIt">
       
           </div>
    </div>
   </div>

   <div className="Card_Food">
    
    <div className="veiw_food">
        <Image src ={foodone} alt="" className="imgfood"></Image>
        <div className="ratingfood">
         <div> 
          
             </div> <Rating defaultValue={2} count={2} /> <span> 4.5</span>
        </div>
    </div>

    <div className="Tilteof_food">
        <span>Classic Greek Salad</span>
    </div>

    <div className="TimeText">
                <span>Time</span>
    </div>

    <div className="detailsof_food">

        <div className="Time">

        

           <div className="TimeNumber">
                <span>15 Mins</span>
           </div>

        </div>
      
           <div className="SaveIt">
       
           </div>
    </div>
   </div>

   <div className="Card_Food">
    
    <div className="veiw_food">
        <Image src ={foodone} alt="" className="imgfood"></Image>
        <div className="ratingfood">
         <div> 
          
             </div> <Rating defaultValue={2} count={2} /> <span> 4.5</span>
        </div>
    </div>

    <div className="Tilteof_food">
        <span>Classic Greek Salad</span>
    </div>

    <div className="TimeText">
                <span>Time</span>
    </div>

    <div className="detailsof_food">

        <div className="Time">

        

           <div className="TimeNumber">
                <span>15 Mins</span>
           </div>

        </div>
      
           <div className="SaveIt">
       
           </div>
    </div>
   </div>



                </div>

              </section>


            </div>


        </main>
        </MantineProvider>
    )

}
export default Homee