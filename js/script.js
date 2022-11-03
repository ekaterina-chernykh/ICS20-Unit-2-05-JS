// Created by: Ekaterina
// Created on: Oct 2022
// This file contains the JS function for index.html

"use strict"
/**
 * This function calculates tax.
 */
function calculate() {
  // constant
  const TAX_RATE = 0.18

  // input
  const worked = parseFloat(document.getElementById("number-of-hours").value)
  const rate = parseFloat(document.getElementById("hourly-rate").value)

  // process
  const pay = worked * rate * (1 - TAX_RATE)
  const tax = worked * rate * TAX_RATE

  // output
  document.getElementById("pay").innerHTML =
    "Your pay will be $" + pay.toFixed(2)
  document.getElementById("tax").innerHTML =
    "The govenment will take $" + tax.toFixed(2)
}
