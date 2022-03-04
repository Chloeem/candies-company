// Candies Business

// A program to create batches of five order ID's
const addToBatch = (array, number) => {
  if (array.length >= 5) {
    return array;
  }
  
  return array.concat(number);
  
};

let batchOutput = addToBatch([1, 2, 4, 5], 3);

console.log(`Batch ID output: ${batchOutput}`);