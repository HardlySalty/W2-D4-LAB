let heroContainer = document.querySelector("#hero-container")
let bossContainer = document.querySelector("#boss-container")
let mainContainer = document.querySelector("main")
let goldContainer = document.querySelector("#gold")
let gold = 0

mainContainer.addEventListener("click", dealBossDamage)

let heroArr = [
  {name: "Andrew", alive: true, curHealth: 10, maxHealth: 100, attack: 10, level: 0},
  {name: "Hayden", alive: true, curHealth: 10, maxHealth: 120, attack: 8, level: 0},
  {name: "Scott", alive: true, curHealth: 10, maxHealth: 60, attack: 15, level: 0},
]

let bossArr = [
  {name: "Ghosty Boi", curHealth: 100, maxHealth: 100, attack: 5, level: 1}
]


function drawAvatar(){

  let heroTemplate = ''
  heroArr.forEach(e => {
    if(e.alive){
      heroTemplate += 
      `
      <div>
        <p class="text-danger fs-2 text-center fw-bold">${e.curHealth}<span class="text-light fs-5"></span><span class="text-success fs-5">/${e.maxHealth}</span><br>${e.name}</p>
        <img src="./Character1_aseprite_aseprite.gif" class="hero">
      </div>
      ` 
    }else{
      let deadHero = heroArr.findIndex(hero => hero.alive == false)
      heroArr.splice(deadHero, 1)
    }
  })
  checkAlive()

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

function checkAlive(){
  heroArr.forEach(e => {
    if(e.curHealth <= 0){
      e.alive = false
    }
  })
}

function dealBossDamage(){
  let curBoss = bossArr[0]

  let damage = 0
  heroArr.forEach(e => {
    damage += e.attack
  })

  curBoss.curHealth -= damage
  if(curBoss.curHealth <= 0){
    drawGold()
    curBoss.level++
    curBoss.attack += 5
    curBoss.maxHealth += 150
    curBoss.curHealth = curBoss.maxHealth
    heroArr.forEach(e => {
      e.curHealth = e.maxHealth
    })
  }
  drawAvatar()
}

function dealHeroDamage(){
  let curBossAttack = bossArr[0].attack
  let randomNum = Math.floor(Math.random() * heroArr.length)
  if(heroArr.length > 0){
    while(heroArr.length-1 > 0 && heroArr[randomNum].curHealth <= 0){
      randomNum = Math.floor(Math.random() * heroArr.length-1)
    }
  }else{
    window.close()
  }
  heroArr[randomNum].curHealth -= curBossAttack
  
  drawAvatar()
}

function drawGold(){
  gold += 100
  goldContainer.innerText = "Gold: " + gold
}

if(heroArr.length-1 > 0){
  setInterval(dealHeroDamage, 700)
}else{
}

drawAvatar()