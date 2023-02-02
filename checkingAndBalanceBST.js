//checking if its balanced
class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function height(node) {
    if (!node) return 0;
    return Math.max(height(node.left), height(node.right)) + 1;
  }
  
  function isBalanced(root) {
    if (!root) return true;
  
    const leftHeight = height(root.left);
    const rightHeight = height(root.right);
  
    if (Math.abs(leftHeight - rightHeight) > 1) return false;
  
    return isBalanced(root.left) && isBalanced(root.right);
  }
  

  //balancing the tree
  class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
      this.height = 1;
    }
  }
  
  function height(node) {
    if (!node) return 0;
    return node.height;
  }
  
  function getBalanceFactor(node) {
    return height(node.left) - height(node.right);
  }
  
  function rightRotate(y) {
    const x = y.left;
    const T2 = x.right;
  
    x.right = y;
    y.left = T2;
  
    y.height = Math.max(height(y.left), height(y.right)) + 1;
    x.height = Math.max(height(x.left), height(x.right)) + 1;
  
    return x;
  }
  
  function leftRotate(x) {
    const y = x.right;
    const T2 = y.left;
  
    y.left = x;
    x.right = T2;
  
    x.height = Math.max(height(x.left), height(x.right)) + 1;
    y.height = Math.max(height(y.left), height(y.right)) + 1;
  
    return y;
  }
  
  function insert(node, val) {
    if (!node) return new TreeNode(val);
  
    if (val < node.val) {
      node.left = insert(node.left, val);
    } else {
      node.right = insert(node.right, val);
    }
  
    node.height = Math.max(height(node.left), height(node.right)) + 1;
  
    const balanceFactor = getBalanceFactor(node);
  
    if (balanceFactor > 1 && val < node.left.val) {
      return rightRotate(node);
    }
  
    if (balanceFactor < -1 && val > node.right.val) {
      return leftRotate(node);
    }
  
    if (balanceFactor > 1 && val > node.left.val) {
      node.left = leftRotate(node.left);
      return rightRotate(node);
    }
  
    if (balanceFactor < -1 && val < node.right.val) {
      node.right = rightRotate(node.right);
      return leftRotate(node);
    }
  
    return node;
  }
  