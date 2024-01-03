function nextInLine(arr, item) {
    // Your code here
    arr.push(item); //Push in the array some variable or item
    return arr.shift();  //Remove the first element in the array and return this element that it remove
  }
  
  var testArr = [1,2,3,4,5];
  
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6)); //Send to the function nextInLine the array "testArray" and variable "6"
  console.log("After: " + JSON.stringify(testArr));