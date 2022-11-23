// 프로그래머스-올바른 괄호 찾기
function solution(s) {
  //1. 첫번째가 ')' 마지막이 '(' 이 나오면 안 됨
  //2. '(' => push ')' => pop

  let answer = true;
  let size = 0;

  if (s[s.length - 1] === "(") {
    return (answer = false);
  }

  for (let i = 0; i < s.length; i++) {
    if (size === 0 && s[i] === ")") {
      return (answer = false);
    }
    s[i] === "(" ? size++ : size--;
  }

  return (answer = size !== 0 ? false : true);
}
