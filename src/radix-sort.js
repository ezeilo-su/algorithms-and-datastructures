const digitCount = (num) => {
  if (num === 0) return 1;
  num = Math.abs(num);
  return Math.floor(Math.log10(num)) + 1;
}

const getDigit = (num, i) => {
  num = Math.abs(num);
  return Math.floor(num / Math.pow(10, i)) % 10;
}

const mostDigits = (nums) => {
  let maxDigit = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigit = Math.max(maxDigit, digitCount(nums[i]));
  }

  return maxDigit;
}


const radixSort = (nums) => {
  const size = nums.length;
  if (size < 2) return nums;

  const maxDigitCount = mostDigits(nums);
  
  for (let i = 0; i < maxDigitCount; i++) {
    let digitBucket = Array.from({ length: 10 }, () => []);
    for (let k = 0; k < size; k++) {
      let digit = getDigit(nums[k], i);
      digitBucket[digit].push(nums[k]);
    }
    nums = [].concat(...digitBucket);
  }
  return nums;
}

console.log(radixSort([25, 3, 1023]));
