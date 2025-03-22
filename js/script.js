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

            let input = event.target;
            let errorSpan = input.nextElementSibling;
            let validSpan = errorSpan.nextElementSibling;
            
            if (input.value === "" || isNaN(input.value) || Number(input.value) <= 0) {
                errorSpan.style.display = "block";
                validSpan.style.display = "none";
            } else {
                errorSpan.style.display = "none";
                validSpan.style.display = "block";
            
                document.getElementById("length").addEventListener("input", validateInput);
        document.getElementById("width").addEventListener("input", validateInput);
            }

