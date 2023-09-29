// Baby Names Data (Top 50 Boy/Girl 2022)
// Baby Center (babycenter.com)
// https://www.babycenter.com/baby-names/most-popular/top-baby-names#popularNameList

// Variables for html elements
let goBtn = document.getElementById("go-btn");
let menuSelect = document.getElementById("menu-select");
let container = document.getElementById("container");
let nameCountSpan = document.getElementById("name-count");

// Initialize Array of Character Objects from json file
let babyData = [];
fetch("baby-names-data.json")
  .then((res) => res.json())
  .then((data) => (babyData = data));

// Event Listener on Go Button
goBtn.addEventListener("click", goBtnClicked);

// Process Go Button Click
function goBtnClicked() {
  // Get Menu Selection
  let selection = menuSelect.value;

  // Process Menu Selection
  if (selection === "display-all") {
    displayAll();
  } else if (selection === "gender") {
    searchGender();
  } else if (selection === "rank") {
    searchRank();
  } else if (selection === "starting-letter") {
    searchStartingLetter();
  } else if (selection === "length") {
    searchLength();
  }
}

// Display All Baby Names
function displayAll() {
  console.log("Display All");

  let nameNumber = 0;

  nameCountSpan.innerHTML = ``;
  container.innerHTML = ``;

  for (let i = 0; i < babyData.length; i++) {
    nameNumber++;
    nameCountSpan.innerHTML = `${nameNumber}`;
    container.innerHTML += `<b>${babyData[i].name}</b> (Rank: ${babyData[i].rank}, Gender: ${babyData[i].gender})<br>`;
  }

  // Confirm data load
  console.log(babyData);
}

// Display Names by Gender
function searchGender() {
  console.log("Search By Gender");

  let gender = prompt("Please enter gender (Boy/Girl):").toLowerCase;
  let nameNumber = 0;

  nameCountSpan.innerHTML = ``;
  container.innerHTML = ``;

  for (let i = 0; i < babyData.length; i++) {
    if (babyData[i].gender.toLowerCase === gender) {
      nameNumber++;
      nameCountSpan.innerHTML = `${nameNumber}`;
      container.innerHTML += `<b>${babyData[i].name}</b> (Rank: ${babyData[i].rank}, Gender: ${babyData[i].gender})<br>`;
    }
  }
}

// Display Names within a Range of Ranks
function searchRank() {
  console.log("Search By Rank");

  let rankMin = +prompt("Please enter minimum rank:");
  let rankMax = +prompt("Please enter maximum rank:");
  let nameNumber = 0;

  nameCountSpan.innerHTML = ``;
  container.innerHTML = ``;

  for (let i = 0; i < babyData.length; i++) {
    if (babyData[i].rank >= rankMin && babyData[i].rank <= rankMax) {
      nameNumber++;
      nameCountSpan.innerHTML = `${nameNumber}`;
      container.innerHTML += `<b>${babyData[i].name}</b> (Rank: ${babyData[i].rank}, Gender: ${babyData[i].gender})<br>`;
    }
  }
}

// Display Names with Starting Letter
function searchStartingLetter() {
  console.log("Search by Starting Letter");
  
  let startingLetter = prompt("Please enter starting letter:");
  let nameNumber = 0;

  nameCountSpan.innerHTML = ``;
  container.innerHTML = ``;

  for (let i = 0; i < babyData.length; i++) {
    if (`${babyData[i].name}`.startsWith(`${startingLetter}`)) {
      nameNumber++;
      nameCountSpan.innerHTML = `${nameNumber}`;
      container.innerHTML += `<b>${babyData[i].name}</b> (Rank: ${babyData[i].rank}, Gender: ${babyData[i].gender})<br>`;
    }
  }
}

// Display Names with a Specific Length
function searchLength() {
  console.log("Search by Name Length");

  let nameLength = +prompt("Please enter name length:");
  let nameNumber = 0;

  nameCountSpan.innerHTML = ``;
  container.innerHTML = ``;

  for (let i = 0; i < babyData.length; i++) {
    if (babyData[i].name.length === nameLength) {
      nameNumber++;
      nameCountSpan.innerHTML = `${nameNumber}`;
      container.innerHTML += `<b>${babyData[i].name}</b> (Rank: ${babyData[i].rank}, Gender: ${babyData[i].gender})<br>`;
    }
  }
}
