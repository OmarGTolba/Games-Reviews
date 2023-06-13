import {Ui} from "./ui.module.js";



export class Details {



   constructor(id){
      this.ui = new Ui
       this.display(id)

      
         document.getElementById("navbar").classList.add("d-none")
         document.getElementById("backgroundImg").classList.add("d-none")
    
      

         document.getElementById("detailsContainer").classList.remove("d-none")      

      document.getElementById("btnClose").addEventListener("click", this.close.bind(this))
   }
   
close(){

   document.getElementById("details").classList.add("d-none")      
            
   document.getElementById("detailsContainer").classList.add("d-none")      

   document.getElementById("backgroundImg").classList.remove("d-none")
   document.getElementById("navbar").classList.remove("d-none")
   
   document.getElementById("game").classList.remove("d-none")      }



    
    display(i){
    this.fetchApi(i)
  
  }
  async  fetchApi(i){
   const loading = document.querySelector(".loading");
   loading.classList.remove("d-none");

   const options = {
      method: 'GET',
      headers: {
         'X-RapidAPI-Key': 'a0da1107demshef77fb2c17d3654p1ef696jsn2fdce0b6bd46',
         'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
   };
     
    const tagapi = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${i}`, options)
    const response = await tagapi.json(); 
    this.ui.getDetails(response)
    loading.classList.add("d-none");
  
  }
  
  }
  



