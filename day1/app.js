// --------------------------- class Questions

// ques 1
function printNum(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i)
  }
}
// printNum(5)


// ques 2
function printRevNum(n) {
  for (let i = 1; i <= n; i++) {
    console.log(n - i + 1)
  }
}
// printRevNum(5)


// ques 3
function printAllEvenNum(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i)
    }
  }
}
// printAllEvenNum(20)

// ques 4
function sumFirst_n_Num_Way1(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i
  }
  return sum
}
// console.log(sumFirst_n_Num_Way1(10))
function sumFirst_n_Num_way2(n) {
  let sum = 0;
  sum = n * (n + 1) / 2
  return sum
}
// console.log(sumFirst_n_Num_way2(10))

// ques 5
function factorialOf_n_Num(n) {
  let product = 1;
  for (let i = 1; i <= n; i++) {
    product = product * i
  }
  return product
}
// console.log(factorialOf_n_Num(5))

// ques 6
function sunOfEvenNuberUptoN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      sum = sum + i
    }
  }
  return sum
}
// console.log(sunOfEvenNuberUptoN(10))

function sum_of_all_even_num_upto_n(n) {
  let sum = 0;
  sum = 2 * n * (2 + (1 / n) + 1)
  return sum
}
// console.log(sum_of_all_even_num_upto_n(10))


function printSqrFrom_1_to_n(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i * i)
  }
}
// printSqrFrom_1_to_n(10)

// --------------------------- homeWork Questions

function numberDivisibleBy(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i)
    }
  }
  return
}
// numberDivisibleBy(30)

function sumAllOddNumWy1(n) {
  let sum = 0
  if (n === 0) sum
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      sum = sum + i
    }
  }
  return sum
}
// console.log(sumAllOddNumWy1(7))

function sumAllOddNumWy2(n) {
  if (n % 2 === 0) {
    let res = 0;
    res = n / 2 * n / 2
    return res
  } else {
    return sumAllOddNumWy1(n)
  }
}
// console.log(sumAllOddNumWy2(7))

function printCubesOfN(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i * i * i)
  }
}
// printCubesOfN(5)

function perfect(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      for (let j = 1; j <= i; j++) {
        if (j * j === i) {
          console.log(i);
          break;
        }
      }
    }
  }
}
perfect(16)