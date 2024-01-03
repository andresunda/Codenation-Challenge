function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  }
  
  let myRandom = randomRange(5, 15);
  
  console.log(myRandom);