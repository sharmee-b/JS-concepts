function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var treeA = new TreeNode(1, 2, 3);
treeA.left = new TreeNode(2, 4, 5);
treeA.right = new TreeNode(3, 6, 7);

var treeB = new TreeNode(9, 8, 2);
treeB.left = new TreeNode(8, 10, 11);
treeB.right = new TreeNode(2, 4, 5);

console.log(treeA);
console.log(treeB);


function searchTree(root, node) {
    if (root === node)
        return true;
    if (root.val === null)
        return false;
    searchTree(root.left);
    searchTree(root.right);
}