import root from ("./depthFirstSearch");
function maxSubtreeSum(root) {
    let maxSum = Number.MIN_SAFE_INTEGER;
  
    function helper(node) {
      if (!node) return 0;
      let leftSum = helper(node.left);
      let rightSum = helper(node.right);
      let subtreeSum = leftSum + rightSum + node.val;
      maxSum = Math.max(maxSum, subtreeSum);
      return subtreeSum;
    }
  
    helper(root);
    return maxSum;
  }
console.log(root)