function divide(arr, n) {
  const result = [];
  let currentChunk = [];
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (currentSum + arr[i] > n) {
      // If adding the current element exceeds the max sum, push the current chunk to the result
      result.push(currentChunk);
      currentChunk = [arr[i]]; // Start a new chunk with the current element
      currentSum = arr[i]; // Reset the current sum to the current element
    } else {
      // If adding the current element doesn't exceed the max sum, add it to the current chunk
      currentChunk.push(arr[i]);
      currentSum += arr[i]; // Add the current element to the current sum
    }
  }
  
  // Push the last chunk if it's not empty
  if (currentChunk.length > 0) {
    result.push(currentChunk);
  }
  
  return result;
}

// Example usage:
// const arr = [1, 2, 3, 4, 1, 0, 2, 2];
// const n = 5;
// const divided = divide(arr, n);
// console.log(divided);
