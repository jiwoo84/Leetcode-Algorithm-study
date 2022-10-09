//2022.10.09.

// 143. Reorder List
// You are given the head of a singly linked-list. The list can be represented as:
//     L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:
//     L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.
/* Example
    head            output
    [1,2,3,4]       [1,4,2,3]
    [1,2,3,4,5]     [1,5,2,4,3]
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
/* console.log()로는 맞는데 출력 땐 이전 값 그대로...
var reorderList = function (head) {
  const vals = [head.val];
  while (head.next) {
    head = head.next;
    vals.push(head.val);
  }
  const reorder = new Array(vals.length);
  for (let i = 0; i < reorder.length; i++)
    reorder[i] = i % 2 ? vals.pop() : vals.shift();
  let answer = null;
  while (reorder.length) {
    const val = reorder.pop();
    answer = new ListNode(val, answer);
  }
  return answer;
};*/
var reorderList = function (head) {
  let temp = head;
  const vals = [temp.val];
  while (temp.next) {
    temp = temp.next;
    vals.push(temp.val);
  }
  const reorder = new Array(vals.length);
  for (let i = 0; i < reorder.length; i++)
    reorder[i] = i % 2 ? vals.pop() : vals.shift();
  head.val = reorder.shift();
  while (head.next) {
    head = head.next;
    head.val = reorder.shift();
  }
  return head;
  // 19번 문제에서 이해 못 했던 풀이를 보며 생각했던 한 가지, '노드는 얕은 복사인가?'
  // 세 바퀴 돌려서 느리지만 그보다 이게 되는 걸 보아 얕은 복사인가 보다
};
