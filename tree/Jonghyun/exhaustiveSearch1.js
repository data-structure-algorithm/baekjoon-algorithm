// 프로그래머스 모음 사전
// 등비수열의 합 공식 사용했음

function solution(words) {
  var answer = 0;
  const wordIndex = ["A", "E", "I", "O", "U"];

  for (let i = 0; i < words.length; i++) {
    answer += ((5 ** (5 - i) - 1) / 4) * wordIndex.indexOf(words[i]) + 1;
  }

  return answer;
}
