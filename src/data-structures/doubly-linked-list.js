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
      removed.next = null;
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

  get (index) {
    if (index < 0 || index >= this.length) return null;

    let count, cur;

    if(index <= Math.floor(this.length/2)) {
      count = 0;
      cur = this.head;
      while (count != index) {
        count++;
        cur = cur.next;
      }      
    } else {
      count = this.length - 1;
      cur = this.tail;

      while (count != index) {
        count--;
        cur = cur.prev;
      }
    }
    return cur;
  }

  set (index, val) {
    if (index < 0 || index >= this.length) return false;

    let count, cur;

    if(index <= Math.floor(this.length/2)) {
      count = 0;
      cur = this.head;
      while (count != index) {
        count++;
        cur = cur.next;
      }      
    } else {
      count = this.length - 1;
      cur = this.tail;

      while (count != index) {
        count--;
        cur = cur.prev;
      }
    }
    cur.val = val;
    return true;
  }

  // set (index, val) {
  //   const node = this.get(index);
  //   if (!node) return false;
  //   node.val = val;

  //   return true;
  // }

  insert (index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const newNode = new Node(val);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;

    return true;
  }

  remove (index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removedNode = this.get(index);
    const prev = removedNode.prev;
    const nextNode = removedNode.next;

    prev.next = nextNode;
    nextNode.prev = prev;
    removedNode.prev = null;
    removedNode.next = null;

    this.length--;

    return removedNode;
  }
}

const list = new DoublyLinkedList();

list.push(100);
list.push(200);
list.push(300);
list.push(400);

list.pop();

console.log(list);
