//breath first search algorithm inplemented using a queue 
// shift and push operations are used
function BFS(root) {
    let queue = [root];
   
    while (queue.length>0) {
        const elem=queue.shift();
        console.log(elem.value)
     if(elem.right){
        queue.push(elem.right);
     }
     if(elem.left){
        queue.push(elem.left)
     }
    }
  }
  function DFS(root){
   if(root==null) return
   DFS(root.left)
   DFS(root.right)
   console.log(root.value);
  }
  const root={
    value:10,
    right:{
        value:15,
        right:{
            value:18,
            right:null,
            left:null
        },
        left:{
            value:12,
            right:null,
            left:null
        }
    },
    left:{
        value:7,
        right:null,
        left:null
    }
  }
  BFS(root);

  DFS(root);
  //depth first search algorithm implemented using a stack

  