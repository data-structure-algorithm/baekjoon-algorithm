/**
 * Queue 구현하기
 * 1. Enqueue : 맨 뒤에 추가
 * 2. Dequeue : 맨 앞에 삭제 => 데이터 반환
 * 3. Peek : 맨 앞에 (front) 에 위치한 데이터를 읽음
 * 4. front : 맨 앞의 위치 => 인덱스
 * 5. rear : 맨 뒤의 위치 => 인덱스
 * 6. isEmpty : 큐가 비었는지 확인하는 함수
 */

class Queue {
  constructor() {
    this.node = { value: undefined, next: undefined };
    this.front = 0;
    this.rear;
    this.size = 0;
    this.head = { value: undefined, next: undefined };
    this.pointer;
  }

  enqueue(value) {
    const node = { value, next: undefined };
    if (this.size == 0) {
      this.head = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = this.rear.next;
    }
    this.size++;
  }

  dequeue() {
    if (this.size === 0) throw new Error("텅 빔");
    const node = this.head;
    this.head = this.head.next;
    this.size--;
    return node;
  }

  peek() {}
}

const queue = new Queue();
queue.enqueue("apple");
queue.enqueue("banana");
queue.enqueue("orange");
queue.enqueue("chicken");

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

// console.log(queue);
