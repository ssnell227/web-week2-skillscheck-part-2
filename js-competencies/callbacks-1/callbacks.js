//////////////////PROBLEM 1////////////////////

// Write a function called stringItOut that takes in an array. Determine if it is an array of numbers or strings and sort it greatest to least accordingly (sort strings alphabetically). Return the array converted into a string using the toString method.

const stringItOut =(arr)=> {
  if (typeof arr[0] === 'string') {
    arr.sort().reverse()
  } else {
    arr.sort((a,b) => b-a)
  }
  return arr.toString()
}


//////////////////PROBLEM 2////////////////////

// Given the functions below: invoke the function math passing in complex, 2, and 3 as parameters. Save the result to a variable called mathResult.

function math(cb, num1, num2) {
  return cb(num1, num2)
}

function complex(num1, num2) {
  return Math.sin((Math.log(num1) + Math.tan(num2) * 100))
}

const mathResult = math(complex, 2, 3)
