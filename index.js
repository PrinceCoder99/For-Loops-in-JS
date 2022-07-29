// Chapter - 3 [Loops]

// For Loops
/*
let sum = 0
let n = prompt('Enter a value of n')
n = Number.parseInt(n)
for(let i = 0; i<n; i++){
  sum += (i+1)
}
  console.log("Sum of first "+ n + " natural number is " + sum)
*/


// For in Loops
/*
let obj = {
  Prince: 89,
  Nitish: 88,
  Niraj: 87,
  Uchit: 86,
}
for(let a in obj){
  console.log("Number of " + a + " is " + obj[a] )
}
*/

// For of Loops
/*
for(let b of "Prince"){
  console.log(b)
}
*/


// Quick Quiz of For Loops
// ------------Factorial Number--------------
let n = prompt("Enter a number")
fact = 1
for(i = 0; i<n; i++){
  fact *= (i+1)
}
console.log("Factorial of " + n + " number is "+ fact)

