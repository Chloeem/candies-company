// Candies Business

const numbers = [
  '1763687364',   // 10 digit phone numbers
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd'  // corrupt data
];

// A program to filter out corrupt data in a phone numbers list
const checkLength = (phoneNumber) => {
  if (phoneNumber.length <= 10) {
    return true;
  }
};

const filterLongNumbers = (phoneArray) => {
  return phoneArray.filter(checkLength);
};

let lengthOutput = filterLongNumbers(numbers, checkLength);

console.log(`Phone numbers output: ${lengthOutput}`);
