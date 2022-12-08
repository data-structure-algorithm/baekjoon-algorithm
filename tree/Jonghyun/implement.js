// 1. 현재보다 큰지 작은지 보고
// 2. 값을 넣을 거야!
// 2-1. 작으면 왼쪽
// 2-2. 크면 오른쪽
// 3. 근데 만약에 넣을 자리에 node가 있다면 거기 있는 노드를 현재 노드로 바꿀 거야
// 4. 그리고 다시 1번을 실행할 거야
// 재귀함수를 쓰면 될까?

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // 새로운 키를 삽입
  insert(key) {
    const newNode = new Node(key);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    function insertNode(node, newNode) {
      if (newNode.key < node.key) {
        node.left === null ? (node.left = newNode) : insertNode(node.left, newNode);
      } else {
        node.right === null ? (node.right = newNode) : insertNode(node.right, newNode);
      }
    }

    insertNode(this.root, newNode);
  }

  // 해당 키가 있는지 없는지 반환 => boolean
  search(key) {
    let result;
    function searchNode(node, key) {
      if (node === null) return (result = false);

      if (node.key === key) {
        return (result = node);
      } else if (key < node.key) {
        searchNode(node.left, key);
      } else {
        searchNode(node.right, key);
      }
    }

    searchNode(this.root, key);
    return result;
  }

  // tree의 최솟값
  min() {
    //
    let result;

    function searchMinValue(node) {
      if (node === null) throw new Error("root가 없짜나!!!!!!!!!!");

      if (node.left === null) {
        result = node.key;
        return;
      }

      if (node.left !== null) searchMinValue(node.left);
    }

    searchMinValue(this.root);
    return result;
  }

  // tree의 최댓값
  max() {
    //
    let result;

    function searchMinValue(node) {
      if (node === null) throw new Error("root가 없짜나!!!!!!!!!!");

      if (node.right === null) {
        result = node.key;
        return;
      }

      if (node.right !== null) searchMinValue(node.right);
    }

    searchMinValue(this.root);
    return result;
  }

  // 해당 키를 삭제
  remove(key) {
    // 1. 만약에 해당 키가 없다면 에러를 반환하고
    // 2. 해당 키가 있는데 자식이 아무 것도 없으면 그냥 없애고 끝
    // 2-1. 만약에 자식이 한 개만 있으면 자식을 지금 노드로 바꿔
    // 2-2. 근데 제일 중요한 것이 자식이 둘일 때임
    // 둘일 때는 우측의 왼쪽에 왼쪽에 왼쪽에 ... 왼쪽에 있는 것이 와야 됨
    // 생각해보셈 일단 왼쪽에 있는 것들은 현재 node보다 전부 작잖아
    // 오른쪽에 있는 것들은 다 크고
    // 그러면 오른쪽에 있는 것 중 가장 작은 값이 현재 노드가 되어야 tree가 망가지지 않잖아
    // 왜냐하면 큰 그룹 중 가장 작은 값이니까 left 그룹에 있는 값들보다는 무조건 크고
    // right 그룹에 있는 것들 보다는 무조건 작으니까 !
    const searchKey = this.search(key);
    if (!searchKey) throw new Error("맞는게 업짜나!!!!!!!!!!!!");

    function removeNode(node) {
      console.log("1");
      if (node.left && !node.right) {
        node = node.left;
        return node;
      }

      if (!node.left && node.right) {
        node = node.right;
        return node;
      }

      if (node.left && node.right) {
        const newNode = node.right;
        function replaceNode(node, newNode) {
          if (newNode.left) {
            replaceNode(newNode.left);
            return;
          }
          return (node = newNode);
        }
        replaceNode(node, newNode);
      }
    }

    removeNode(searchKey);
  }
}

// dkdkkdkdk왜안대ㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐ

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(5);
binarySearchTree.insert(2);
binarySearchTree.insert(9);
binarySearchTree.insert(10);
binarySearchTree.remove(9);
console.log(binarySearchTree.root);

// console.log(binarySearchTree.root);
