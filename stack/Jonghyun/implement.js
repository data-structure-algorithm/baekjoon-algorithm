//stack.js

class Stack {
  #array = [];

  constructor() {}

  /**
   * 값을 넣는 함수
   */
  push(value) {
    this.#array.push(value);
  }

  /**
   * 마지막 요소를 반환하고 제거하는 함수
   */
  pop() {
    if (this.isEmpty()) throw new Error("[ERROR] 스택이 비어있어요!");
    return this.#array.pop();
  }

  /**
   * 마지막 요소를 반환하는 함수
   */
  peek() {
    if (this.isEmpty()) throw new Error("[ERROR] 스택이 비어있어요!");
    return this.#array[this.#array.length - 1];
  }

  /**
   * 현재 사이즈를 반환하는 함수
   */
  size() {
    return this.#array.length;
  }

  /**
   * Stack이 꽉 차있는지 여부를 반환하는 함수
   */
  isEmpty() {
    let result = false;
    if (this.#array.length === 0) {
      result = true;
    }
    return result;
  }
}

const stack = new Stack();

stack.push("🍎");
stack.push("🍗");
stack.push("🍕");
stack.push("🍔");
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.size());
