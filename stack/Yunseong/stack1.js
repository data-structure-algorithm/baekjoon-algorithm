function solution(priorities, location) {
  let cnt = 0;
  let newArr = priorities;
  let index = [];
  let num;
  //0. 각 문서에 index를 부여하여 location과 비교할 수 있도록 한다.
  //1. 현재 인쇄 대기목록의 가장 높은 중요도를 구함.
  //2. 현재 문서의 중요도와 가장 높은 중요도를 비교함.
  //2-1. 현재 문서의 중요도가 더 낮으면 인쇄 대기목록의 끝으로 보냄(push).
  //2-2. 현재 문서의 중요도와 가장 높은 중요도가 같을 때, 인쇄를 해야하므로 count를 1 증가시킴
  //2-2-1. 현재 문서가 내가 요청한 문서와 같으면 => location이 같으면 count를 return하고 끝
  //2-2-2. 현재 문서와 내가 요청한 문서와 같지 않으면 => location이 다르면
  //       현재 문서를 인쇄하고 다음 문서로 넘어감.
  //3. 현재 문서와 내가 요청한 문서가 같을 때 까지 위의 과정을 반복함.
  for (let i = 0; i < priorities.length; i++) {
    index.push(i);
  }
  while (true) {
    maxNum = Math.max.apply(Math, priorities);
    num = priorities.shift();

    if (num < maxNum) {
      priorities.push(num);
      index.push(index.shift());
    } else if (num === maxNum) {
      cnt++;
      if (index[0] === location) break;
      else index.shift();
    }
  }
  return cnt;
}
