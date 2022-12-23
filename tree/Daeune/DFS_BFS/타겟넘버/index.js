function solution(numbers, target) {
  var answer = 0;
  const getAnswer = (index, value) => {
    if (index < numbers.length) {
      getAnswer(index + 1, value + numbers[index]);
      getAnswer(index + 1, value - numbers[index]);
    } else {
      if (value === target) {
        answer++;
      }
    }
  };
  getAnswer(0, 0);
  return answer;
}
