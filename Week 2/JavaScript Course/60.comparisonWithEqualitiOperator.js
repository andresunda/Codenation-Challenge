// Setup
function testEqual(val) {
    if (val == 12 ) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  // Setup
  function testNotEqual(val) {
    if (val == 9) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  console.log(testEqual(12));
  
  console.log(testNotEqual(10));