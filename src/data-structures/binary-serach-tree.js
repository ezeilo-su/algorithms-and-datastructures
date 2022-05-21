class Node {
  constructor (data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor () {
    this.root = null;
  }

  insert (data) {
    const newNode = new Node(data);

    if (!this.root) {
      this.root = newNode;
    } else {
      let curNode = this.root;
      while (curNode) {
        if (newNode.data === curNode.data) return undefined;
        if (newNode.data > curNode.data) {
          if (!curNode.right) {
            curNode.right = newNode;
            break;
          }
          curNode = curNode.right;
        } else if (newNode.data < curNode.data) {
          if (!curNode.left) {
            curNode.left = newNode;
            break;
          }
          curNode = curNode.left;
        }
      }     
    }
    return this;
  }

  find (val) {
    if (!this.root) return false;
    
    let curNode = this.root,
    found = null;
    while (curNode && !found) {
      if (val > curNode.data) {
        curNode = curNode.right;
      } else if (val < curNode.data) {
        curNode = curNode.left;
      } else {
        found = curNode;
      }
    }
    return found;
  }
}