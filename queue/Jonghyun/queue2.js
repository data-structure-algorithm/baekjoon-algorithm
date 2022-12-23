// 통과 시간 = length + 1
// weight >= truck_weights의 합
// 1. 루프가 한 번 돌 때마다 seconds를 1씩 더해준다
// 2. 루프가 한 번 돌 때마다 트럭 무게의 합이 다리 무게보다 작은지 검사한다
// 3. 만약 현재 트럭들의 무게와 다음에 들어올 무게의 합이 weight보다 작을 시 트럭 한 대를 넣어준다.
// 4. 목표 시간을 달성하면 배열에서 제거해준다.
// 각각 노드의 데이터는 { seconds: (들어왔을 때의 totla_time) , next:{ 다음 노드 } }
// 예를 들어서 1초에 들어왔으면 seconds: 1
// 그래서 total_time - seconds === bridge_length 이 되면 나가는 거임
// 그래서 3 - 1 === 2 이 되면 나가는 거임

class Queue {
  head;
  constructor(truck_weights) {
    this.head = { weight: 0, entryTime: 0, next: undefined };
    this.tail = { weight: 0, entryTime: 0, next: undefined };
    this.totalWeight = 0;
    this.truckIndex = 0;
    this.truckWeights = truck_weights;
  }

  enqueue(weight, entryTime) {
    const node = { weight: weight, entryTime: entryTime, next: undefined };
    if (this.head.weight === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
    this.totalWeight += weight;
    this.truckIndex++;
  }

  dequeue() {
    const node = this.head;
    if (this.head.next === undefined) {
      this.head = { weight: 0, entryTime: 0, next: undefined };
    } else {
      this.head = this.head.next;
    }
    this.totalWeight -= node.weight;
  }
}

function solution(bridge_length, weight, truck_weights) {
  const queue = new Queue(truck_weights);
  let total_time = 0;
  let passed_truck = [];

  while (passed_truck.length < truck_weights.length) {
    total_time++;
    if (bridge_length === total_time - queue.head.entryTime && queue.totalWeight !== 0) {
      queue.dequeue();
      passed_truck.push(truck_weights[queue.truckIndex]);
    }
    if (truck_weights[queue.truckIndex] + queue.totalWeight <= weight) {
      queue.enqueue(truck_weights[queue.truckIndex], total_time);
    }
  }

  return total_time;
}

const bridge_length1 = 2;
const weight1 = 10;
const truck_weights1 = [7, 4, 5, 6];

const answer = solution(2, 10, [7, 4, 5, 6]);

console.log(answer);
