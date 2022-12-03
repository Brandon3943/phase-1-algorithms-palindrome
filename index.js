isPalindrome('hannah')

function isPalindrome(word) {
  // Write your algorithm here
  for (let i = 0, j = word.length - 1; i < word.length; i++, j--) {
    if(word[i] !== word[j]) {
      return false;
    } 
  }

  return true;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

// Rewrite the Problem in Your Own Words
//write function that detects if strings are palaendrones.

// Write Your Own Test Cases
//racecar, panama, hannah, sushi
// Pseudocode
//1, loop through string 2, compare first and last characters to be T/F 3, if true continue to next charater and if false end loop and reuturn false
// Code
// Make It Clean and Readable
// Optimize