import {Details} from "./details.module.js";
import {Ui} from "./ui.module.js";

export class allGames {
   constructor() {
      this.getGames('mmorpg')
      this.ui = new Ui();

      document.querySelectorAll(".nav-link").forEach((item)=>{
         
      item.addEventListener("click",()=>{
      const itemId= item.id
         
      document.querySelectorAll(".nav-link").forEach((nav) => {
            
       nav.classList.remove("active")           
      })  

      item.classList.add("active")
      this.getGames(itemId);

 
   })
})    
   }



   
   async getGames(i) {
     
      const loading = document.querySelector(".loading");
      loading.classList.add("d-none");

      const options = {
         method: 'GET',
         headers: {
           'X-RapidAPI-Key': 'a0da1107demshef77fb2c17d3654p1ef696jsn2fdce0b6bd46',
           'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
         }
       };
        
       const tagapi = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${i}`, options)
       const response = await tagapi.json(); 
      
      this.ui.getGames(response);
      this.getDetails();
      // loading.classList.add("d-none");

        }

   getDetails() {
      document.querySelectorAll(".card").forEach((item) => {
         item.addEventListener("click", () => {
            
            const id = item.id;
            this.switch(id);
      

         });
      });
   }

   switch(idGame) {
      const details = new Details(idGame);
      
      document.querySelector("#game").classList.add("d-none");
      document.querySelector("#details").classList.remove("d-none");
      
   }
}



