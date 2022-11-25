// 프로그래머스 같은 숫자는 싫어
// 다음과 같지 않은 것만 출력 !

function solution(arr) {
  let answer = [];
  answer = arr.filter((value, index) => value !== arr[index + 1]);
  return answer;
}
