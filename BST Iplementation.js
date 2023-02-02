class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      let newNode = new Node(value);
      if (this.root === null) {
        this.root = newNode;
        return this;
      } else {
        let current = this.root;
        while (true) {
          if (value === current.value) return undefined;
          if (value < current.value) {
            if (current.left === null) {
              current.left = newNode;
              return this;
            } else {
              current = current.left;
            }
          } else if (value > current.value) {
            if (current.right === null) {
              current.right = newNode;
              return this;
            } else {
              current = current.right;
            }
          }
        }
      }
    }
  }
  
  let tree = new BinarySearchTree();
  tree.insert(5);

  //Recursive approach
  class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      let newNode = new Node(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else if (newNode.value > node.value) {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      } else{
        // handle the case where the new node has the same value as a node already in the tree
        console.log("The value already exists in the tree, duplicate values are not allowed")
      }
    }
  }
  
  let treeRecusive = new BinarySearchTree();
  tree.insert(5);
  tree.insert(5);
  