// Quick Quiz of For Loops
// ------------Factorial Number--------------
let n = prompt("Enter a number")
fact = 1
for(i = 0; i<n; i++){
  fact *= (i+1)
}
console.log("Factorial of " + n + " number is "+ fact)
