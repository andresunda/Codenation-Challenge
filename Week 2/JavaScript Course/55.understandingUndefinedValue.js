// Setup
let sum = 0;

function addThree() {
  sum += 3;
}

function addFive() {
  sum += 5;
}


addThree();
addFive();

console.log(sum); 

//In this example this functions dont return any date explicit, but modify the state of the variable "sum"
