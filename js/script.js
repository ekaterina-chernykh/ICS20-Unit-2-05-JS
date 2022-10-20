// Created by: Ekaterina
// Created on: Oct 2022
// This file contains the JS function for index.html

"use strict"
/**
 * This function calculates XXX.
 */
function calculate() {
  // input
  const worked = parseFloat(document.getElementById("number-of-hours").value)
  const rate = parseFloat(document.getElementById("hourly-rate").value)

  // process
  const pay = worked * rate
  const tax = pay * 0.13

  // output
  document.getElementById("pay").innerHTML =
    "Your pay will be $" + pay.toFixed(2)
  document.getElementById("tax").innerHTML =
    "The govenment will take $" + tax.toFixed(2)
}
