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
var removeNthFromEnd = function(head, n) {
    let cnt = 0;
    let start = head;
    while(start !== null){
        cnt++;
        start = start.next;
    };

    if(cnt === 1) return null;
    if(cnt === n) return head = head.next; // 첫번째 노드를 삭제하는 경우

    let i = 1;
    nthPrev = head;
    while(i < cnt - n) { // n-1번째 노드까지 가기
        nthPrev = nthPrev.next;
        i++;
    }

    if(nthPrev.next.next) { // n+1 번째 노드가 있는 경우
        const nthNext = nthPrev.next.next;
        nthPrev.next = nthNext; // n번째 노드 삭제
    }else {
        nthPrev.next = null;
    }

    return head;
};
