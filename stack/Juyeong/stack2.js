//2. 프로그래머스 : 올바른괄호
// 문제 설명
// 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

// "()()" 또는 "(())()" 는 올바른 괄호입니다.
// ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
// '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 문자열 s의 길이 : 100,000 이하의 자연수
// 문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.

//-----------------------1번째 풀이
// 정확성 50 , 효율성 15
function solution(s) {
  var answer;
  let arr = [...s]; // 문자열 전개연산자로 형태소별 배열 생성
  let end = arr.pop(); //배열의 제일 첫번째 값과 제일 마지막 값을 비교했을때 다르면 true 같으면 false 처리
  if (arr[0] !== end && arr[0] !== String.fromCharCode(41)) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}

//--------------------2번째 풀이
// 올바른 괄호는 반복문 통해 값이 0 이 나옴 , 올바르지 않는 괄호 경우 0 이상의 값이 나옴
function solution(s) {
  var answer;
  let stackCount = 0; // 스택으로 사용할 값
  for (let i = 0; i < s.length; i++) {
    stackCount += s[i] === "(" ? 1 : -1;
    if (stackCount < 0) return false;
  }
  return stackCount === 0 ? true : false;
  return answer;
}
//출처 :https://jsikim1.tistory.com/251
