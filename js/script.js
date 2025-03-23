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
    let base = document.getElementById('base').value;
    let height = document.getElementById('height').value;
    let result = document.getElementById('result');

    // output
        let area = 2 * base * height;
        result.innerText = "Area is: " + area + " cm²";
    } 

