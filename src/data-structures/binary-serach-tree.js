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
    
    let curNode = this.root;
    let found = null;
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

  BFS () {
    let node = this.root
    if (!node) return null;
    const queue = new Array(node);
    const nodeList = [];

    while (queue.length) {
      node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      nodeList.push(node.data);
    }

    return nodeList;
  }

  DFSPreOder () {
    const data = [];
    let cur = this.root;

    function traverse(node) {
      data.push(node.data);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(cur);

    return data;
  }

  DFSPostOder () {
    const data = [];
    let cur = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.data);
    }
    traverse(cur);

    return data;
  }

  DFSInOder () {
    const data = [];
    let cur = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.data);
      if (node.right) traverse(node.right);
    }
    traverse(cur);

    return data;
  }
}
