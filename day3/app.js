// ques 1
function printRightAngleTraingle(n) {
  for (let r = 1; r <= n; r++) {
    let str = ""
    for (let c = 1; c <= r; c++) {
      str = str + "*"
    }
    console.log(str)
  }
}

// printRightAngleTraingle(15)

// ques 2
function printInvertedRightAngleTraingle(n) {
  for (let r = 1; r <= n; r++) {
    let str = ""
    for (let c = n - r + 1; c >= 1; c--) {
      str = str + "*"
    }
    console.log(str)
  }
}

// printInvertedRightAngleTraingle(5)

// ques 3
function printPyramidPattern(n) {
  for (let r = 1; r <= n; r++) {
    let str = ""
    for (let c = 1; c <= n; c++) {
      if (c <= n - r) {
        str = str + " "
      } else {
        str = str + "*"
      }
    }
    for (let c = 0; c <= r - 1; c++) {
      if (c === 0) {
        continue
      }
      str = str + "*"
    }
    // for (let c = 1; c < r; c++) {
    //   str = str + "*"
    // }
    console.log(str)
  }
}

// printPyramidPattern(5)

// ques 4
function printInvertedPyramidPattern(n) {
  for (let r = n; r > 0; r--) {
    let str = ""
    for (let c = 1; c <= n; c++) {
      if (c <= n - r) {
        str = str + " "
      } else {
        str = str + "*"
      }
    }
    for (let c = 0; c <= r - 1; c++) {
      if (c === 0) {
        continue
      }
      str = str + "*"
    }
    // for (let c = 1; c < r; c++) {
    //   str = str + "*"
    // }
    console.log(str)
  }
}

// printInvertedPyramidPattern(5)

// ques 5
function printSqr(n) {
  for (let r = 1; r <= n; r++) {
    let str = ""

    for (let c = 1; c <= n; c++) {

      if (r === 1 || r === n) {
        str = str + "*"
      }
      else if (c === 1 || c === n) {
        str = str + "*"
      }
      else {
        str = str + " "
      }
    }
    console.log(str)

  }
}
// printSqr(5)

// ques 6
function printHollowPyramidPattern(n) {
  for (let r = 1; r <= n; r++) {
    let str = ""
    for (let c = 1; c <= 9; c++) {
      if (r + c === 6 || r === n || c - r === 4) {
        str = str + "*"
      }
      else {
        str = str + " "
      }
    }
    console.log(str)
  }
}

// printHollowPyramidPattern(5)

// ques 7
function printAlternatingBinaryTriangle(n) {
  for (let r = 1; r <= n; r++) {
    let str = ""
    for (let c = 1; c <= n; c++) {
      if (r >= c) {
        if ((r + c) % 2 === 0) {
          str = str + "1"
        } else {
          str = str + "0"
        }
      }
    }
    console.log(str)
  }
}
// printAlternatingBinaryTriangle(5)