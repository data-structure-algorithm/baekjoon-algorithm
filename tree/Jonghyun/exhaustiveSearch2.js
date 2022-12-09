// 프로그래머스 카펫

// 정답을 반환하는 메서드
function solution(brown, yellow) {
  const yellowDivisor = makePair(findDivisor(yellow));
  const answer = yellowDivisor.filter(([x, y]) => 2 * (x + y + 2) === brown);

  return answer[0].map((num) => num + 2);
}

// 약수를 찾아주는 메서드
function findDivisor(number) {
  const divisor = [];

  for (let i = 1; i <= number; i++) {
    number % i === 0 && divisor.push(i);
  }
  return divisor;
}

// 짝을 맞춰주는 메서드
function makePair(divisorArray) {
  const pair = [];

  for (let i = 0; i < Math.ceil(divisorArray.length / 2); i++) {
    const smallNum = divisorArray[i];
    const bigNum = divisorArray[divisorArray.length - 1 - i];
    pair.push([bigNum, smallNum]);
  }
  return pair;
}
