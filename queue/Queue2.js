function solution(s) {
  var s = s.split("");
  var sum = 0;
  var answer = true;
  for (var i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      sum += 1;
    } else {
      sum -= 1;
    }
    if (sum < 0) return false;
  }
  if (sum !== 0) return false;
  return answer;
}
