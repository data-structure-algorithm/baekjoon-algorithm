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
    //
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
    //
    function searchNode(node, key) {
      if (node === null) return false;

      if (node.key === key) {
        return true;
      } else if (key < node.key) {
        searchNode(node.left, key);
      } else {
        searchNode(node.right, key);
      }
    }

    searchNode(this.root, key);
  }

  // tree의 최솟값
  min() {
    //
  }

  // tree의 최댓값
  max() {
    //
  }

  // 해당 키를 삭제
  remove() {
    //
  }
}

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(4);
binarySearchTree.insert(5);
binarySearchTree.insert(3);
binarySearchTree.insert(1);
binarySearchTree.insert(2);
binarySearchTree.insert(10);

binarySearchTree.search(10);
