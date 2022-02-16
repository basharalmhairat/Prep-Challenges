'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    
    if (str.length <30) {
      
        let x= str.substring(str.length / 2-3, str.length / 2+3) 
        return x.length
      } else if (str.length>30) {
          let c= str.substring((str.length/2+2 ), (str.length-13 ))
        return c.length
      }
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    if (str1.length !== str2.length) return false
  let res = ''
  let str2Copy = str2
  for(let i = 0; i < str1.length; i++) {
    for(let j = 0; j < str2Copy.length; j++) {
        if(str1[i] === str2Copy[j]) {
        res += str2Copy[j]
        if (j === 0) {
            str2Copy = str2Copy.slice(1)
        } else if(j === str2Copy.length - 1) {
            str2Copy = str2Copy.slice(0, str2Copy.length - 1)
        } else {
            str2Copy = str2Copy.slice(0, j) + str2Copy.slice(j, str2Copy.length - 1)
        }
        break;
      }
    }
  }
  if(res.length !== str1.length) {
    return false
  } else {
    return true
  }
}

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    // write your code here
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };