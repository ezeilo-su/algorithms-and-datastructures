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
    // let cur = this.head;
    // while (cur.next) {
    //   cur = cur.next;
    // }
    // node.prev = cur;
    // cur.next = node;
    // this.tail = cur.next;

    return this;
  }
}

const list = new DoublyLinkedList();

list.push(100);
list.push(200);
list.push(300);
list.push(400);

console.log(list);
