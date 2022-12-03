function solution(people, limit) {
  let People = people.sort((a, b) => a - b);
  console.log(People);
  let count = 0;
  let front = 0;
  while (true) {
    if (front > People.length - 1) {
      break;
    }
    if (People[front] + People[People.length - 1] > limit) {
      count++;
      People.pop();
    } else {
      count++;
      front++;
      People.pop();
    }
  }

  return count;
}
