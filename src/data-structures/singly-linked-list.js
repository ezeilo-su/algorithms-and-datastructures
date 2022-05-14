class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push (val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop () {
    if(this.length === 0) return undefined;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return this;
    }

    let currNode = this.head;
    let prevNode = currNode;

    while (currNode.next) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    this.length--;
    prevNode.next = null;
    this.tail = prevNode;
    return currNode;
  }

  shift() {
    if (this.length === 0) return undefined;

    const head = this.head;
    this.head = head.next;
    this.length--;
    if (this.length === 0) this.tail = null;

    return head;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (!this.head) return null;
    if(index < 0 || index >= this.length) return null;

    let curNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (i === index) return curNode;
      curNode = curNode.next;
    }
    return null;
  }
}

const list = new SinglyLinkedList();
list.push(28);
list.push(100);
list.push(200);

// console.log(list);

const node = list.get(0);

console.log(node);