/**
 * Queue 구현하기
 * 1. Enqueue : 맨 뒤에 추가
 * 2. Dequeue : 맨 앞에 삭제 => 데이터 반환
 * 3. Peek : 맨 앞에 (front) 에 위치한 데이터를 읽음
 * 4. front : 맨 앞의 위치(index)
 * 5. rear : 맨 뒤의 위치(index)
 * 6. isEmpty : 큐가 비었는지 확인하는 함수
 * 7. tail : 맨 뒤의 위치한 데이터를 가리키는 포인터
 */

class Queue {
  #rear;
  #size;
  #head;
  #front;

  constructor(maxSize) {
    this.maxSize = maxSize;
    this.#head = { value: undefined, next: undefined };
    this.#size = 0;
    this.#front = 0;
    this.#rear = 0;
    this.tail;
  }

  isEmpty() {
    return this.#size === 0;
  }

  isFull() {
    return this.#size === this.maxSize;
  }

  get size() {
    return this.#size;
  }

  get rear() {
    if (this.#size === 0) throw new Error("텅 빔");
    return this.#rear;
  }

  get front() {
    if (this.#size === 0) throw new Error("텅 빔");
    return this.#front;
  }

  enqueue(value) {
    if (this.isFull()) throw new Error("꽉 참");
    const node = { value, next: undefined };
    if (this.isEmpty()) {
      this.#head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
    this.#rear++;
    this.#size++;
  }

  dequeue() {
    if (this.isEmpty()) throw new Error("텅 빔");
    const node = this.#head;
    this.#head = this.#head.next;
    this.#front++;
    this.#size--;
    return node;
  }

  peek() {
    if (this.isEmpty()) throw new Error("텅 빔");
    return this.#head.value;
  }
}

const queue = new Queue(5);
queue.enqueue("apple");
queue.enqueue("banana");
queue.enqueue("orange");
queue.enqueue("chicken");

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.front);
console.log(queue.rear);
console.log(queue.peek());
console.log(queue.dequeue());
