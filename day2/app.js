// _____Practice Challenge Set 1_____

// ques 1
function maxNum(...arr) {
  let max = null
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i])
  }
  return max;
}
// console.log(maxNum(2,4,11,123,66,7,4,8,9,33,66,11,-65,44,12))

// ques 2
function checkNum(n) {
  return n == 0 ? "zero" : (n > 0 ? "positive" : "negative")
}
// console.log(checkNum(44))

// ques 3 ??
function electricityBillCal(n) {

}

// ques 4
function checkVowel(char) {
  const lowerChar = char.toLowerCase()

  return (lowerChar === 'a' ? "Vowel" :
    lowerChar === 'e' ? "Vowel" :
      lowerChar === 'i' ? "Vowel" :
        lowerChar === 'o' ? "Vowel" :
          lowerChar === 'u' ? "Vowel" :
            "Consonant")
}
// console.log(checkVowel(''))


// ques 5 yes leaning
function isLeapYear(n) {
  if (n % 400 === 0) {
    console.log('century year + leap year')
    return true
  }
  else if (n % 4 === 0 && n % 100 !== 0) {
    console.log('leap year')
    return true
  }
  return false
}
// console.log(isLeapYear(1800))



// _____Practice Challenge Set 2_____

// ques 1 yes learning
function checkInput(n) {
  const value = "s".charCodeAt(0)

  // wrong way to write
  // if (48 <= value >= 57) "Digit"
  // if (65 <= value >= 90) "Uppercase Letter"
  // if (97 <= value >= 122) "Lowercase Letter"
  // return "Special Character"

  // right way 
  if (48 <= value && value <= 57) return "Digit";
  if (65 <= value && value <= 90) return "Uppercase Letter";
  if (97 <= value && value <= 122) return "Lowercase Letter";
  return "Special Character";
}
// console.log(checkInput('f'))

// ques 2 yes learning
function checkTriangle(a, b, c) {
  if (a * a + b * b === c * c) return "Right-angled"
  if (a === b && b === c && c === a) return "Equilateral"
  if ((a === b) || (b === c) || (c === a)) return "Isosceles"
  return "Scalene"
}
// console.log(checkTriangle(45, 45, 5))

// ques 3 ??