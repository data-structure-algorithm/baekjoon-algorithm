const array = [14, "push 1", "push 2", "top", "size", "empty", "pop", "pop", "pop", "size", "empty", "pop", "push 3", "empty", "top"];
// const array = [7, "pop", "top", "push 123", "top", "pop", "top", "pop"];
// const array = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let node = { value: undefined, next: undefined };
let head;
let size = 0;
let result = [];

const stack = {
  push: (number) => {
    node = { value: number, next: head };
    head = node;
    size++;
  },
  pop: () => {
    if (size === 0) {
      return -1;
    }
    node = head;
    head = node.next;
    size--;
    return node.value;
  },
  empty: () => {
    return size === 0 ? 1 : 0;
  },
  size: () => {
    return size;
  },
  top: () => {
    if (size === 0) {
      return -1;
    }
    return node.value;
  },
};

for (let i = 1; i < array.length; i++) {
  const func = array[i].split(" ");
  result.push(stack[func[0]](func[1]));
}

console.log(result.filter((number) => number !== undefined).join("\n"));
// console.log(result.filter((number) => !isNaN(number)).join("\n"));

// const line = require("fs").readFileSync("/dev/stdin", "utf8");
// let array = line.trim().split("\n");

// let node = { value: undefined, next: undefined };
// let head;
// let size = 0;
// let result = [];

// const stack = {
//   push: (number) => {
//     node = { value: number, next: head };
//     head = node;
//     size++;
//   },
//   pop: () => {
//     if (size === 0) {
//       return -1;
//     }
//     node = head;
//     head = node.next;
//     size--;
//     return node.value;
//   },
//   empty: () => {
//     return size === 0 ? 1 : 0;
//   },
//   size: () => {
//     return size;
//   },
//   top: () => {
//     if (size === 0) {
//       return -1;
//     }
//     return node.value;
//   },
// };

// for (let i = 1; i < array.length; i++) {
//   const func = array[i].split(" ");
//   result.push(Number(stack[func[0]](func[1] !== undefined && func[1])));
// }

// console.log(result.filter((number) => !isNaN(number)).join("\n"));
