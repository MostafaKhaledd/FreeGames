let datalist = []
let details = []

async function getData(type) {

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e78965ac92msh568a7c0342392fcp11784djsnb0a7ada84f9e',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

  let res = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${type}`, options)
  let data = await res.json()
  console.log(data)
  datalist = data
  display()
}
getData("mmorpg")




function display() {
  let temp = ""
  datalist.forEach((element) => {
    temp += `<div class="col">
        <div class="card h-100" data_id="${element.id}">
          <img src="${element.thumbnail}" class="card-img-top pt-2 ps-2 pe-2" alt="...">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <h6 class="card-title text-light fs_smail">${element.title}</h6>
              <button type="button" class="btn btn-primary fs_ssmail">Free</button>
            </div>
            <p class="card-text color_muted fs_ssmail text-center p-1"> ${element.short_description.split(" ", 8)}</p>
          </div>
          <div class="card-footer d-flex justify-content-between">
            <small class=" text-light fs_sssmail border_v">${element.genre}</small>
            <small class=" text-light fs_sssmail border_v">${element.platform}</small>
          </div>
        </div>
      </div>`
  })
  document.getElementById("Mygames").innerHTML = temp
  card = document.querySelectorAll(".card")
  console.log(card)
  for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", function () {
  $(".landing").fadeIn()
      let type = this.getAttribute("data_id")
      $("#gamesdetails").removeClass("d-none")
      $("#games").addClass("d-none")
      getdetails(type)
      loading()
    })
  }
}

let navlink = document.querySelectorAll(".nav-link")
for (let i = 0; i < navlink.length; i++) {
  navlink[i].addEventListener("click", function () {
    $(".landing").fadeIn()
    let type = this.getAttribute("typeOfgame")
    console.log(type)
    loading()
    getData(type)
  })
}

$(".nav-link").click(function () {
  $(this).addClass("active")
  $(".nav-link").not(this).removeClass("active")

})




$(document).ready(loading())
function loading() {
  $(".landing").fadeOut(1000)
}









let card = []

async function getdetails(type) {


  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e78965ac92msh568a7c0342392fcp11784djsnb0a7ada84f9e',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

  let res = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${type}`, options)
  let data = await res.json()
  console.log(data)
  details = data
  showdetails()
}
getdetails(452)




function showdetails(){

  let temp=""
  
      temp=`<div class="col-lg-4" id="gameimg">
      <img src="${details.thumbnail}" class="w-100" alt="">
              </div>
              <div class="col-lg-8">
                <h4 class="text-white">Title: ${details.title}</h4>
                <p class="text-white fs_ssmail">Category: <span class="border_i text-dark ">${details.genre}</span></p>
                <p class="text-white fs_ssmail">Platform: <span class="border_i text-dark ">${details.platform}</span></p>
                <p class="text-white fs_ssmail">Status: <span class="border_i text-dark ">${details.status}</span></p>
                <p class="text-white fs_ssmail align">${details.description}</p>
                <a href="${details.game_url}" target="_blank"><button type="button" class="btn btn-outline-warning">Show Game</button></a>
              </div>`
  document.getElementById("gameDetails").innerHTML=temp
  }



$(".btn-close").click(function (){ 
  $("#gamesdetails").addClass("d-none")
  $("#games").removeClass("d-none")
})

