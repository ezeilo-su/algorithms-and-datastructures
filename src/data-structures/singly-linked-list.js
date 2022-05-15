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
    let counter = 0;
    while (counter !== index) {
      curNode = curNode.next;
      counter++;
    }
    return curNode;
  }

  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert (index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      return !!this.unshift(val);
    } else if (index === this.length) {
      return !!this.push(val);
    } else {
      const newNode = new Node(val);
      const prevNode = this.get(index - 1);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
      this.length++;
    }
    return true;
  }

  remove (index) {
    if (!this.head) return undefined;
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.head = this.head.next;
      return true;
    }
    const prevNode = this.get(index - 1);
    const nodeToRemove = prevNode.next;
    prevNode.next = nodeToRemove.next;
    if (index === this.length - 1) {
      this.tail = prevNode;
    }
    this.length--;

    return true;
  }

  reverse () {
    let curNode = this.head;
    let nextNode = curNode.next;
    curNode.next = null;

    while (nextNode) {
      let tempNode = nextNode.next;
      nextNode.next = curNode;
      curNode = nextNode;
      nextNode = tempNode;
    }
    this.head = curNode;
    return this;
  }
}

const list = new SinglyLinkedList();
list.push(28);
list.push(100);
list.push(200);

list.remove(1);

console.log(list);