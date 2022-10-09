//2022.10.09.

// 19. Remove Nth Node From End of List
// Given the head of a linked list, remove the nth node from the end of the list and return its head.
/* Example
    head            n       output
    [1,2,3,4,5]     2       [1,2,3,5]
    [1]             1       []
    [1,2]           1       [1]
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const vals = [head.val];
  while (head.next) {
    head = head.next;
    vals.push(head.val);
  }
  let newNext = null,
    count = 1;
  while (vals.length) {
    const newVal = vals.pop();
    if (count !== n) newNext = new ListNode(newVal, newNext);
    count++;
  }
  return newNext;
};
// 아래는 한 바퀴만 도는 풀이라는데 이해 못 함...
var removeNthFromEnd = function (head, n) {
  let fast = head,
    slow = head;
  for (let i = 0; i < n; i++) fast = fast.next;
  if (!fast) return head.next;
  while (fast.next) (fast = fast.next), (slow = slow.next);
  slow.next = slow.next.next;
  return head;
};
