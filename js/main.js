'use strict'

import creaElementi from "./library/creaElementi.js";
import selectionSort from "./library/selectionSort.js";
import bubbleSort from "./library/bubbleSort.js";

const elements = document.getElementById('elements').children;
const generaArrayBtn = document.getElementById("genera-array")
const startBtn = document.getElementById("start-button");
const selectSortingAlgo = document.getElementById("algoritmi");

let algorithm = selectSortingAlgo.value
let speed = document.getElementById("velocita").value
let arr = [];
let isRunning = false;

arr = creaElementi(elements)

// Event Listeners

generaArrayBtn.addEventListener("click", (e) => {
  if(isRunning) return;
  arr = creaElementi(elements);
});

startBtn.addEventListener("click", async (e) => {
  if(isRunning) return;
  algorithm = selectSortingAlgo.value
  speed = document.getElementById("velocita").value

  if (algorithm == "null") {
    alert("Seleziona un algoritmo")
    return
  }
  if (speed == "null") {
    alert("Selezionare velocità")
    return
  }

  isRunning = true;

  generaArrayBtn.style.backgroundColor = "gray"
  selectSortingAlgo.style.backgroundColor = "gray";
  startBtn.style.backgroundColor = "gray";

  generaArrayBtn.disabled = true;
  selectSortingAlgo.disabled = true;
  startBtn.disabled = true;

  if (algorithm == "selection-sort") await selectionSort(arr, elements);
  else if (algorithm == "bubble-sort") await bubbleSort(arr, elements)

  isRunning = false;

  generaArrayBtn.style.backgroundColor = "rgb(86, 234, 250)"
  selectSortingAlgo.style.backgroundColor = "rgb(86, 234, 250)";
  startBtn.style.backgroundColor = "rgb(86, 234, 250)";

  generaArrayBtn.disabled = false;
  selectSortingAlgo.disabled = false;
  startBtn.disabled = false;
});