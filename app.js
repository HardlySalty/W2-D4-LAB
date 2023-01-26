let heroContainer = document.querySelector("#hero-container")
let bossContainer = document.querySelector("#boss-container")

let heroArr = [
  {name: "Andrew", curHealth: 100, maxHealth: 100, attack: 10, level: 0},
  {name: "Hayden", curHealth: 120, maxHealth: 120, attack: 8, level: 0},
  {name: "Scott", curHealth: 60, maxHealth: 60, attack: 15, level: 0},
]

let bossArr = [
  {name: "Ghosty Boi", curHealth: 100, maxHealth: 100, attack: 5, level: 1}
]


function drawAvatar(){
  let heroTemplate = ''
  heroArr.forEach(e => {
    heroTemplate += 
    `
    <div>
      <p class="text-danger fs-2 text-center fw-bold">${e.curHealth}<span class="text-light fs-5"></span><span class="text-success fs-5">/${e.maxHealth}</span><br>${e.name}</p>
      <img src="./Character1_aseprite_aseprite.gif" class="hero">
    </div>
    `
  })

  let bossTemplate = ''
  bossArr.forEach(e => {
    bossTemplate += 
    `
    <p class="text-danger fs-2 text-center fw-bold ps-5">${e.curHealth}<span class="text-light fs-5"></span><span class="text-success fs-5">/${e.maxHealth}</span><br>${e.name}</p>
    <img src="./Ghosty.gif" height="500" alt="">
    `
  })

  bossContainer.innerHTML = bossTemplate
  heroContainer.innerHTML = heroTemplate
}

drawAvatar()