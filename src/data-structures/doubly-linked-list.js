class Node {
  constructor (val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push (val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;

    return this;
  }

  pop () {
    if (!this.head) return undefined;
    const poppedNode = this.tail;
    const prev = poppedNode.prev;
    if (prev) {
      prev.next = null;
    } else {
      this.head = null;
    }
    this.tail = prev;
    this.length--;

    return poppedNode;
  }

  shift () {
    if (!this.head) return undefined;

    const removed = this.head;
    this.head = removed.next;
    if(this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }
    this.length--;

    return removed;
  }

  unshift (val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      const next = this.head;
      next.prev = node;
      node.next = next;
      this.head = node;
    }
    this.length++;

    return this;
  }

    // let cur = this.head;
    // while (cur.next) {
    //   cur = cur.next;
    // }
    // node.prev = cur;
    // cur.next = node;
    // this.tail = cur.next;
}

const list = new DoublyLinkedList();

list.push(100);
list.push(200);
list.push(300);
list.push(400);

list.pop();

console.log(list);
