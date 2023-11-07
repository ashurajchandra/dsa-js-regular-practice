const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 11;

function findIndexesWithSum(arr, target) {
  const numToIndex = {};

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    console.log("complement",complement)
    
    if (numToIndex[complement] !== undefined) {
      return [numToIndex[complement], i];
    }

    numToIndex[arr[i]] = i;
    console.log("numToIndex",numToIndex)
  }

  return null; // If no such pair is found
}

const result = findIndexesWithSum(arr, target);

if (result !== null) {
  console.log(result);
} else {
  console.log("No pair with the given sum found.");
}
