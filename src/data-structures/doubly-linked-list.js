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
    if (!this.head) return null;
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
