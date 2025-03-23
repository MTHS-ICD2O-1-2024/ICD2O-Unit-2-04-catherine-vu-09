// Copyright (c) Catherine Vu All rights reserved
//
// Created by: Catherine Vu
// Created on: March 21 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a triangle.
 */
 // process

function calculateArea() {
    // Get base and height values
    let base = document.getElementById('base').value;
    let height = document.getElementById('height').value;
    let result = document.getElementById('result');

    // Check if base and height are provided and are valid numbers
    if (base && height && !isNaN(base) && !isNaN(height)) {
      // Convert values to numbers
      base = parseFloat(base);
      height = parseFloat(height);

      // Calculate area of the triangle
      let area = 0.5 * base * height;  // Correct formula for area of a triangle

      // Display the result
      result.innerText = "Area is: " + area + " cm²";
    } else {
      // If base or height is missing or invalid
      result.innerText = "Please enter valid numbers for both base and height.";
    }
  }
  


