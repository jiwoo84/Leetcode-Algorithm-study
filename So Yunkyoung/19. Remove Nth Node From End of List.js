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
 * Input: head = [1,2,3,4,5], n = 2
 * Output: [1,2,3,5]
 */
 var removeNthFromEnd = function(head, n) { 
    const dummy = new ListNode(0, head);
    // 링크드리스트의 원소 개수가 1개이고 n이 1일 때와 같은 여러 코너 케이스를 해결하기 위함.
    
    let front = dummy;
    let back = dummy;
    
    while (n >= 0) {
        front = front.next;
        n--;
    } // 위의 예시에서 front는 0->1->2
    
    while (front) { 
        // front가 null이 될 때까지 while문을 돔.
        // front: 2->3->4->5    back: 0->1->2->3 
        front = front.next;
        back = back.next;
    }

    back.next = back.next.next; // 3->5
    return dummy.next;
};
