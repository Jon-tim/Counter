"use strict";

let countEl = document.querySelector(".count");
let addEl = document.querySelector(".add");
let removeEl = document.querySelector(".remove");
let resetEl = document.querySelector(".reset");
let saveEl = document.querySelector(".save");
let peoplecameEl = document.querySelector(".peoplecame");
let savedpeopleEl = document.querySelector(".savedpeople");

let count = 0;
//
// Functions
const resetcounter = function () {
  count = 0;
  countEl.textContent = 0;
  savedpeopleEl.classList.add("hidden");
  peoplecameEl.classList.remove("hidden");
  addEl.classList.remove("hidden");
  removeEl.classList.remove("hidden");
};
const addPeople = function () {
  removeEl.style.opacity = "1";
  count++;
  countEl.textContent = count;
};

const removePeople = function () {
  if (countEl.innerHTML > 0) {
    count--;
    countEl.textContent = count;
  } else if (countEl.innerHTML == 0) {
    removeEl.style.opacity = "0.5";
  }
};

const savePeople = function () {
  savedpeopleEl.classList.remove("hidden");
  peoplecameEl.classList.add("hidden");
  addEl.classList.add("hidden");
  removeEl.classList.add("hidden");
};

// Click events
addEl.addEventListener("click", addPeople);

removeEl.addEventListener("click", removePeople);

resetEl.addEventListener("click", resetcounter);

saveEl.addEventListener("click", savePeople);
