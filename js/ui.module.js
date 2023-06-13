 export class Ui {
   getGames(response) {


      this.cartona = ''
   
      for (var i =0;i<response.length;i++){
     this.cartona += `
        <div class="col-md-3  position-relative" "    >
        <div class="card h-100 d-flex " id="${response[i].id}" " >
          <img src="${response[i].thumbnail}" class="card-img-top" alt="...">
          <div class="card-body position-relative">
    
  <button class="freeBtn position-absolute top-0 end-0 m-3 px-2"> Free</button>

          <h5 class="card-title">${response[i].title}</h5>
            <p class="card-text ">${response[i].short_description}</p>
           </div>
           <div class="specDetails   p-4 w-100 d-flex align-items-end align-content-end align-self-end flex-wrap justify-content-between">
           <a href="#" class="btn  fs-6">${response[i].genre}</a>
           <a href="#" class="btn">${response[i].platform}</a>
         </div>
         
           </div>
      </div>`
             }

             document.getElementById("game").innerHTML = this.cartona
   }

   getDetails(response) {
      this.cartona =`  
      

      <div class="col-md-4 pt-5 ">
      <img src="${response.thumbnail} " class="w-100"  alt="">
            </div>
            <div class="col-md-8 fs-5 text-white  pt-5">
              <h3>${response.title}</h3>
              <p> category: <button> ${response.genre}</button></p>
              
              <p> Platform: <button> ${response.platform}</button></p>
              
              <p > Status: <button> ${response.status}</button></p>
              
              <p class="fs-6"> description: ${response.description}</span></p>
            <button class="detailsBtn py-2">
            <a href="${response.game_url}" target="_blank"> show game</a></button>
          </div>
       
      ` 
      document.getElementById("details").innerHTML = this.cartona
        }
}
