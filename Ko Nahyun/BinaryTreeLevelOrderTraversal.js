/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const res = [];
    DFS(root, 0);

    function DFS(node, lev){
        if(!node) return;

        if(!res[lev]) {
            res[lev] = [node.val];
        }
        else{
            res[lev].push(node.val);
        }
        
        DFS(node.left, lev+1);
        DFS(node.right, lev+1);
    }

    return res;
};
