// Copyright (c) Catherine Vu All rights reserved
//
// Created by: Catherine Vu
// Created on: March 21 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a triangle.
 */
function calculateArea() {
    let base = document.getElementById('base').value;
    let height = document.getElementById('height').value;
    let result = document.getElementById('result');

    if (base > 0 && height > 0) {
        let area = 0.5 * base * height;
        result.innerText = "Area is: " + area + " cm²";
        result.style.color = "#333"; // Default color for result
    } else {
        result.innerText = "Please enter valid positive numbers.";
        result.style.color = "red"; // Change text color if input is invalid
    }


}

