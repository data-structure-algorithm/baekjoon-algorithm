//문제 1번[ 다리를 지나는 트럭]

function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  let queu = Array.from({ length: bridge_length }, () => 0);
  let bridge_sum = 0;

  answer++;
  queu.shift();
  bridge_sum += truck_weights[0];
  queu.push(truck_weights.shift());

  while (bridge_sum > 0) {
    answer++;
    bridge_sum -= queu.shift();
    if (truck_weights.length > 0 && bridge_sum + truck_weights[0] <= weight) {
      bridge_sum += truck_weights[0];
      queu.push(truck_weights.shift());
    } else {
      queu.push(0);
    }
  }
  return answer;
}
