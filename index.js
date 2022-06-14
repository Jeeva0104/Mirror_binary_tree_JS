/* 
Given the following class structure
*/
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

/*
The following builds a simple tree.
*/
const root = new Node(1);
const left = new Node(2);
const leftOfLeft = new Node(3);
const rightOfLeft = new Node(4);
left.left = leftOfLeft;
left.right = rightOfLeft;
const right = new Node(6);
root.left = left;
root.right = right;

/*
  1   |  1
 2  6 | 6  2
3 4   |   4 3*/

/**
Complete this method that takes a tree and returns a mirror image
*/
function swap(node) {
  if (node === null) return node;
  const Left = swap(node.left);
  const Right = swap(node.right);

  node.left = Right;
  node.right = Left;

  return node;
}
const print = (node) => {
    if (node === null) return node
    if (node && node.value != null) {
        console.log(node.value)
    }
    print(node.left)
    print(node.right)
}
print(root)
function mirror(tree) {
  const mirrorImage = swap(tree);
  return mirrorImage;
}
console.log(mirror(root));
