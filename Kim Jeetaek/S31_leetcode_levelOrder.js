//2022.10.11.

// 102. Binary Tree Level Order Traversal
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
/* Example
    root                        output
    [3,9,20,null,null,15,7]     [[3],[9,20],[15,7]]
    [1]                         [[1]]
    []                          []
*/
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
var levelOrder = function (root) {
  if (root === null) return [];
  const answer = [[root.val]];
  let queue = [root.left, root.right], // 같은 층의 노드들을 왼쪽부터 담아둘 배열
    nextQ = [], // queue가 비었을 때 즉, 한 층이 끝났을 때 다음 층을 보내줄 배열
    vals = []; // 한 층끼리 묶어서 answer에 넣어줄 배열
  while (queue.length) {
    const target = queue.shift();
    if (target) {
      vals.push(target.val);
      nextQ.push(target.left);
      nextQ.push(target.right);
    }
    if (!queue.length) {
      if (nextQ.length) answer.push(vals);
      queue = nextQ;
      nextQ = [];
      vals = [];
    }
  }
  return answer;
};
