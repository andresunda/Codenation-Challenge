function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
      return [];
    } else {
      const countArray = rangeOfNumbers(startNum, endNum - 1);
      countArray.push(endNum);
      return countArray;
    }
  }
  
  console.log(rangeOfNumbers(1, 5)); // Output: [1, 2, 3, 4, 5]
  