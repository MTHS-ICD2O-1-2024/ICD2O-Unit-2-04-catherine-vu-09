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
          
        }
            const baseTriangle = document.querySelector('base').value;
            const heightTriangle = document.querySelector('height').value;


            
            let base = document.getElementById('base').value;
            
            let height = document.getElementById('height').value;
            if (base > 0 && height > 0) {
                let area = 0.5 * base * height;
                parseFloat(document.getElementById('result')).innerText = "Area is: " + area + " cm²";
            } else {
                parseFloat(document.getElementById('result')).innerText = "Please enter valid positive numbers.";
            }
