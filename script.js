let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const text = document.querySelector("#text");
const xpText= document.querySelector("#xpText");
const healthText= document.querySelector("#healthText");
const goldText= document.querySelector("#goldText");
const monsterStats= document.querySelector("#monsterStats");
const monsterName= document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const locations = [
    {
      name: "town square",
      "button text": [button1.innerText, "Parking Garage", "Fight dragon"],
      "button functions": [goStore, goCave, fightDragon],
      text: "You are in the right place."
    },
    {
        name: "store",
        "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "You enter the store."
      }
  ];

//initialize buttons

button1.onclick = goStore
button2.onclick = goCave
button3.onclick = fightDragon

function update(location) {
    button1.innerText = location["button text"][1];
    button2.innerText = "Diamond District";
    button3.innerText = "Rock Bottom";
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;
    text.innerText = "You are in the town square. You see a sign that says \"Store\".";
  }



function goTown() {
    update(locations[0]);
}

function goStore() {
    button1.innerText = "W42";
    button2.innerText = "W56";
    button3.innerText = "W37";
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
    text.innerText = "You enter the store.";
  }

function goCave() {
    button2.innerText = "W52";
}

function fightDragon() {
    button3.innerText = "W50";
}

function buyHealth() {

}
function buyWeapon() {

}


