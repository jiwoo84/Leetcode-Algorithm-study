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
 * Input: head = [1,2,3,4,5]
 * Output: [1,5,2,4,3]
 * 1->2->3->4->5 => 1->5->2->4->3
 */
// 풀었으나 오류를 discussion 보고 알아냄
var reorderList = function(head) {
    let arr = [];
    let temp = head;
    while(temp){
        arr.push(temp);
        temp = temp.next;
    }
    
    temp = head;
    const len = arr.length
    for(let i = 0; i < len; i++){
        temp.next = i%2 === 0 ? arr.shift(): arr.pop();
        temp = temp.next;
    }
    temp.next = null; // 이거를 안하면 error가 난다... 왜지? 
};


// discussion 풀이
var reorderList = function(head) {
    // Get half then stack and insert
    
    // 1. Get middle with slow & fast node
    let slow = head, fast = head;
    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    // Slow node is middle node
    
    // mid 다음부터 끝까지의 노드를 stack에
    // Push remaining nodes to stack 
    const stack = [];
    let temp = slow.next;
    slow.next = null;
    while (temp) {
      stack.push(temp);
      temp = temp.next;
    }
    
    // Pop node and insert to even order
    let cur = head;
    while (stack.length > 0) {
      const toInsert = stack.pop();
      const prev = cur;
      cur = cur.next;
      prev.next = toInsert;
      toInsert.next = cur;
    }
    return head;
  }
