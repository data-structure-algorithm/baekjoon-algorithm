function solution(bridge_length, weight, truck_weights) {
  let sec = 0;
  let arr = [];
  for (let i = 0; i < bridge_length; i++) {
    arr.push(0);
  }
  while (true) {
    arr.shift();
    arr.push(0);
    sec++;
    let arrCurrentWeight = arr.reduce((a, b) => a + b); //현재 다리의 무게
    if (arrCurrentWeight + truck_weights[0] <= weight) {
      let currentTruck = truck_weights.shift();
      arr[arr.length - 1] = currentTruck;
      arrCurrentWeight += currentTruck;
    }
    if (arrCurrentWeight === 0) {
      break;
    }
  }
  return sec;
}
