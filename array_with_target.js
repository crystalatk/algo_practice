// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Givens
// - Only one valid answer exists
// - nums will always be Array, and target will always be number
// - 2 <= nums.length <= 1,000
// - -1,000,000,000 <= nums[i] <= 1,000,000,000
// - -1,000,000,000 <= target <= 1,000,000,000
// Examples
// Ex input: nums = [2,7,11,15], target = 9
// Ex output: [0,1]
// Ex input: nums = [3,2,4], target = 6
// Ex output: [1,2]
// Ex input: nums = [3,3], target = 6
// Ex output: [0,1]

const findIndices = (array, target) => {
  const checkingObject = {};
  for (let i = 0; i < array.length; i++) {
    const numberNeeded = target - array[i];
    if (checkingObject[numberNeeded] != undefined) {
      const indices = [checkingObject[numberNeeded], i];
      return indices;
    } else {
      checkingObject[parseInt(array[i])] = i;
    }
  }
};

const arr1 = [2, 7, 11, 15];
const tar1 = 9;
const arr2 = [3, 2, 4];
const tar2 = 6;
const arr3 = [3, 3];
const tar3 = 6;
console.log(findIndices(arr1, tar1));
console.log(findIndices(arr2, tar2));
console.log(findIndices(arr3, tar3));
