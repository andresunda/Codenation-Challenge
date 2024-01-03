function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
    } else {
      return "Not Found";
    }
  }
  
  // Ejemplos de uso:
  console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "gift")); // Devuelve: 'pony'
  console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "pet")); // Devuelve: 'kitten'
  console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "house")); // Devuelve: 'Not Found'
  console.log(checkObj({ city: "Seattle" }, "city")); // Devuelve: 'Seattle'
  console.log(checkObj({ city: "Seattle" }, "district")); // Devuelve: 'Not Found'
  console.log(checkObj({ pet: "kitten", bed: "sleigh" }, "gift")); // Devuelve: 'Not Found'
  