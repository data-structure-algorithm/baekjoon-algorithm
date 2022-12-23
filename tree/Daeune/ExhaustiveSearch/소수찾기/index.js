function solution(numbers) {
  let nums = numbers.split("");
  let answer = [];

  function getPermutation(array, fixed) {
    if (array.length) {
      for (let i = 0; i < array.length; i++) {
        const temp = [...array];
        temp.splice(i, 1);
        if (isPrime(parseInt(fixed + array[i]))) {
          answer.push(parseInt(fixed + array[i]));
        }
        getPermutation(temp, fixed + array[i]);
      }
    }
  }
  getPermutation(nums, "");
  return new Set(answer).size;
}

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
