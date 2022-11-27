// 첫번째 정답
function solution(s) {
  let k = s;
  let answer = 0;
  let order = [];

  for (let j = 0; j < s.length; j++) {
    const scope = { a: 0, b: 0, c: 0 };
    let { a, b, c } = scope;
    for (let i = j; i < s.length + j; i++) {
      if (a < 0 || b < 0 || c < 0) {
        break;
      }
      switch (k[i]) {
        case "(":
          a++;
          order.push("a");
          break;
        case ")":
          a--;
          if (order[order.length - 1] === "a") {
            order.pop();
          }
          break;
        case "[":
          b++;
          order.push("b");
          break;
        case "]":
          b--;
          if (order[order.length - 1] === "b") {
            order.pop();
          }
          break;
        case "{":
          c++;
          order.push("c");
          break;
        case "}":
          c--;
          if (order[order.length - 1] === "c") {
            order.pop();
          }
          break;
      }
    }
    if (a === 0 && b === 0 && c === 0 && order.length === 0) answer++;
    k += k[j];
  }

  return answer;
}

// 두번째 정답
function solution2(s) {
  let k = s;
  let answer = 0;
  const closeScope = [")", "}", "]"];
  const COUPLE_SCOPE = { "(": ")", "{": "}", "[": "]" };

  for (let j = 0; j < s.length; j++) {
    const order = [];
    const scope = { "(": 0, "{": 0, "[": 0, ")": 0, "}": 0, "]": 0 };

    for (let i = j; i < s.length + j; i++) {
      if (closeScope.includes(k[i])) {
        if (COUPLE_SCOPE[order[order.length - 1]] === k[i]) {
          order.pop();
        }
      } else {
        order.push(k[i]);
      }
      scope[k[i]]++;
    }

    const count = { "(": scope["("] - scope[")"], "{": scope["{"] - scope["}"], "[": scope["["] - scope["]"] };
    if (count["("] === 0 && count["["] === 0 && count["{"] === 0 && order.length === 0) answer++;
    k += k[j];
  }

  return answer;
}
